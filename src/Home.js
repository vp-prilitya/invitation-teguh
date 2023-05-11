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

const socket = socketIO.connect(process.env.REACT_APP_HOST);

export default function Home() {
  let params = useParams();

  const [open, setOpen] = useState(false);
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
    "music/SnapInsta.io - Nothing's Gonna Change My Love For You George Benson (Christian Ama Saxophone Cover) (128 kbps).mp3";

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
        setLoadingSend(false);
      } catch (err) {
        console.log(err);
        setLoadingSend(false);
      }
    }
  };

  const loadMore = () => {
    setOffset(offset + 1);
  };

  const onClick = () => {
    setOpen(!open);
    // audio.play();
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
              limit: 10,
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
    socket.on("messageResponse", (data) => setDataChat([data, ...dataChat]));
  }, [dataChat]);

  return (
    <div
      className={`${
        open ? "overflow-visible h-full" : "overflow-hidden h-screen bg-cokelat"
      } relative w-screen lg:bg-contain`}
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
      <WalimahPage />
      <Kado />
      <Footer />
    </div>
  );
}
