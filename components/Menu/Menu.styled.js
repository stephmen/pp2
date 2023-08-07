import styled from 'styled-components';

export const StyledMenu = styled.nav`
  --mobile-width: 33.33%;
  --transition-time: 0.3s;

  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Change 'top' to 'flex-start' to align menu items at the top */
  background: ${({ theme }) => theme.primaryLight};
  min-height: 100vh; /* Set min-height to 100vh to ensure the background covers at least the viewport height */
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform var(--transition-time) ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color var(--transition-time) linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: left;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  /* Other styles */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: var(--mobile-width); /* One-third of the view */
  }

  /* Other styles */
`;
