import React from "react";
import { StyledFooter } from "./Footer.styled.js";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="bottomIcon">
          <a href="https://www.facebook.com/fanfare.pourpour">
          <Image src="/f_logo_RGB-Blue_58.png" width={40}
      height={40} alt="" />
          </a>
          <a href="https://fanfarepourpour.bandcamp.com/">
          <Image src="/bandcamp-button-bc-circle-green-64.png" width={80}
      height={90} alt="" />
          </a>
        </div>
      </footer>
    </StyledFooter>
  );
}
