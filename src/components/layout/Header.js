import Container from '../Container/Container';
import Counter from '../Counter/Counter';

import logoImg from '../../assets/QPICK.png';
import iconFavorite from '../../assets/iconFavorite.svg';
import iconShopCart from '../../assets/iconShopCart.svg';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container className={classes.headerWrapper}>
          <img src={logoImg} alt="logo Qpick" />
          <div className={classes.iconsBlock}>
            <a href="#favorite" className={classes.link}>
              <img className={classes.icon} src={iconFavorite} alt="favorite" />
              <div className={classes.counterWrapper}>
                <Counter />
              </div>
            </a>
            <a href="#shopCart" className={classes.link}>
              <img
                className={classes.icon}
                src={iconShopCart}
                alt="Shopping cart"
              />
              <div className={classes.counterWrapper}>
                <Counter />
              </div>
            </a>
          </div>
      </Container>
    </header>
  );
};

export default Header;
