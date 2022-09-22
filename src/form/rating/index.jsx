import { useState, useEffect } from "react";
import CatGifs from "../../gif/catgif";
import CatFact from "../../catFact/catFact";
const RATING = {
  g: "g",
  pg: "pg",
  "pg-13": "pg-13",
  r: "r18+"
};
export default function Rating() {
  const [rating, setRating] = useState("g");
  const [words, setWords] = useState([]);
  // useEffect(function () {
  //   setWords(CatFact());
  // }, []);

  return (
    <>
      <label>rating </label>
      <select
        defaultValue={rating}
        onChange={(ra) => {
          setRating(ra.target.value);
        }}
      >
        {Object.entries(RATING).map((r) => (
          <option value={r[0]} key={r[0]}>
            {r[1]}
          </option>
        ))}
      </select>
      <CatGifs {...{ words, rating, lang: "en" }} />;
    </>
  );
}
