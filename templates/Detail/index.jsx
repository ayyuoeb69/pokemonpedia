import { useState, useEffect } from "react";
import {
  DetailContainer,
  DetailHeader,
  DetailImg,
  DetailName,
  DetailValues,
  DetailValue,
  Details,
  DetailButtonContainer,
  DetailButton,
  DetailButtonText,
} from "../../styles/templates/Detail";
import Image from "next/image";
export default function detail({ result, handleCatch }) {
  const [image, setImage] = useState(result?.sprites?.front_default);
  useEffect(() => {
    const timer = setInterval(() => {
      if (image === result?.sprites?.front_default) {
        setImage(result?.sprites?.back_default);
      } else {
        setImage(result?.sprites?.front_default);
      }
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <DetailContainer>
        <DetailHeader>
          <DetailImg src={image} alt={result?.name} />
          <DetailName>{result?.name}</DetailName>
          <DetailValues>
            {result?.types?.map((type, idx) => {
              return (
                <DetailValue key={idx} type={type?.type?.name}>
                  {type?.type?.name}
                </DetailValue>
              );
            })}
          </DetailValues>
        </DetailHeader>
        <Details>
          <h3>Moves :</h3>
          <DetailValues>
            {result?.moves?.map((move, idx) => {
              return (
                <DetailValue key={idx}>
                  {move?.move?.name.replace("-", " ")}
                </DetailValue>
              );
            })}
          </DetailValues>
        </Details>
        <DetailButtonContainer>
          <DetailButton onClick={handleCatch}>
            <Image src="/img/pokeball.png" alt="catch" width={48} height={48} />
            <DetailButtonText>Catch</DetailButtonText>
          </DetailButton>
        </DetailButtonContainer>
      </DetailContainer>
    </>
  );
}
