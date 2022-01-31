import React, {useState, useRef} from 'react'
import { GlobalStyles } from '.././global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { useOnClickOutside } from '../hooks'
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  
  return( 
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header open="open" />
      <div>
        <Component {...pageProps} />
      </div>
      
      <Footer />
    </ThemeProvider>
    )
}

export default MyApp
