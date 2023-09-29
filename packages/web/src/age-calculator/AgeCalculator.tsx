import { useState } from "react";
import { AgeDisplay } from "./components/AgeDisplay/AgeDisplay";
import { DateForm } from "./components/DateForm/DateForm";
import { FocusScope } from "react-aria";

export const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState<Date>();
  return (
    <div className="font-poppins flex flex-col gap-y-14 md:gap-y-6 bg-white px-4 md:px-8 py-10 rounded-t-2xl rounded-bl-2xl rounded-br-[5rem]">
      <FocusScope>
        <DateForm onSubmit={setBirthDate} />
      </FocusScope>
      <AgeDisplay birthDate={birthDate} />
    </div>
  );
};
