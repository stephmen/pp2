import styled from 'styled-components';

export const StyledMenu = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; 
  /* z-index: 10; */
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem ;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  /* Other styles */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 33.33%; /* One-third of the view */
  }

  /* Other styles */
`;