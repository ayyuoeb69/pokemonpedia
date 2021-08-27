import { gql } from "@apollo/client";
export const GET_LIST_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_DETAIL_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      sprites {
        front_default
        back_default
      }
      abilities {
        ability {
          name
          url
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
          url
        }
      }
    }
  }
`;
