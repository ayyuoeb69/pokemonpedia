import { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout";
import HomePage from "../templates/Home";
import { GET_LIST_POKEMONS } from "../graphql/queries";
import { PokemonDataContext } from "../contexts/PokemonDataContext";
import grphql from "../graphql";
import { LoadingContainer } from "../styles/components/Loading";
import Lottie from "react-lottie";
import pikacu from "../public/animations/pokemon.json";
const fetchData = async (limit, offset) => {
  const { data } = await grphql.query({
    query: GET_LIST_POKEMONS,
    variables: { limit: limit, offset: offset },
  });
  return data;
};

export const getServerSideProps = async () => {
  const variables = { limit: 20, offset: 0 };
  const data = await fetchData(variables.limit, variables.offset);
  return {
    props: {
      results: data,
      limits: variables.limit,
      offsets: variables.offset,
    },
  };
};

export default function Home({ results, limits, offsets }) {
  const [offset, setOffset] = useState(offsets);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [result, setResult] = useState(results?.pokemons?.results);
  const { myPokemons } = useContext(PokemonDataContext);
  const [myPokemonList, setMyPokemonList] = useState([]);
  useEffect(() => {
    if (Object.values(myPokemonList).length === limits) {
      setLoading(false);
    }
    setLoadingButton(false);
  }, [myPokemonList]);

  useEffect(() => {
    if (result) {
      result?.forEach((pokemon) => {
        let count = 0;
        console.log(myPokemons, "llkjd");
        Object.values(myPokemons).forEach((myPokemon) => {
          console.log(myPokemon, "ll");
          if (parseInt(pokemon.id) === parseInt(myPokemon.id)) {
            count++;
          }
        });
        setMyPokemonList((state) => ({ ...state, [pokemon.id]: count }));
      });
    }
  }, [result]);

  async function loadData() {
    setLoadingButton(true);
    const data = await fetchData(limits, offset + 20);
    setOffset(offset + 20);

    setResult((arr) => [...arr, ...data?.pokemons?.results]);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Layout pageTitle="Gotta catch em all">
      {loading ? (
        <LoadingContainer>
          <Lottie options={defaultOptions} height={250} width={250} />
          <h2>
            <center> Loading ...</center>
          </h2>
        </LoadingContainer>
      ) : (
        <HomePage
          results={result}
          myPokemonList={myPokemonList}
          handleClick={loadData}
          loadingButton={loadingButton}
        />
      )}
    </Layout>
  );
}
