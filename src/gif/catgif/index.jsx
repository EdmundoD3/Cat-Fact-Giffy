import ThreeWordFromCatFact from "../../catFact/treeWords";
import getGif from "../../services/getGifs";
import GifImages from "../gifImages";
import { useEffect, useState } from "react";
// import { getApiResponse } from "../../services/getApiResponse";

export default function CatGifs({
  limit = 1,
  rating,
  lang = "en",
  words = "Digimon"
}) {
  const [gifs, setGifs] = useState([]);
  // const [words, setWords] = useState([]);
  useEffect(
    function () {
      ThreeWordFromCatFact().then((gato) => {
        // setWords(gato.words);
        const { words } = gato;
        getGif({ keyword: words, rating, limit, lang }).then((gif) => {
          setGifs({ ...gif, words });
          // return <GifImages title={`${title}`} url={`${url}`} />;
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rating]
  );

  return (
    <>
      <h3>{gifs.words}</h3>
      <GifImages {...gifs} />
    </>
  );
}
