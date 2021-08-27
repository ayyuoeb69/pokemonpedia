import styled from "@emotion/styled";
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Card = styled.div`
  height: auto;
  display: flex;
  border-radius: 10px;
  margin: 16px;
  background-color: #fdfaf1ed;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  border-radius: 12px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 16px;
  max-width: 192px;
  overflow: hidden;
  &:hover {
    border-radius: 12px;
    transform: matrix(1.1, 0, 0, 1.1, 0, 2);
    transition: 250ms ease;
    background-color: #fdfaf1ed;
    cursor: pointer;
  }
`;

export const CardTitle = styled.h3(
  (props) => `
  font-weight: bold;
  text-transform: capitalize;
  width: -webkit-fill-available;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  color: ${props.theme.colors.primary};
`
);

export const LabelCard = styled.div(
  (props) => `
  text-align:center;
  width:100%;
  margin-top: 3px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${props.theme.colors.secondary};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props.theme.colors.primary};
`
);
