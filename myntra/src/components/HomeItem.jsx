import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="w-64 p-2 m-2">
        <img className="w-full rounded-md" src={item.image} alt="item image" />
        <div className="text-xs py-2">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="font-bold overflow-hidden text-nowrap text-ellipsis text-[#282c3f]">
          {item.company}
        </div>
        <div className="text-[#535766] text-xs overflow-hidden text-nowrap text-ellipsis">
          {item.item_name}
        </div>
        <div className="py-2">
          <span className="font-bold text-sm">Rs {item.current_price}</span>
          <span className="text-xs line-through text-[#7e818c] px-1">
            Rs {item.original_price}
          </span>
          <span className="text-[#ff905a] text-sm">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        {bag.includes(item.id) ? (
          <button
            className="w-full rounded-3xl bg-red-500 p-2 text-white hover:bg-red-700"
            onClick={handleRemoveFromBag}
          >
            Remove
          </button>
        ) : (
          <button className="w-full rounded-3xl bg-green-500 p-2 text-white hover:bg-green-700" onClick={handleAddToBag}>
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
