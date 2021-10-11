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
				<Image src={country.flags.svg} alt="flag" layout="fill" className="image" />
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
	align-items: flex-start;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;
const CountryFlagContainer = styled.div`
	width: 560px;
	> div {
		position: unset !important;
	}
	.image {
		object-fit: contain;
		width: 100% !important;
		position: relative !important;
		height: 400px !important;
	}

	@media only screen and (max-width: 800px) {
		flex-basis: 100%;
		width: 100%;

		.image {
			height: unset !important;
		}
	}
`;
