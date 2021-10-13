import { useEffect } from "react";
import { useCountries } from "../../store/CountriesContext";
import SingleCountryDetailsPage from "./SingleCountryDetailsPage";
import Announcement from "../Announcement";
import Image from "next/image";
import { Country } from "../../types";
import { FlexContainer } from "../../styles/util.styles";
import styled from "styled-components";
type Props = {
	country: Country;
};

const fetchAllCountries = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const countriesData: Array<Country> = await response.json();
	return countriesData;
};

const SingleCountryPage: React.FC<Props> = ({ country }) => {
	const { countries, setCountriesHandler } = useCountries();
	useEffect(() => {
		if (countries.length <= 0) {
			fetchAllCountries().then((data) => {
				setCountriesHandler(data);
			});
		}
	}, [countries]);

	if (countries.length <= 0)
		return (
			<Announcement>
				<h3>Loading...</h3>
			</Announcement>
		);

	return (
		<StyledSingleCountryPage>
			<CountryFlagContainer>
				<Image src={country.flags.svg} alt="flag" layout="fill" className="image" objectFit="contain" />
			</CountryFlagContainer>
			<SingleCountryDetailsPage country={country} />
		</StyledSingleCountryPage>
	);
};

export default SingleCountryPage;

const StyledSingleCountryPage = styled(FlexContainer)`
	margin-top: 80px;
	padding: 0px 20px;
	justify-content: flex-start;
	align-items: center;
	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;
const CountryFlagContainer = styled.div`
	position: relative;
	width: 560px;
	height: 400px;
	@media only screen and (max-width: 800px) {
		width: 100%;
		height: 450px;
	}
`;
