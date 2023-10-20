import type { Meta, StoryObj } from "@storybook/react";
import { Bar } from "./Bar";
import { useEffect, useState } from "react";

const meta: Meta<typeof Bar> = {
  component: Bar,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Bar>;

export const Basic: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex max-w-xl gap-4 items-end justify-between ">
        <Bar value={52.36} color="blue" scale={1} label="scale 1 / blue" />
        <Bar value={52.36} color="blue" scale={2} label="scale 2 / blue" />
        <Bar value={52.36} color="blue" scale={3} label="scale 3 / blue" />
        <Bar value={31.07} color="orange" scale={1} label="scale 1 / orange" />
        <Bar value={31.07} color="orange" scale={2} label="scale 2 / orange" />
        <Bar value={31.07} color="orange" scale={3} label="scale 3 / orange" />
      </div>
    );
  },
};

const BarWithChangingValues = () => {
  const [inputValueA, setInputValueA] = useState(52.36);
  const [inputValueB, setInputValueB] = useState(31.07);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInputValueA(Math.floor(Math.random() * 100) + 1);
      setInputValueB(Math.floor(Math.random() * 100) + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-80 max-w-xl gap-4 items-end justify-between ">
      <Bar value={inputValueA} color="blue" scale={1} label="scale 1 / blue" />
      <Bar value={inputValueA} color="blue" scale={2} label="scale 2 / blue" />
      <Bar value={inputValueA} color="blue" scale={3} label="scale 3 / blue" />
      <Bar value={inputValueB} scale={1} label="scale 1 / orange" />
      <Bar value={inputValueB} scale={2} label="scale 2 / orange" />
      <Bar value={inputValueB} scale={3} label="scale 3 / orange" />
    </div>
  );
};

export const BarTranstions: Story = {
  args: {},
  render: () => <BarWithChangingValues />,
};
