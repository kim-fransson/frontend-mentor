interface AverageDisplayProps {
  totalScore: number;
  scores: number[];
}

export const AverageDisplay = (props: AverageDisplayProps) => {
  const { totalScore, scores } = props;
  const average = Math.floor(
    scores.reduce((acc, val) => acc + val, 0) / scores.length
  );
  return (
    <div className="gap-2 md:gap-1 rounded-full inline-flex items-center justify-center flex-col w-36 h-36 md:w-44 md:h-44 bg-indigo-600">
      <span className="text-gray-100 text-5xl md:text-6xl font-extrabold mt-2">
        {average}
      </span>
      <span className="text-gray-400 font-medium text-sm">of {totalScore}</span>
    </div>
  );
};
