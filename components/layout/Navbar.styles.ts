import styled from "styled-components";
import { FlexContainer } from "../../styles/util.styles";

export const Header = styled.div`
	background-color: ${(props) => props.theme.accent};
	color: ${(props) => props.theme.fontColor};
	padding: 0 20px;
	box-shadow: rgb(0 0 0 / 5%) 0px 3px 2px 0px;
`;
export const StyledNavBar = styled(FlexContainer)`
	padding: 30px 0;
	justify-content: space-between;
`;

export const Logo = styled.h3`
	margin: 0;
	font-weight: 800;
	font-size: 1.2rem;

	@media only screen and (max-width: 500px) {
		font-size: 0.8rem;
	} ;
`;

export const Toggler = styled.div`
	margin: 0;
	font-weight: 800;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 500px) {
		font-size: 0.8rem;
	}
`;
