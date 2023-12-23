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
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
