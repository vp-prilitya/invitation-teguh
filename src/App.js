import { useEffect, useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import ChatNavigation from "./components/ChatNavigation";
import DressIcon from "./components/DressIcon";
import FirstPage from "./components/FirstPage";
import MasjidIcon from "./components/MasjidIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import RingIcon from "./components/RingIcon";
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

const socket = socketIO.connect(process.env.REACT_APP_HOST);

function App() {
  const [open, setOpen] = useState(false);
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
    setForm({ ...form, message: "" });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_HOST}api/comments`,
        form
      );
      socket.emit("message", {
        ...result.data.data,
        socketID: socket.id,
      });
    } catch (err) {
      console.log(err);
    }
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
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_HOST}api/comments`
        );

        setDataChat(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

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
      <ChatNavigation
        open={open}
        onClick={onClickChat}
        count={dataChat.length}
      />
      <ChatComponent
        openChat={openChat}
        open={open}
        onClick={onClickChat}
        dataChat={dataChat}
        form={form}
        hadndleChange={hadndleChange}
        onSubmit={onSubmit}
      />
      <FirstPage open={open} onClick={onClick} />
      <Cover open={open} />
      <div className="flex justify-center items-center mt-7">
        <Floral className="w-24 fill-stone-700" />
      </div>
      <Names className="-mt-6" />
      <DatePage />
      <Count />
      <Gallery />
      <Kado />
      <div className="relative flex-col mt-3" data-aos="fade-up">
        <div className="absolute right-0 bg-gray-100 w-1/2 h-full -z-10 "></div>
        <h1 className=" px-5 pt-10 font-spaceMono text-center text-xl font-bold">
          Adat Menghadiri Walimah
        </h1>
        <div className="flex justify-center mt-10 pb-10 gap-4">
          <div className="flex-col space-y-4">
            <div className="flex flex-col justify-center items-center bg-primary mx-auto h-52 w-32">
              <MasjidIcon className="w-10 fill-white mb-3"></MasjidIcon>
              <p className="text-sm text-center text-white font-spaceMono px-10">
                TIDAK MENUNDA SHOLAT
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border border-grayDark h-52 w-32">
              <MasjidIcon className="w-10 fill-grayDark mb-3"></MasjidIcon>
              <p className="text-sm text-center text-grayDark font-spaceMono px-10">
                TIDAK MENUNDA SHOLAT
              </p>
            </div>
          </div>
          <div className="flex-col space-y-4 mt-10">
            <div className="flex flex-col justify-center items-center border border-grayDark h-52 w-32">
              <DressIcon className="w-10 fill-grayDark mb-3" />
              <p className="text-sm text-center text-grayDark font-spaceMono px-10">
                BERPAKAIAN SOPAN
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border border-grayDark h-52 w-32">
              <DressIcon className="w-10 fill-grayDark mb-3" />
              <p className="text-sm text-center text-grayDark font-spaceMono px-10">
                BERPAKAIAN SOPAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
