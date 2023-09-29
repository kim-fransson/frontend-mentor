import { useEffect, useState } from "react";

interface AgeDisplayProps {
  birthDate?: Date;
}

interface Age {
  days?: number;
  months?: number;
  years?: number;
}

const calcDiffFromNow = (birthDate: Date) => {
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  const days = now.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    days,
  };
};

export const AgeDisplay = (props: AgeDisplayProps) => {
  const { birthDate } = props;
  const [value, setValue] = useState<Age>({
    years: undefined,
    months: undefined,
    days: undefined,
  });
  useEffect(() => {
    if (birthDate) {
      setValue(calcDiffFromNow(birthDate));
    }
  }, [birthDate]);
  return (
    <div>
      {Object.keys(value || {}).map((key) => (
        <div className="flex gap-2 items-center" key={key}>
          <span className="text-violet-600 tracking-tight text-4xl md:text-7xl font-bold italic">
            {value?.[key as keyof Age] || "- -"}
          </span>
          <span className="text-gray-900 font-bold italic tracking-tighter md:tracking-wide text-4xl md:text-7xl">
            {key}
          </span>
        </div>
      ))}
    </div>
  );
};
