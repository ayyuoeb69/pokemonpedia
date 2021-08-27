import {
  Title,
  ButtonContainer,
  Button,
  HomeContainer,
} from "../../styles/templates/Home";
import {
  CardsContainer,
  Card,
  CardContainer,
  LabelCard,
  CardTitle,
} from "../../styles/components/Card";
import Link from "next/link";
import { LoadingContainer } from "../../styles/components/Loading";
import Lottie from "react-lottie";
import pikacu from "../../public/animations/pokemon.json";
export default function Home({
  results,
  myPokemonList,
  handleClick,
  loadingButton,
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pikacu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <HomeContainer>
      <Title>Pokemon List</Title>
      <CardsContainer>
        {results?.map((pokemon, idx) => {
          return (
            <Card key={idx}>
              <Link href={"/pokemon/" + pokemon.id + "/" + pokemon.name}>
                <a>
                  <CardContainer>
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      width="160px"
                      height="160px"
                    />
                    <CardTitle>#{++idx + " " + pokemon.name}</CardTitle>
                    <LabelCard>Owned : {myPokemonList[pokemon.id]}</LabelCard>
                  </CardContainer>
                </a>
              </Link>
            </Card>
          );
        })}
        <br />
        <ButtonContainer>
          {loadingButton ? (
            <LoadingContainer>
              <Lottie options={defaultOptions} height={150} width={150} />
            </LoadingContainer>
          ) : (
            <Button onClick={handleClick}>Load More</Button>
          )}
        </ButtonContainer>
      </CardsContainer>
    </HomeContainer>
  );
}
