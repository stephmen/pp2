//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <Link href="/spectacles">
        Spectacles
      </Link>
      <Link href="/disques">
        Albums
      </Link>
      <Link href="/cqns">
        Notre Dernier Disque
      </Link>
      <Link href="/histoire">
        Histoire
      </Link>
      <Link href="/presse">
        Presse
      </Link>
      <Link href="/images">
        Photos
      </Link>
      <Link href="/video">
        Vidéos
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Menu;