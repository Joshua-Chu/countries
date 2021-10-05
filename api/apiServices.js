export const getCountriesData = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data = await response.json();
	return data;
};

export const getCountryData = async (countryName) => {
	const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
	const data = await response.json();
	return data;
};
