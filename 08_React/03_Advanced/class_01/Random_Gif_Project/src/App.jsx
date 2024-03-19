import Random from "./components/Random";
import Tag from "./components/Tags";

export default function App() {
  return (

    <div className="w-full min-h-screen p-8 flex flex-col background  overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-xl text-center w-full
       px-10 py-3 text-xl lg:text-3xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex  space-x-3 w-full items-center gap-x-auto mt-[10px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
