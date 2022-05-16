import { Link } from "react-router-dom";
import { call, cart, document, home, logout, megaphone, movilbox, padlock, question, user, users, share } from "../../styles/icons/icons";
import { Image } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="d-flex flex-column navigation__sidebar align-items-center">
    <Image className="navigation__logo mt-5" src={movilbox} alt='logo' />

    <div className="navigation__icon-share navigation__icon-shadow d-flex justify-content-center align-items-center">
        <Link to=''>
            <Image className="navigation__icon-share" src={share} />
        </Link>
    </div>

    <Link to="/tienda" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={home} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={megaphone} alt='megafono' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={call} alt='home' />
    </Link>
    <Link to="/cart" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={cart} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={document} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={user} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={padlock} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={users} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={question} alt='home' />
    </Link>
    <Link to="#" className="w3-bar-item w3-button">
        <img className="navigation__icons" src={logout} alt='home' />
    </Link>
    </div>
  );
};

export default Navigation;
