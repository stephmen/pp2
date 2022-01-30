import React from "react";
import { StyledFooter } from "./Footer.styled.js";

export default function Footer() {
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="bottomIcon">
          <a href="mailto:loupourpourbabin@gmail.com">
            <img src="Courrier.png" alt="" />
          </a>
          <a href="https://www.facebook.com/fanfare.pourpour">
          <img src="facebook.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=XlesgKIuZec&list=RDXlesgKIuZec&start_radio=1&t=529">
          <img src="Youtube.png" alt="" />
          </a>

          {/* <img src="twitter.png" alt="" /> */}
        </div>
      </footer>
    </StyledFooter>
  );
}
