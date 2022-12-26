type path = "characters";
const BASE_URL = "https://hp-api.onrender.com/api";

const fetcher = async (path: path) => {
  return fetch(`${BASE_URL}/${path}`);
};

export default fetcher;
