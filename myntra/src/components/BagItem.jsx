import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="my-1 text-sm border rounded-md relative p-2">
      <div className="absolute w-[120px] h-[150px]">
        <img className="" src={`../${item.image}`} />
      </div>
      <div className="p-2 ml-[120px] relative min-h-[162px]">
        <div className="font-bold">{item.company}</div>
        <div className="overflow-hidden text-slate-600">{item.item_name}</div>
        <div className="">
          <span className="font-semibold text-sm text-[#282c3f]">
            Rs {item.current_price}
          </span>
          <span className="line-through mx-1 text-xs text-[#7e818c]">
            Rs {item.original_price}
          </span>
          <span className="">({item.discount_percentage}% OFF)</span>
        </div>
        <div className="inline-flex text-xs py-1">
          <span className="font-bold pr-1">{item.return_period} days</span>
          return available
        </div>
        <div className="text-xs py-1">
          Delivery by
          <span className="pl-1 text-green-500">{item.delivery_date}</span>
        </div>
      </div>
      <div
        className="absolute cursor-pointer top-2 right-3"
        onClick={handleRemoveFromBag}
      >
        <IoIosCloseCircleOutline className="w-6 h-6" />
      </div>
    </div>
  );
};

export default BagItem;
