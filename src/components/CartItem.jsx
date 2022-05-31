import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useAppState } from "../context";

function CartItem({ item }) {
  const { id, name, imgSrc, quantity, price } = item;
  const { addToCart, removeFromCart } = useAppState();

  const totalPrice =  quantity * price;

  return (
    <div className="cartItem" id={id}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {quantity}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => removeFromCart(item)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => addToCart(item)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{totalPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
