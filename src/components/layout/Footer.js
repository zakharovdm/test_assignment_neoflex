import Container from '../Container/Container';
import SocialNetLinks from '../SocialNetLinks/SocialNetLinks';

import logoImg from '../../assets/QPICK.png';
import iconLang from '../../assets/iconLang.svg';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container className={classes.footerWrapper}>
        <div className={classes.footerInner}>
          <img src={logoImg} alt="logo Qpick" />
          <ul className={classes.navFooterList}>
            <li>
              <a className={classes.navFooterLink} href="#favorite">
                Избранное
              </a>
            </li>
            <li>
              <a className={classes.navFooterLink} href="#basketCart">
                Корзина
              </a>
            </li>
            <li>
              <a className={classes.navFooterLink} href="#contacts">
                Контакты
              </a>
            </li>
          </ul>
          <div className={classes.blockTermsLang}>
            <a className={classes.termsLink} href="#terms">
              Условия сервиса
            </a>
            <ul className={classes.languageList}>
              <li className={classes.activeLang}>Рус</li>
              <li>Eng</li>
            </ul>
          </div>
          <div className={classes.socialWrapper}>
            <SocialNetLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
