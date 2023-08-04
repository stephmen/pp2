import React from "react";
import { StyledFooter } from "./Footer.styled.js";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="bottomIcon">
          <a href="https://www.facebook.com/fanfare.pourpour">
          <Image src="/f_logo_RGB-Blue_58.png" width={50}
      height={50} alt="" />
          </a>
          <a href="https://fanfarepourpour.bandcamp.com/">
          <Image src="/bandcamp-button-bc-circle-green-64.png" width={50}
      height={50} alt="" />
          </a>
          <a href="https://actuellecd.com/en/artiste/fanfarepourpour_/fanfare-pourpour">
          <Image src="/actuellelogo.png" width={110}
      height={50} alt="" />
          </a>
        </div>
      </footer>
    </StyledFooter>
  );
}
