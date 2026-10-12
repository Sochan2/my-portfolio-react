import { Link, useLocation } from "react-router-dom";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header(){
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");

  return(
  <header>
    <img className="my-logo" src="/img/icons/profile.png" alt="soki's profile logo"/>
    <DesktopNav isJapanese={isJapanese}/>
    <MobileNav isJapanese={isJapanese}/>

    <div className="language">
      <Link to='/ja'>
        <img src="/img/icons/lang-ja.png" alt="Japanese language icon"/>
      </Link>
      <Link to='/'>
        <img src="/img/icons/lang-en.png" alt="English language icon"/>
      </Link>
    </div>
  </header>
  );
}
