import Floral from "../components/floral";

export default function Footer() {
  return (
    <div className="w-full bg-potoFooter bg-cover bg-no-repeat bg-primary mt-8">
      <div className="bg-black bg-opacity-20 w-full h-full">
        <div className="rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="fill-white"
              d="M0 64l48 26.7C96 117 192 171 288 197.3 384 224 480 224 576 208s192-48 288-74.7C960 107 1056 85 1152 96s192 53 240 74.7l48 21.3v128H0z"
            ></path>
          </svg>
        </div>
        <div className="text-center text-gray-300 space-y-3 ml-5">
          <h1 className="text-3xl lg:text-5xl mb-8 font-semibold font-andasia">
            Teguh & Icha
          </h1>
          {/* <p className="font-spaceMono">25 Juni 2023</p> */}
          <p className="font-spaceMono  text-sm">
            Atas kehadiran dan doa restunya, <br /> kami ucapankan terimakasih.
          </p>
          <p className="italic text-gold font-spaceMono">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </div>
        <div className="flex justify-center items-center mt-7">
          <Floral className="w-16 h-16 fill-gold animate-spin-slow" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-gray-100"
            d="M0 64l48 26.7C96 117 192 171 288 197.3 384 224 480 224 576 208s192-48 288-74.7C960 107 1056 85 1152 96s192 53 240 74.7l48 21.3v128H0z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
