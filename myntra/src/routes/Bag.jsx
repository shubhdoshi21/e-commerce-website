import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useDispatch, useSelector } from "react-redux";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
