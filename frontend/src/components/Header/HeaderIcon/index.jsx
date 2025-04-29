import React from "react";

export default function HeaderIcon({ src, onClick }) {
  return <img className="header-icon" height={20} src={src} alt="icon" onClick={onClick} />;
}
