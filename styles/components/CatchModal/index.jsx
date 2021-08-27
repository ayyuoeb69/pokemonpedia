import styled from "@emotion/styled";

export const Modal = styled.div(
  (props) => `
  display: ${props?.isOpen ? "block" : "none"};
  position: fixed;
  z-index: 999; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`
);

export const ModalContent = styled.div(
  (props) => `
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 10px dotted ${props.theme.colors.secondary};
  text-align: center;
  transition: 250ms ease;
  animation: 0.2s infinite ease-in alternate;
  border-radius: 10px;
  @media (min-width: 960px) {
    width:650px;
  }
  @media (max-width: 960px) {
    width:90%;
  }
`
);

export const ModalTitle = styled.h2(
  (props) => `
  color: ${props.success ? props.theme.colors.primary : "#ec8a8a"};
`
);

export const ModalButton = styled.button(
  (props) => `
  cursor:pointer;
  border:none;
  text-align:center;
  width:100%;
  transition: 250ms ease;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${props.theme.colors.secondary};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props.theme.colors.primary};
  filter: grayscale(0%);
  &:hover{
    filter: grayscale(50%);
  }
`
);

export const ModalInputContainer = styled.form`
  display: flex;
  align-items: center;
`;

export const ModalInput = styled.input`
  border: 0;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 16px;
  margin-top: 10px;
  background-color: white;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  width: 100%;
`;
