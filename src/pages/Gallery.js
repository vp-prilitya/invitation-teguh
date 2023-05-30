import Header from "../components/Header";

export default function Gallery() {
  return (
    <div className="p-4 lg:px-40">
      <Header>Our Gallery</Header>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh2.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh6.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh21.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh23.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh26.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh22.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh20.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh27.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh24.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh25.jpg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
