export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function getRandomOptions(correctCountry, allCountries) {
  const wrongOptions = allCountries
    .filter((c) => c.name.common != correctCountry.name.common)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    return [...wrongOptions, correctCountry].map((c) => c.name.common);
}
