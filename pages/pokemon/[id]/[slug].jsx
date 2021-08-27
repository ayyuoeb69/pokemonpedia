import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Detail from "../../../templates/Detail";
import { GET_DETAIL_POKEMON } from "../../../graphql/queries";
import grphql from "../../../graphql";
import Modal from "../../../components/CatchModal";
import { PokemonDataContext } from "../../../contexts/PokemonDataContext";
import { UpdateMyPokemons } from "../../../utils/Service";
import { useToasts } from "react-toast-notifications";
import { LoadingContainer } from "../../../styles/components/Loading";
import Lottie from "react-lottie";
import pikacu from "../../../public/animations/pokemon.json";
const fetchData = async (name) => {
  const { data } = await grphql.query({
    query: GET_DETAIL_POKEMON,
    variables: { name: name },
  });
  return data;
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const data = await fetchData(slug);
  if (data?.pokemon?.id) {
    return {
      props: {
        result: data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default function detail({ result }) {
  const router = useRouter();
  const { id, slug } = router.query;
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorInput, setErrorInput] = useState(null);
  const [name, setName] = useState("");
  const { myPokemons, setMyPokemons } = useContext(PokemonDataContext);
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (result?.pokemon) {
      setLoading(false);
    }
  }, [loading]);
  function handleCatch() {
    const isCatch = Math.random() < 0.5 ? true : false;
    if (isCatch) {
      setSuccess(true);
      setModal(true);
    } else {
      setSuccess(false);
      setModal(true);
    }
  }
  function handleSave() {
    if (name === "") {
      setErrorInput("Nickname field must be filled! ");
    } else {
      if (myPokemons[name]) {
        setErrorInput("The pokemon nickname already exist! ");
      } else {
        const detailMyPokemon = {
          id: id,
          name: slug,
          image: result?.pokemon?.sprites?.front_default,
          nickname: name,
        };
        setMyPokemons((state) => ({
          ...state,
          [name]: detailMyPokemon,
        }));
        UpdateMyPokemons({ ...myPokemons, [name]: detailMyPokemon });
        addToast("Succcess Save", {
          appearance: "success",
          autoDismiss: true,
        });
        setModal(false);
        setName("");
        setSuccess(false);
      }
    }
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
    <Layout pageTitle={slug}>
      <Modal
        modal={modal}
        setModal={setModal}
        success={success}
        setSuccess={setSuccess}
        name={name}
        setName={setName}
        handleSave={handleSave}
        errorInput={errorInput}
        setErrorInput={setErrorInput}
      />
      {loading ? (
        <LoadingContainer>
          <Lottie options={defaultOptions} height={250} width={250} />
          <h2>
            <center> Loading ...</center>
          </h2>
        </LoadingContainer>
      ) : (
        <Detail result={result?.pokemon} handleCatch={handleCatch} />
      )}
    </Layout>
  );
}
