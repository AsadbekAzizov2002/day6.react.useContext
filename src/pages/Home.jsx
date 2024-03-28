import { useContext } from "react";
import { AppRouter } from "../App";

const Home = () => {
  const { name } = useContext(AppRouter);
  return (
    <div className=" mx-auto mt-10 max-w-md rounded-lg bg-gray-100 text-center shadow-md">
      <h2 className="mb-4 text-4xl font-semibold">Welcom Home</h2>
      <p> UserName : {name}</p>
    </div>
  );
};

export default Home;
