import ChatComponent from "./components/ChatComponent";
import ChatNavigation from "./components/ChatNavigation";
import FirstPage from "./components/FirstPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Names from "./pages/NameS";
import Cover from "./pages/Cover";
import DatePage from "./pages/Date";
import Count from "./pages/Count";
import Gallery from "./pages/Gallery";
import socketIO from "socket.io-client";
import axios from "axios";
import Floral from "./components/floral";
import Kado from "./pages/Kado";
import { Toaster } from "react-hot-toast";
import WalimahPage from "./pages/Walimah";
import { toast } from "react-hot-toast";
import Footer from "./pages/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "./assets/lottie/wedding.json";

const socket = socketIO.connect(process.env.REACT_APP_HOST);

export default function Home() {
  let params = useParams();

  const [open, setOpen] = useState(false);
  const [lottie, setLottie] = useState(false);
  const [idData, setIdData] = useState(0);
  const [lengthData, setLengthData] = useState(0);
  const [loadingData, setLoadingData] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [offset, setOffset] = useState(0);
  const [dataChat, setDataChat] = useState([]);
  const [openChat, setOpenChat] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const url =
    process.env.REACT_APP_HOST +
    "music/y2mate.com - A Thousand Years  Christina Perri Lyrics video dan terjemahan.mp3";

  const audio = new Audio(url);

  const hadndleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (form.name === "") {
      toast.error("Nama harus di isi", {
        style: {
          backgroundColor: "#18122B",
          color: "white",
        },
      });
    } else {
      setForm({ ...form, message: "" });
      setLoadingSend(true);
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_HOST}api/comments`,
          form
        );
        socket.emit("message", {
          ...result.data.data,
          socketID: socket.id,
        });
        setDataChat((oldData) => [result.data.data, ...oldData]);
        setIdData(result.data.data.id);
        setLoadingSend(false);
      } catch (err) {
        console.log(err);
        setLoadingSend(false);
      }
    }
  };

  const loadMore = () => {
    if (!loadingData && dataChat.length <= lengthData) {
      console.log("load");
      setOffset(offset + 1);
    }
  };

  const onClick = () => {
    setOpen(!open);
    audio.play();
  };

  const onClickChat = () => {
    if (!openChat) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    setOpenChat(!openChat);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const getData = async () => {
      setLoadingData(true);
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_HOST}api/comments`,
          {
            params: {
              offset: offset,
              limit: 20,
            },
          }
        );
        setLoadingData(false);
        setLengthData(result.data.count);
        setDataChat((oldData) => [...oldData, ...result.data.rows]);
      } catch (err) {
        setLoadingData(false);
        console.log(err);
      }
    };
    getData();
  }, [offset]);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      if (idData !== data.id) {
        setDataChat([data, ...dataChat]);
      }
      setLengthData((oldData) => oldData + 1);
    });
    return () => {
      socket.off("messageResponse");
    };
  }, [dataChat, idData]);

  return (
    <>
      <div
        className={` ${
          lottie ? "opacity-0 -z-50" : "opacity-100 z-[60]"
        } fixed  flex overflow-hidden h-screen justify-center mx-auto items-center bg-gray-200 w-screen duration-[3000ms]`}
      >
        <div className="w-fit h-fit p-3 mx-auto">
          <Lottie
            animationData={animationData}
            autoPlay={true}
            className="w-full lg:w-96"
            loop={false}
            onComplete={() => setLottie(true)}
          />
          <h1
            data-aos="fade-in"
            className="text-xl text-center mt-6 text-zinc-400 lg:text-xl mb-8 font-spaceMono font-extralight"
          >
            Teguh & Icha
          </h1>
        </div>
      </div>

      <div
        className={`${
          open
            ? "overflow-visible h-full"
            : "overflow-hidden h-screen bg-cokelat"
        } relative w-screen lg:bg-contain duration-700`}
      >
        <div>
          <Toaster />
        </div>
        <ChatNavigation open={open} onClick={onClickChat} count={lengthData} />
        <ChatComponent
          openChat={openChat}
          open={open}
          onClick={onClickChat}
          dataChat={dataChat}
          form={form}
          hadndleChange={hadndleChange}
          onSubmit={onSubmit}
          setOffset={loadMore}
          offset={offset}
          loading={loadingData}
          dataLength={lengthData}
          sendLoading={loadingSend}
        />
        <FirstPage open={open} onClick={onClick} to={params.id} />
        <Cover open={open} />
        <div className="flex justify-center items-center mt-7">
          <Floral className="w-24 h-24 fill-primary animate-spin-slow" />
        </div>
        <Names className="-mt-2" />
        <DatePage />
        <Count />
        <Gallery />
        <div className="relative overflow-hidden">
          <img
            alt=""
            src={`${process.env.REACT_APP_HOST}images/bunga.svg`}
            className={` -left-[80%] -top-[8%] absolute z-20 lg:h-screen w-screen  lg:-left-[55%] lg:top-20 animate-bounce-slow duration-1000`}
          />
          <div
            className={` -right-[80%] top-[14%] absolute z-20 w-screen lg:h-screen duration-1000 rotate-180  lg:-right-[15%] lg:top-20`}
          >
            <img
              alt=""
              src={`${process.env.REACT_APP_HOST}images/bunga.svg`}
              className={`animate-bounce-slow lg:h-screen`}
            />
          </div>
          <WalimahPage />
          <Kado />
        </div>
        <Footer />
      </div>
    </>
  );
}
