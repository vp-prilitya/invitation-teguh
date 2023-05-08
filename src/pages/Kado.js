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
    <div className="p-4 mt-10 lg:px-40">
      <Header>Kado Pernikahan</Header>
      <p className="text-center">
        Apabila Bapak/Ibu/Saudara/i ingin memberikan hadian pernihakan kepada
        kami, dapat melalui informasi berikut
      </p>
      <div className="flex  justify-evenly mt-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
            alt=""
            className="w-32"
          />
          <h1 className="mt-5 uppercase font-spaceMono font-light">
            Teguh Suprayitno
          </h1>
          <div className="flex gap-1">
            <h1 className="uppercase font-spaceMono font-bold">11102382555</h1>
            <svg
              fill="none"
              onClick={() => onCoppy("11102382555")}
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
        <div className=" flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
            className="w-32"
            alt=""
          />
          <h1 className="mt-5 uppercase font-spaceMono font-light">
            Teguh Suprayitno
          </h1>
          <div className="flex gap-1">
            <h1 className="uppercase font-spaceMono font-bold">11102382555</h1>
            <svg
              fill="none"
              onClick={() => onCoppy("11102382555")}
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
  );
}
