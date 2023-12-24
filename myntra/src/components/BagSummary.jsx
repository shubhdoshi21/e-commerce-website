import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });
  const totalItem = bag.length;
  const CONVENIENCE_FEES = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  bagItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="w-1/3 inline-block align-top px-5">
      <div className="">
        <div className="text-xs font-bold text-slate-600 my-3">
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className="text-sm">
          <span className="">Total MRP</span>
          <span className="float-right">₹{totalMRP}</span>
        </div>
        <div className="text-sm my-2">
          <span className="">Discount on MRP</span>
          <span className="float-right priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="text-sm mb-2">
          <span className="">Convenience Fee</span>
          <span className="float-right">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="font-bold py-3">
          <span className="">Total Amount</span>
          <span className="float-right">₹{finalPayment}</span>
        </div>
      </div>
      <button className="w-full rounded-md p-4 bg-[#ff3f6c] hover:bg-[#e42d2d] text-white">
        <div className="">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
