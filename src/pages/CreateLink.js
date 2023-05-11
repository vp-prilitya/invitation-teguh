import { useState } from "react";

export default function CreateLink() {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const clickSubmit = () => {
    setLink(`http://localhost:3001/${btoa(name)}`);
    setName("");
  };

  const hadndleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="items-center flex flex-col justify-center h-screen w-screen p-5">
      <h2 className="uppercase font-bold text-lg mb-10">Buat Link Undangan</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={hadndleChange}
        className="bg-white border text-gray-900 text-sm rounded-lg block w-full lg:w-1/3 p-2.5 "
        placeholder="Nama Lengkap"
      />
      <button
        onClick={clickSubmit}
        className={`disabled:bg-gray-200 lg:w-1/3 bg-gold w-full items-center rounded-lg hover:bg-gol text-white py-2 mt-3 transition duration-300`}
        disabled={name === "" ? true : false}
      >
        Submit
      </button>
      <div className="w-full border-2 lg:w-1/3 rounded-md p-5 flex justify-center mt-10">
        <a
          className="italic text-blue-700 hover:cursor-pointer hover:text-blue-900"
          target="blank"
          href={link}
        >
          {link}
        </a>
      </div>
    </div>
  );
}
