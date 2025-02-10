import present5demo from "assets/images/present5demo.svg";
import present6demo from "assets/images/present6demo.svg";
import present2Demo from "assets/images/present2Demo.svg";
import present4demo from "assets/images/present4demo.svg";
import Present1demo from "assets/images/Present1demo.svg";
import present3demo from "assets/images/present3demo.svg";

function AppDemoSection() {
  return (
    <section className="bg-white w-full font-yekan">
      <h2 className="text-center mb-4 pt-8 md:text-4xl text-2xl font-semibold">
        تماشای <span className="text-[#615efc]">دموی اپلیکیشن</span> ما
      </h2>
      <p className="text-center md:text-base text-[#7d7d7d] mb-10 max-w-[600px] mx-auto my-0">
        تجربه کنید که اپلیکیشن ما چگونه به راحتی کار می‌کند! دموی اپلیکیشن را
        تماشا کنید تا ببینید چطور تعویض مهارت‌ها به راحتی انجام می‌شود.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
          <img
            src={present5demo}
            className="hidden sm:block mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 1"
          />
          <img
            src={present6demo}
            className="hidden sm:block mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 2"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
          <img
            src={present2Demo}
            className="hidden sm:block mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 3"
          />
          <img
            src={present4demo}
            className="hidden sm:block mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
          <img
            src={Present1demo}
            className="mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 5"
          />
          <img
            src={present3demo}
            className="mb-3 w-full transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl"
            alt="Demo 6"
          />
        </div>
      </div>
    </section>
  );
}

export default AppDemoSection;
