import { useContext, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import MyPokemonPage from "../../templates/MyPokemon";
import { PokemonDataContext } from "../../contexts/PokemonDataContext";
import { UpdateMyPokemons } from "../../utils/Service";
import { useToasts } from "react-toast-notifications";
import { LoadingContainer } from "../../styles/components/Loading";
import Lottie from "react-lottie";
import pikacu from "../../public/animations/pokemon.json";

export default function MyPokemon() {
  const { myPokemons } = useContext(PokemonDataContext);
  const [nickName, setNickName] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const handleRelease = (nickname) => {
    setLoading(true);
    delete myPokemons[nickname];
    UpdateMyPokemons(myPokemons);
    setNickName(nickname);

    addToast("Succcess Release", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  useEffect(() => {
    if (nickName) {
      setLoading(false);
      setNickName(null);
    }
  }, [nickName]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Layout pageTitle="My List Pokemon">
      {loading ? (
        <LoadingContainer>
          <Lottie options={defaultOptions} height={250} width={250} />
          <h2>
            <center> Loading ...</center>
          </h2>
        </LoadingContainer>
      ) : (
        <MyPokemonPage
          myPokemonList={myPokemons}
          handleRelease={handleRelease}
        />
      )}
    </Layout>
  );
}
