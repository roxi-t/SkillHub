function CheckBox() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] bg-white cursor-pointer"
        />
        <p className="font-yekan text-[14px] font-light">
          به‌جای دریافت متقابل مهارت، حاضرم امتیاز دریافت کنم.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] bg-white cursor-pointer"
        />
        <p className="font-yekan text-[14px] font-light">
          می‌توانم این مهارت را به‌صورت موازی به چندین نفر آموزش دهم.
        </p>
      </div>
    </div>
  );
}

export default CheckBox;
