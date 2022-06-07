//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/spectacles">
      <Link href="/spectacles" onClick={() => setOpen(!open)}>
        Spectacles
      </Link>
      </Link>
      <Link href="/disques">
      <Link href="/disques" onClick={() => setOpen(!open)}>
        Disques
        </Link>
      </Link>
      {/* <Link href="/photos">
      <Link href="/photos" onClick={() => setOpen(!open)}>
        Photos
        </Link>
        </Link> */}
      <Link href="/histoire">
      <Link href="/histoire" onClick={() => setOpen(!open)}>
        Histoire
      </Link>
      </Link>
      <Link href="/presse">
      <Link href="/presse" onClick={() => setOpen(!open)}>
        Presse
        </Link>
      </Link>
      {/* <Link href="/articles-archives">
      <Link href="/" onClick={() => setOpen(!open)}>
        Projets/Archives
      </Link>
      </Link> */}
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;