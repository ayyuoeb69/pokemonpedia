import styled from "@emotion/styled";

export const Navbar = styled.div`
  background: white;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
  transition: 250ms ease;
  margin-bottom: 30px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const NavbarLogo = styled.div`
  margin-left: 1rem;
  display: flex;
  transition: 250ms ease;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin: 0;
  transition: 250ms ease;
  @media (max-width: 960px) {
    padding: 0;
  }
`;

export const NavbarItem = styled.li`
  width: 160px;
  margin: 0px;
`;

export const NavbarLinks = styled.a(
  (props) => `
  color: ${props.theme.colors.primary};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1.5rem 0.3rem;
  height: 100%;
  transition: 250ms ease;
  &:hover {
    background: #eaecef;
    filter: grayscale(0%);
    transition: 250ms ease;
    cursor: pointer;
  }
  background:  ${props?.active ? "#eaecef" : "#fff"};
 
`
);

export const NavbarBottom = styled.div`
  display: inline;
  background: white;
  position: fixed;
  bottom: 0 !important;
  top: auto;
  width: -webkit-fill-available;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.07) 0px -2px 6px -1px;
  transition: 250ms ease;
`;
