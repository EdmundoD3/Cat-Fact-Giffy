// import { useState } from "react";
async function getApiResponseToWordCat(cat) {
  const { fact = "" } = cat;

  const search = fact.split(" ", 3);
  const words = search.join(" ");
  const res = search.join("+");
  return { words, res };
}

export default function ThreeWordFromCatFact() {
  const apiURL = "https://catfact.ninja/fact";
  return fetch(apiURL)
    .then((res) => res.json())
    .then(getApiResponseToWordCat);
}
