import DressIcon from "../components/DressIcon";
import EatIcon from "../components/Eat";
import Header from "../components/Header";
import MasjidIcon from "../components/MasjidIcon";
import PrayIcon from "../components/Pray";

export default function WalimahPage() {
  return (
    <div className="relative flex-col mt-14" data-aos="fade-up">
      {/* <div className="absolute lg:hidden right-0 bg-gray-100 w-1/2 h-full -z-10 "></div> */}
      <Header>Adab Menghadiri Walimah</Header>
      <div className="flex justify-center mt-10 pb-10 gap-4">
        <div className="flex-col space-y-4">
          <div className="flex flex-col justify-center items-center bg-gold mx-auto h-52 w-32">
            <MasjidIcon className="w-10 fill-white mb-3" />
            <p className="text-sm text-center text-white font-spaceMono px-10">
              TIDAK MENUNDA SHOLAT
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border border-gold h-52 w-32">
            <EatIcon className="w-12 fill-gold mb-3" />
            <p className="text-sm text-center text-gold font-spaceMono px-10">
              DUDUKLAH SAAT MAKAN DAN MINUM
            </p>
          </div>
        </div>
        <div className="flex-col space-y-4 mt-10">
          <div className="flex flex-col justify-center items-center border border-gold h-52 w-32">
            <DressIcon className="w-10 fill-gold mb-3" />
            <p className="text-sm text-center text-gold font-spaceMono px-10">
              BERPAKAIAN SOPAN
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border border-gold h-52 w-32">
            <PrayIcon className="w-14 fill-gold mb-3" />
            <p className="text-sm text-center text-gold font-spaceMono px-10">
              MENDOAKAN KEDUA MEMPELAI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
