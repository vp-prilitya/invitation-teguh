import Header from "../components/Header";

export default function Gallery() {
  return (
    <div className="p-4 lg:px-40">
      <Header>Our Gallery</Header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh2.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh2.jpg?alt=media&token=89426a92-711b-48c7-ad19-888e37b33321"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh6.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh6.jpg?alt=media&token=5811d8fe-85d6-49f0-8b0a-18d51197bacf"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh4.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh4.jpg?alt=media&token=629940d7-fdd0-48d2-a4c9-ca902e9cd423"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh.jpg?alt=media&token=a813cc24-30e0-48d0-82d1-57a4f6cca761"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh5.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh5.jpg?alt=media&token=6491bc43-2469-4e93-a662-e62196d93ee0"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="zoom-in"
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.REACT_APP_HOST}images/teguh3.jpg`}
            // src="https://firebasestorage.googleapis.com/v0/b/sign-in-tutorial-89946.appspot.com/o/teguh3.jpg?alt=media&token=e5c14243-675c-463f-bd6c-ccfd0eb3c32f"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
