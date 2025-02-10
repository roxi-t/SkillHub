import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="flex items-center h-screen justify-center">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#615EFC"}
        height={100}
        width={100}
      />
    </div>
  );
}

export default Loader;
