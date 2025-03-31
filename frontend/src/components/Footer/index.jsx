import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const date = new Date().getFullYear() ?? '2025'
  return (
    <ul className="footer">
      <li onClick={() => navigate("/legal")}>Terms of use</li>
      <li onClick={() => navigate("/privacy")}>Privacy</li>
      <li>Copyright © Karkhana {date}</li>
    </ul>
  );
}
