import Bird from "../components/Bird";
import Bismillah from "../components/Bismillah";
import NameMempelai from "../components/NameMempelai";

export default function Names({ className }) {
  return (
    <div
      className={` ${className} relative flex overflow-hidden flex-col items-center justify-center text-stone-800 py-12 lg:px-40`}
    >
      <div className="absolute left-0 -top-20 lg:top-0 md:left-[65%]">
        {/* <Bird className="fill-primary opacity-10" /> */}
      </div>
      <Bismillah className="fill-stone-700 w-64 " />
      <span className="text-sm mt-3 italic">
        Assalamualaikum Warahmatullahi Wabarakatuh
      </span>
      <p className="text-center mt-3 font-spaceMono text-sm lg:text-base p-3">
        Tanpa Mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
        kerabat sekalian untuk menghadiri acara pernikahan kami:
      </p>
      <div className="flex flex-col justify-center mt-8 text-center">
        <NameMempelai
          name="Teguh Suprayitno S.T"
          form="PUTRA PERTAMA DARI"
          parent="(Alm) Bapak Sutarno dan (Alm) Ibu Nabawiyah"
          dataAos="fade-in"
          img={`${process.env.REACT_APP_HOST}images/teguh_solo.png`}
        />
        <h1 className="font-andasia text-[2rem] lg:text-[2rem] mt-5">&</h1>
        <NameMempelai
          name="Aisyah S. psi"
          form="PUTRI PERTAMA DARI"
          parent="Bapak Chandra dan Ibu Nurbaiti"
          dataAos="fade-in"
          img={`${process.env.REACT_APP_HOST}images/aisyah_solo.png`}
        />
      </div>
    </div>
  );
}
