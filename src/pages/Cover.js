export default function Cover({ open }) {
  return (
    <div className="relative h-screen overflow-hidden shadow-lg">
      <img
        alt=""
        src={`${process.env.REACT_APP_HOST}images/bunga.svg`}
        // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/bunga.svg?alt=media&token=8304e5fa-b003-4b9d-b40a-b3c4bbbeaecc"
        className={`  ${
          open ? "-left-[78%]" : "-left-[55%]"
        } absolute z-20 lg:h-screen w-screen  lg:-left-[41%] animate-bounce-slow duration-1000`}
      />
      <div
        className={`  ${
          open ? "-right-[77%] -top-[40%]" : "-right-[49%] -top-[40%]"
        } absolute z-20 w-screen lg:h-screen duration-1000 rotate-180  lg:-right-[2%] lg:top-0`}
      >
        <img
          alt=""
          src={`${process.env.REACT_APP_HOST}images/bunga.svg`}
          // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/bunga.svg?alt=media&token=8304e5fa-b003-4b9d-b40a-b3c4bbbeaecc"
          className={`animate-bounce-slow lg:h-screen`}
        />
      </div>
      <div
        className={` ${
          open ? "opacity-100" : "opacity-50"
        } relative h-[100vh] z-10 bg-poto bg-cover bg-no-repeat bg-primaryDark bg-center lg:bg-contain duration-700 overflow-hidden`}
      >
        <div className="bg-primary w-full h-full bg-opacity-30"></div>
        <div
          className={` ${
            open ? "opacity-100" : "opacity-0"
          } absolute text-center text-stone-300 bottom-24 lg:bottom-12 duration-1000`}
        >
          <div className="mb-36">
            <h1 className="text-3xl lg:text-5xl font-semibold font-andasia">
              Teguh & Icha
            </h1>
            <p className="font-spaceMono lg:text-lg">23 Juni 2023</p>
          </div>
          <p className="text-xs lg:text-base lg:px-96 mt-2 font-mono opacity-90 px-10 ">
            “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
            hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berfikir.”
            <br />
            <br />
            (Ar-Rum: 21)
          </p>
        </div>
      </div>
    </div>
  );
}
