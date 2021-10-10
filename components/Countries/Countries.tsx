import { Country } from "../../types";
import SingleCountryCard from "./SingleCountryCard";
import { FlexContainer, Section } from "../../styles/util.styles";
import styled from "styled-components";

type Props = {
	countries: Array<Country>;
};

const Countries: React.FC<Props> = ({ countries }) => {
	return (
		<Section>
			<CountriesContainer>
				{countries.map((country) => (
					<SingleCountryCard key={country.name.official} country={country} />
				))}
			</CountriesContainer>
		</Section>
	);
};

export default Countries;

const CountriesContainer = styled(FlexContainer)`
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 35px;
`;
