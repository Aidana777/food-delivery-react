function MenuContainer({ link, icon, isHome }) {
    return (
      <li className={isHome ? `active` : ``}>
        <a href={link}>
          <span className="icon">{icon}</span>
        </a>
      </li>
    );
  }
  
<<<<<<< HEAD
  export default MenuContainer;
  
=======
  export default MenuContainer;
>>>>>>> 40db8763508141052865b83fc99d20dafe11239e
