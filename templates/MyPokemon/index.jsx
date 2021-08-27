import { Title, HomeContainer } from "../../styles/templates/Home";
import {
  CardsContainer,
  Card,
  CardContainer,
  CardTitle,
} from "../../styles/components/Card";
import {
  ButtonRelease,
  ButtonReleaseContainer,
  LabelCardNickName,
} from "../../styles/templates/MyPokemon";
import Link from "next/link";
export default function MyPokemonPage({ myPokemonList, handleRelease }) {
  return (
    <HomeContainer>
      <Title>My Pokemon List</Title>
      <CardsContainer>
        {Object.values(myPokemonList)?.map((pokemon, idx) => {
          return (
            <Card key={idx}>
              <CardContainer>
                <Link href={"/pokemon/" + pokemon.id + "/" + pokemon.name}>
                  <a>
                    <LabelCardNickName>{pokemon.nickname}</LabelCardNickName>
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      width="160px"
                      height="160px"
                    />
                    <CardTitle>#{++idx + " " + pokemon.name}</CardTitle>
                  </a>
                </Link>
                <ButtonReleaseContainer>
                  <ButtonRelease
                    type="button"
                    onClick={() => handleRelease(pokemon.nickname)}
                  >
                    Release
                  </ButtonRelease>
                </ButtonReleaseContainer>
              </CardContainer>
            </Card>
          );
        })}
      </CardsContainer>
    </HomeContainer>
  );
}
