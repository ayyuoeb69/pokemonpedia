import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  margin-bottom: 10rem;
  width: 100%;
  flex-direction: column;
  @media (max-width: 960px) {
    padding-bottom: 150px;
  }
`;

export const Title = styled.h2(
  (props) => `
    color: ${props.theme.colors.secondary};
    margin-bottom:0px;
    text-align:center;
    text-shadow:1px 2px 1px #265593;
    font-size:3em;
    margin-bottom:20px
    `
);

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button(
  (props) => `
    color: #fff;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    margin: 16px;
    padding: 16px;
    font-weight: bold;
    background-color: ${props.theme.colors.primary};
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    &:hover{
      transform: matrix(1, 0, 0, 1, 0, 2);
      transition: 250ms ease;
    }
    `
);
