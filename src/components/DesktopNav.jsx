import NavLinks from './NavLinks';

export default function DesktopNav({isJapanese}){
  return(
  <nav className="desktop-navigation">
    <NavLinks isJapanese={isJapanese} />
  </nav>
  );
}
