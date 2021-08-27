import styled from "@emotion/styled";
export const ButtonReleaseContainer = styled.form`
  display: flex;
  align-items: center;
`;
export const ButtonRelease = styled.button(
  (props) => `
    cursor:pointer;
    border:none;
    text-align:center;
    width:100%;
    transition: 250ms ease;
    padding: 15px;
    border-radius: 5px;
    background-color: red;
    font-size: 0.8rem;
    font-weight: bold;
    color: ${props.theme.colors.secondary};
    filter: grayscale(0%);
    &:hover{
      filter: grayscale(50%);
    }
      `
);

export const LabelCardNickName = styled.h2(
  (props) => `
      text-align:center;
      color: #555;
      margin:0px
        `
);
