import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
  import { useAppState } from "../context";
  
  function Header() {
    const { cart, setSearch } = useAppState();
  
    return (
      <header>
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
            <p>{cart ? cart.length : ""}</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
              alt=""
            />
          </div>
          <h2 className="userName">Aidana </h2>
        </div>
  
        <button className="toggleMenu">
          <BarChart className="toggleIcon" /> 
        </button>
      </header>
    );
  }
  
  export default Header;