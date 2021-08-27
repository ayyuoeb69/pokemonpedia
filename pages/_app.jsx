import { useMemo, useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/globals.jsx";
import { ApolloProvider } from "@apollo/client";
import grphql from "../graphql";
import { PokemonDataContext } from "../contexts/PokemonDataContext";
import { GetMyPokemons, UpdateMyPokemons } from "../utils/Service";
import { ToastProvider } from "react-toast-notifications";
import Lottie from "react-lottie";
import { LoadingContainer } from "../styles/components/Loading";
import pikacu from "../public/animations/pokemon.json";
function App({ Component, pageProps }) {
  const theme = {
    colors: {
      primary: "#265593",
      secondary: "#ffcb05",
    },
  };
  const [myPokemons, setMyPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useMemo(
    () => ({ myPokemons, setMyPokemons }),
    [myPokemons, setMyPokemons]
  );

  useEffect(() => {
    GetMyPokemons().then((data) => {
      console.log(data, "op");
      setMyPokemons(data);
      UpdateMyPokemons(data);
      setLoading(false);
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {globalStyles}
      {loading ? (
        <LoadingContainer>
          <Lottie options={defaultOptions} height={250} width={250} />
          <h2>
            <center> Loading ...</center>
          </h2>
        </LoadingContainer>
      ) : (
        <ToastProvider autoDismiss={true} autoDismissTimeout="2000">
          <ApolloProvider client={grphql}>
            <PokemonDataContext.Provider value={data}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </PokemonDataContext.Provider>
          </ApolloProvider>
        </ToastProvider>
      )}
    </>
  );
}

export default App;
