import Logo from "../../assets/logo.svg?react";

export interface MyBalanceProps {
  balance: number;
}

export const MyBalance = (props: MyBalanceProps) => {
  return (
    <div className="shadow-md flex justify-between items-center rounded-lg bg-tomato-700 pl-4 pr-8 py-5 text-white">
      <div className="flex flex-col gap-1">
        <span className="text-sm">My balance</span>
        <span className="text-2xl before:content-['$'] font-bold tracking-wide">
          {props.balance}
        </span>
      </div>
      <Logo className="flex-shrink-0" />
    </div>
  );
};
