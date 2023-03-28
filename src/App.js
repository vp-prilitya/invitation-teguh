import { useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import ChatNavigation from "./components/ChatNavigation";
import FirstPage from "./components/FirstPage";
import Flower from "./components/Flower";

function App() {
  const [open, setOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  const onClickChat = () => {
    if (!openChat) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    setOpenChat(!openChat);
  };

  return (
    <div className={`relative md:bg-contain`}>
      <ChatNavigation open={open} onClick={onClickChat} />
      <ChatComponent openChat={openChat} open={open} onClick={onClickChat} />
      <FirstPage open={open} onClick={onClick} />
      <div className="relative h-screen w-screen overflow-x-hidden">
        <Flower className="absolute h-96 animate-bounce-slow -left-[450px] md:h-screen" />
        <Flower className="absolute h-96 animate-bounce-slow -right-[450px] bottom-0 md:h-screen" />
        <div
          className={` ${
            open ? "opacity-100" : "opacity-0"
          } absolute w-1/2 left-6 bottom-20 font-spaceMono text-center text-xs text-sky-900 transition duration-700`}
        >
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
          <br />
          <br />
          (Q.S Ar Rum : 21)
        </div>
      </div>
      <div className="h-screen">oke</div>
      <div className="h-screen">oke</div>
      <div className="h-screen">oke</div>
    </div>
  );
}

export default App;
