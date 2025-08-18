import React from "react";
import { getRandomOptions, shuffleArray } from "../utils/helpers";

const useQuizData = (numQuestions) => {
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect( () => {
     async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region"
      );
      if (!res.ok) throw new Error("Erro ao buscar os países");
      const countries = await res.json();
      const randomCountries = shuffleArray(countries).slice(0, numQuestions);
      const generatedQuestions = randomCountries.map((country) => {
        const options = getRandomOptions(country, countries);
        return {
          flag: country.flags.svg,
          correct: country.name.common,
          options: shuffleArray(options),
        };
      });
      setQuestions(generatedQuestions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
  },[numQuestions])
 
  return {
    questions, error, loading
  };
};

export default useQuizData;
