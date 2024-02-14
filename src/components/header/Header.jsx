import { BsCart3 } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import Menu from "../menu/Menu";
import Logo from "../../assets/images/Logo.png"
import { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import Modal from "../layout/Modal";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {        
        const handleStorageChange = () => {
            const storedCartCount = localStorage.getItem("cart")
            if (storedCartCount) {
                const parsedCount = parseInt(storedCartCount, 10);
                setCartCount(parsedCount);
            }
        }

        window.addEventListener('storageUpdated', handleStorageChange);
        
        return () => {
            window.removeEventListener('storageUpdated', handleStorageChange);
        }
    },[])

  return (
    <>
        <header className='main-header'>
            <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}><BsList /></div>
            <div className="title-container">
                <img className="Main-logo" src={Logo} alt="Logo de Choki Art" />
                <h1>Choki-Art</h1>
            </div>
            <span><BsCart3 className="cart-icon" onClick={() => setShowModal(true)} />{cartCount}</span>
        </header>
        <CSSTransition
                in={openMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit
            >
                <Menu />
        </CSSTransition>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Header