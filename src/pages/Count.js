import Countdown from "react-countdown";

export default function Count() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <div className="bg-primary w-16 p-2 rounded-lg text-white">
          <h1 className="text-xl font-bold">{days}</h1>
          <p className="text-xs">Hari</p>
        </div>
        <div className="bg-primary w-16 p-2 rounded-lg text-white">
          <h1 className="text-xl font-bold">{hours}</h1>
          <p className="text-xs">Jam</p>
        </div>
        <div className="bg-primary w-16 p-2 rounded-lg text-white">
          <h1 className="text-xl font-bold">{minutes}</h1>
          <p className="text-xs">Menit</p>
        </div>
        <div className="bg-primary w-16 p-2 rounded-lg text-white">
          <h1 data-aos="flip-right" className="text-xl font-bold">
            {seconds}
          </h1>
          <p className="text-xs">Detik</p>
        </div>
      </>
    );
  };

  return (
    <div className=" p-4 bg-cokelatLight bg-opacity-10 py-20 lg:px-40">
      <div
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          className="object-cover w-full rounded-t-lg h-[500px] md:h-96 md:w-[500px] md:rounded-none md:rounded-l-lg"
          src={`${process.env.REACT_APP_HOST}images/teguh4.jpg`}
          alt=""
        />
        <div className="flex text-center flex-col p-4 leading-normal">
          <h5 className="mb-2 font-spaceMono font-semibold text-[1.3rem] tracking-tight text-gold uppercase">
            Menuju Hari Bahagia
          </h5>
          <p className="mb-3 font-thin text-cokelat opacity-50">
            Siang dan malam berganti begitu cepat, di antara saat-saat
            mendebarkan yang belum pernah kami rasakan sebelumnya. Kami nantikan
            kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji
            suci kami di hari yang bahagia.
          </p>
          <div className="flex justify-evenly lg:justify-center lg:space-x-10 mt-5">
            <Countdown
              date={new Date("2023-06-23T00:00:00")}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
