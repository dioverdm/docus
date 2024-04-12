import React from "react";
import { ReactComponent as Topgg } from "../assets/logo.png";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Topgg />
      <p style={{ margin: "0 0 0 15px" }} className="site-title">
        Pogo OS Documentación
      </p>
    </div>
  );
}

export default Logo;
