import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import clsx from "clsx";
import { useState } from "react";
import { useAppState } from "../context";

function ItemCard({ item }) {
  const { id, imgSrc, name, price, ratings } = item;
  const { addToCart } = useAppState();

  const [isFavorite, setIsFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));


  return (
    <div className="itemCard" id={id}>
      <div
        className={clsx("isFavourite", isFavorite && "active")}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => setCurrentValue(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addToCart" onClick={() => addToCart(item)}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
