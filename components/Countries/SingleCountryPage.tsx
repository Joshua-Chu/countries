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
