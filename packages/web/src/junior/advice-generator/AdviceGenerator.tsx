import useSWR from "swr";
import { AdviceCard } from "./components/AdviceCard/AdviceCard";
import { Advice, SlipAdvice } from "./env";
import useSWRMutation from "swr/mutation";
import Loading from "./assets/icon-load.svg?react";
import Warning from "./assets/icon-exclamation.svg?react";

async function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export const AdviceGenerator = () => {
  const { isLoading, data, error } = useSWR<SlipAdvice>(
    "/advice",
    fetchAdvice,
    {
      revalidateOnFocus: false,
    }
  );
  const { trigger } = useSWRMutation("/advice", fetchAdvice);

  return isLoading ? (
    <Loading className="text-emerald-400 w-20 h-20 animate-spin animate-infinite animate-duration-[3000ms] animate-ease-in-out" />
  ) : error ? (
    <div>
      <Warning className="text-red-500 w-20 h-20" />
      <span className="text-lg text-red-400 font-manrope">API Down</span>
    </div>
  ) : (
    <AdviceCard
      advice={data?.slip as Advice}
      onNextAdvice={() => {
        trigger();
      }}
    />
  );
};
