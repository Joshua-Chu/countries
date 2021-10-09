import { Country } from "../../types";
import styled from "styled-components";
import Image from "next/image";
type Props = {
	country: Country;
};

const SingleCountry: React.FC<Props> = ({ country }) => {
	const flagImage = String(country.flags.png);
	const numberConverter = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	return (
		<StyledSingleCountry>
			{flagImage && <StyledImage src={flagImage} alt="flag" width={270} height={164} />}
			<CountryCardDetails>
				<CountryName>{country.name.official}</CountryName>
				<CountryTextDetails>
					{" "}
					<span>Population: </span> {numberConverter(country.population)}
				</CountryTextDetails>
				<CountryTextDetails>
					{" "}
					<span>Region: </span> {country.region}
				</CountryTextDetails>
				<CountryTextDetails>
					<span>Capital: </span>
					{country.capital}
				</CountryTextDetails>
			</CountryCardDetails>
		</StyledSingleCountry>
	);
};

export default SingleCountry;

const StyledSingleCountry = styled.div`
	/* border: 2px solid yellow; */
	margin-bottom: 70px;
	flex-basis: 270px;
`;

const StyledImage = styled(Image)`
	border-radius: 5px 5px 0 0;
`;

const CountryCardDetails = styled.div`
	height: 176px;
	margin-top: -7px;
	background-color: #2b3743;
	padding: 30px 20px 30px 20px;
	/* background-color: #fff; */
	border-radius: 0 0 5px 5px;
`;

const CountryName = styled.h5`
	margin: 0;
	font-size: 0.7rem;
	margin-bottom: 15px;
`;

const CountryTextDetails = styled.span`
	display: block;
	margin: 0;
	font-size: 0.5rem;
	margin-bottom: 6px;

	span {
		font-weight: 600;
	}
`;
