import { useEffect, useState } from "react";
import ThreeWordFromFactCat from "../treeWords";
export default function CatFact() {
  const [wordss, setWordss] = useState([]);
  useEffect(() => {
    ThreeWordFromFactCat().then((gato) => {
      setWordss(gato.words);
    });
  }, [setWordss]);

  return wordss;
}
