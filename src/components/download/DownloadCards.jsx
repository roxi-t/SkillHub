import qrIOS from "assets/images/Group 39508.svg";
import qrAndroid from "assets/images/Group 39511.svg";
import { Link } from "react-router-dom";

const DownloadCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4 items-center font-yekan">
      {[
        {
          title: "برای iOS",
          version: "iOS 15.6+",
          qr: qrIOS,
        },
        {
          title: "برای اندروید",
          version: "Android 8.0+",
          qr: qrAndroid,
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-[#EDF2F6] p-6 rounded-3xl text-center w-64"
        >
          <h3 className="text-gray-700 text-2xl mb-2 font-semibold">
            {card.title}
          </h3>
          <p className="text-blue-500 text-sm mb-4">{card.version}</p>
          <Link
            to="#"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold inline-block mb-4"
          >
            دانلود
          </Link>
          <img
            src={card.qr}
            alt={`QR Code for ${card.title}`}
            className="w-20 h-20 mx-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default DownloadCards;
