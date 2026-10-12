import { useEffect, useState } from "react";
import NavLinks from './NavLinks';

export default function MobileNav({ isJapanese }){
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  // Lock page scroll while the drawer is open, and close it with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return(
    <div className={`mobile-navigation ${isOpen ? "open" : ""}`}>
      <nav id="mobile-menu" className="nav-drawer">
        <NavLinks isJapanese={isJapanese} numbered onNavigate={close} />
      </nav>

      <button
        type="button"
        className="toggle-btn"
        aria-label={isJapanese ? "メニュー" : "Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span><span></span><span></span>
      </button>

      <div className="nav-mask" onClick={close}></div>
    </div>
  );
}
