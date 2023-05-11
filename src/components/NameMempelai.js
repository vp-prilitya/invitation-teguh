import InstagramIcon from "../components/InstagramIcon";

export default function NameMempelai({
  name,
  form,
  parent,
  dataAos,
  img,
  linkIg,
}) {
  const clickIg = () => {
    window.open(linkIg);
  };
  return (
    <div>
      <div
        data-aos="flip-right"
        className="relative overflow-hidden border-4 bg-gray-200 rounded-full w-40 h-40 mx-auto"
      >
        <img alt="" className="absolute" src={img} />
      </div>

      <h1
        data-aos={dataAos}
        className="font-andasia mt-2 font-semibold text-gold  text-[2rem] lg:text-[3rem] lg:font-normal"
      >
        {name}
      </h1>
      <p className="text-xs font-mono lg:text-sm font-semibold mt-6">{form}</p>
      <p className="text-sm font-mono lg:text-base">{parent}</p>
      <div className="flex justify-center w-full mt-2">
        <div onClick={clickIg} className="bg-primary p-1 rounded-full z-20">
          <InstagramIcon className="w-6 fill-gray-100" />
        </div>
      </div>
    </div>
  );
}
