import Search from "./Search";
import Categories from "./Categories";
import styled from "styled-components";
import { FlexContainer, Section } from "../../styles/util.styles";
const FilterSection: React.FC = () => {
	return (
		<StyledSection>
			<StyledFilterSection>
				<Search />
				<Categories />
			</StyledFilterSection>
		</StyledSection>
	);
};

export default FilterSection;

const StyledFilterSection = styled(FlexContainer)`
	justify-content: space-between;

	@media only screen and (max-width: 660px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

const StyledSection = styled(Section)`
	margin: 60px 0;

	@media only screen and (max-width: 465px) {
		margin: 30px 0;
	} ;
`;
