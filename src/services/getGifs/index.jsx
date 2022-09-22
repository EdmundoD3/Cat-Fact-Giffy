const apiKey = "RjogUyjU0wvG3m3vlFpvCEclhEGqMhAS&q";
async function getApiResponseGif(cat) {
  const { data = [] } = cat;

  const id = data[0].id;
  const title = data[0].title;
  const url = data[0].images.downsized_medium.url;
  return { id, title, url };
}

export default function getGif({
  keyword = "digimon",
  limit = 1,
  rating = "g",
  lang = "en"
}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(getApiResponseGif);
}
