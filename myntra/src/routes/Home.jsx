import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <div className="w-full px-40 py-10 flex flex-wrap justify-evenly">
      {items.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
