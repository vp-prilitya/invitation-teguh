import { toast } from "react-hot-toast";
import Header from "../components/Header";

export default function Kado() {
  const onCoppy = async (number) => {
    toast.success("Nomor rekening berhasil disalin", {
      style: {
        backgroundColor: "#18122B",
        color: "white",
      },
    });
    await navigator.clipboard.writeText(number);
  };
  return (
    <div data-aos="zoom-in" className="p-4 mt-10 lg:px-40">
      <Header>Kado Pernikahan</Header>
      <p className="text-center">
        Apabila Bapak/Ibu/Saudara/i ingin memberikan hadiah pernikahan kepada
        kami, dapat melalui informasi berikut
      </p>
      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col items-center justify-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
            alt=""
            className="w-32"
          />
          <div>
            <h1 className="mt-5 uppercase font-spaceMono font-light">
              Teguh Suprayitno
            </h1>
            <div className="flex gap-1">
              <h1 className="uppercase font-spaceMono text-sm font-bold">
                1080020062064
              </h1>
              <svg
                fill="none"
                onClick={() => onCoppy("1080020062064")}
                stroke="currentColor"
                className="w-6"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BANK_BRI_logo_%28vertical%29.svg/2560px-BANK_BRI_logo_%28vertical%29.svg.png"
            className="w-28"
            alt=""
          />
          <div>
            <h1 className="mt-5 uppercase font-spaceMono font-light">
              Teguh Suprayitno
            </h1>
            <div className="flex gap-1">
              <h1 className="uppercase font-spaceMono text-sm font-bold">
                335801058746535
              </h1>
              <svg
                fill="none"
                onClick={() => onCoppy("335801058746535")}
                stroke="currentColor"
                className="w-6"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
