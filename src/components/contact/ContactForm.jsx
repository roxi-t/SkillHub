import { contacts } from "constants/contact";
import { inputs } from "constants/inputs";

const ContactForm = () => {
  return (
    <section className="flex gap-12 p-12 mt-10 mb-36 flex-col lg:flex-row items-center justify-center font-yekan">
      <div className="bg-white rounded-xl shadow-lg p-8 lg:w-[40%] w-full text-center">
        <form className="flex flex-col gap-3">
          {inputs.map((input) => {
            return (
              <div key={input.name}>
                {!input.isArea ? (
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    className="w-full p-3 border-none rounded-lg bg-[#EDF2F6] text-[#494953] placeholder-[#8D8BA7] focus:outline-none font-yekan"
                  />
                ) : (
                  <textarea
                    name={input.name}
                    placeholder={input.placeholder}
                    className="w-full p-3 border-none rounded-lg bg-[#EDF2F6] text-[#494953] placeholder-[#8D8BA7] focus:outline-none resize-none h-[100px] font-yekan"
                  ></textarea>
                )}
              </div>
            );
          })}
          <button
            type="button"
            className="w-full p-3 rounded-[30px] bg-[#FF5656] text-white font-bold hover:bg-[#e13b3d] transition-all duration-300 font-yekan"
          >
            ارسال پیام
          </button>
        </form>
      </div>
      <div className="max-w-[350px] ml-10 mt-2 text-[#494953] font-yekan">
        <h1 className="text-3xl mb-5 font-bold">با ما در تماس باشید</h1>
        <p className="text-[#9795B5] text-lg mb-5 leading-relaxed font-normal">
          اطلاعات خود را وارد کنید و پیغام خود را بفرستید تا در اسرع وقت با شما
          تماس بگیریم.
        </p>
        <div className="flex flex-col gap-4 justify-center">
          {contacts.map((contact) => {
            return (
              <div
                key={contact.text}
                className="flex items-center gap-3 text-[#9795B5] text-lg"
              >
                <contact.icon className="w-5 h-5" />
                {contact.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
