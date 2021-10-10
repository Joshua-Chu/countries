import SingleCountryDetailsPage from "./SingleCountryDetailsPage";
import Image from "next/image";
import { Country } from "../../types";
import { FlexContainer } from "../../styles/util.styles";
import styled from "styled-components";
type Props = {
	country: Country;
};
const SingleCountryPage: React.FC<Props> = ({ country }) => {
	return (
		<StyledSingleCountryPage>
			<CountryFlagContainer>
				<Image src={country.flags.svg} alt="flag" height={400} width={560} />
			</CountryFlagContainer>
			<SingleCountryDetailsPage country={country} />
		</StyledSingleCountryPage>
	);
};

export default SingleCountryPage;

const StyledSingleCountryPage = styled(FlexContainer)`
	margin-top: 80px;
	justify-content: flex-start;
	align-items: flex-start;

	@media only screen and (max-width: 660px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;
const CountryFlagContainer = styled.div`
	flex-basis: 50%;
`;
