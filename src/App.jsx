import { useState } from "react";
import { Items, MenuItems } from "./data";
import { AppContext } from "./context";
import Header from "./components/Header";
import BannerName from "./components/BannerName";
import DebitCard from "./components/DebitCard";
import CartItem from "./components/CartItem";
import MenuCard from "./components/MenuCard";
import SubMenuContainer from "./components/SubMenuContainer";
import ItemCard from "./components/ItemCard";
import "./index.css";

export default function App() {
  const [data, setData] = useState(Items);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState("");

  const addToCart = (newItem) => {
    const item = cart.find((el) => el.id === newItem.id);
    if (item) {
      item.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
    setCartTotal(cartTotal + +newItem.price);
  };

  const removeFromCart = (oldItem) => {
    const item = cart.find((el) => el.id === oldItem.id);
    if (item.quantity > 1) {
      item.quantity--;
      setCart([...cart]);
    } else {
      setCart(cart.filter((el) => el.id !== item.id));
    }
    setCartTotal(cartTotal - +oldItem.price);
  };


  const state = {
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
    data,
    setSearch
  };

  const filterByCategory = (menuItem) =>
    setData(Items.filter((item) => item.itemId === menuItem.itemId));

  return (
    <div className="App">
      <AppContext.Provider value={state}>
        <Header />
      
        <main>
          <div className="mainContainer">
            <div className="banner">
              <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                alt=""
                className="deliveryPic"
              />
            </div>

            <div className="dishContainer">
              <div className="menuCard">
                <SubMenuContainer />
              </div>

              <div className="rowContainer">
                {MenuItems.map((item) => (
                  <div key={item.id} onClick={() => filterByCategory(item)}>
                    <MenuCard
                      imgSrc={item.imgSrc}
                      name={item.name}
                      isActive={item.id === "1"}
                    />
                  </div>
                ))}
              </div>

              <div className="dishItemContainer">
                {data
                  .filter((item) => item.name.includes(search))
                  .map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
              </div>
            </div>
          </div>
          <div className="rightMenu">
            <div className="debitCardContainer">
              <div className="debitCard">
                <DebitCard />
              </div>
            </div>
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cart.map((item) => (
                    <CartItem item={item} />
                  ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {cartTotal}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
          </div>
        </main>
      </AppContext.Provider>
    </div>
  );
}




