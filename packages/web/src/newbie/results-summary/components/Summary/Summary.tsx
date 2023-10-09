import classNames from "classnames";

type Color = "red" | "yellow" | "green" | "blue";

interface SummaryProps {
  color: Color;
  icon: JSX.Element;
  title: string;
  points: number;
  totalPoints: number;
}

const getBackgroundColor = (color: Color) => {
  switch (color) {
    case "red":
      return "bg-red-100";
    case "yellow":
      return "bg-yellow-100";

    case "green":
      return "bg-green-100";

    case "blue":
      return "bg-blue-100";
  }
};

const getTextColor = (color: Color) => {
  switch (color) {
    case "red":
      return "text-red-500";
    case "yellow":
      return "text-yellow-500";

    case "green":
      return "text-green-500";

    case "blue":
      return "text-blue-500";
  }
};

export const Summary = (props: SummaryProps) => {
  const { color, icon, title, points, totalPoints } = props;

  return (
    <div
      className={classNames(
        getBackgroundColor(color),
        getTextColor(color),
        "py-4 px-5 rounded-md flex gap-3 items-center"
      )}
    >
      <span>{icon}</span>
      <span className="capitalize font-medium">{title}</span>
      <div className="ml-auto text-gray-500 flex gap-2">
        <span className="text-gray-900 font-bold">{points}</span>/
        <span>{totalPoints}</span>
      </div>
    </div>
  );
};
