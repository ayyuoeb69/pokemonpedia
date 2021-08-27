import { css } from "@emotion/react";
import styled from "@emotion/styled";

const types = {
  bug: {
    background: "#729f3f",
    color: "white",
  },

  dark: {
    background: "#729f3f",
    color: "white",
  },

  dragon: {
    background: "#f16e57",
    color: "white",
  },

  electric: {
    background: "#f16e57",
    color: "black",
  },

  fairy: {
    background: "#fdb9e9",
    color: "black",
  },

  fighting: {
    background: "#d56723",
    color: "white",
  },

  fire: {
    background: "#fd7d24",
    color: "white",
  },

  flying: {
    background: "#bdb9b8",
    color: "black",
  },

  ghost: {
    background: "#7b62a3",
    color: "white",
  },

  grass: {
    background: "#9ccd51",
    color: "black",
  },

  ground: {
    background: "#ab9842",
    color: "black",
  },

  ice: {
    background: "#51c4e7",
    color: "black",
  },

  normal: {
    background: "#a4acaf",
    color: "black",
  },

  poison: {
    background: "#b97fc9",
    color: "white",
  },

  psychic: {
    background: "#f366b9",
    color: "white",
  },

  rock: {
    background: "#a38c21",
    color: "white",
  },

  steel: {
    background: "#9eb7b8",
    color: "black",
  },

  water: {
    background: "#4592c4",
    color: "white",
  },
};

export const DetailContainer = styled.div`
  display: flex;
  margin-bottom: 10rem;
  width: 100%;
  flex-direction: column;
  @media (max-width: 960px) {
    padding-bottom: 150px;
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

export const DetailImg = styled.img`
  height: 260px;
  background-color: whitesmoke;
  border-radius: 15rem;
`;

export const DetailName = styled.div(
  (props) => `
  border: 0;
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: -1rem;
  padding: 16px;
  border-radius: 1rem;
  color: ${props.theme.colors.primary};
  background-color: ${props.theme.colors.secondary};
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
`
);

export const DetailTypesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DetailValues = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const DetailValue = styled.div(
  ({ type }) => css`
    background-color: ${types[type]?.background ?? "white"};
    color: ${types[type]?.color ?? "black"};
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px;
    margin: 16px;
    border-radius: 2rem;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  `
);

export const Details = styled.div`
  margin: 16px;
  display: flex;
  border-top: 1px solid #ccc !important;
  flex-direction: column;
  align-items: center;
`;

export const DetailButtonContainer = styled.div`
  position: fixed;
  bottom: -1%;
  left: 45%;
  right: 45%;
  z-index: 998;
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 250ms ease;
  &:hover {
    bottom: 3%;
  }
  @media (max-width: 960px) {
    bottom: 15%;
  }
`;

export const DetailButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  filter: grayscale(100%);
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  transition: 250ms ease;
  color: #ec8a8a;
  &:hover {
    background: gray;
    color: white;
    filter: grayscale(0%);
    transition: 250ms ease;
  }
  @media (max-width: 960px) {
    background-color: #ffcb05;
    filter: grayscale(40%);
    color: #fff;
  }
`;

export const DetailButtonText = styled.h3`
  margin: 0px;
`;
