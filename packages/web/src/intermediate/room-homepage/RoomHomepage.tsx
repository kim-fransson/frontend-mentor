export interface RoomHomepageProps {}

export const RoomHomepage = (props: RoomHomepageProps) => {
  return (
    <div
      className="grid lg:grid-cols-[382fr_373fr_144fr_398fr] lg:grid-rows-[484fr_240fr] min-h-screen
      grid-cols-1 grid-rows-[355fr_405fr_231fr_302fr_223fr]"
    >
      <div className="bg-red-400 lg:col-span-2 lg:row-start-auto row-start-1 col-start-1"></div>
      <div className="bg-yellow-400 lg:col-start-3 lg:col-end-5 lg:row-start-1 row-start-2"></div>
      <div className="p-2 bg-stone-800 text-white lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:ml-0 row-start-1 col-start-1 self-end ml-auto">
        button
      </div>

      <div className="bg-purple-400 lg:row-start-auto row-start-3"></div>
      <div className="bg-teal-400 lg:col-span-2 lg:row-start-auto row-start-4"></div>
      <div className="bg-amber-400 lg:row-start-auto row-start-5"></div>
    </div>
  );
};
