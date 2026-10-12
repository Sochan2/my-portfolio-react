import { Link } from "react-router-dom";

const links = {
  en: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/work", label: "Work" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ],
  ja: [
    { to: "/ja", label: "ホーム" },
    { to: "/ja/about", label: "プロフィール" },
    { to: "/ja/work", label: "ワーク" },
    { to: "/blog", label: "ブログ" },
    { to: "/contact", label: "コンタクト" },
  ],
};

// numbered: show "01", "02"... before each label (used in the mobile drawer)
// onNavigate: called when a link is clicked, e.g. to close the drawer
export default function NavLinks({ isJapanese, numbered = false, onNavigate }) {
  return (
    <ul className="nav-menu">
      {links[isJapanese ? "ja" : "en"].map((link, index) => (
        <li key={link.to}>
          <Link to={link.to} className="nav-link" onClick={onNavigate}>
            {numbered && <span className="nav-number">{String(index + 1).padStart(2, "0")}</span>}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
