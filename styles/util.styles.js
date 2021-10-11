import styled from "styled-components";

export const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
`;

export const FlexContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Section = styled.div`
	padding: 0 20px;
`;

export const Button = styled.button`
	outline: none;
	border: 4px solid ${(props) => props.theme.buttonBorder};

	color: ${(props) => props.theme.fontColor};
	font-size: 1rem;
	cursor: pointer;
	box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 0px;
	background-color: ${(props) => props.theme.accent};
	border-radius: 5px;
	padding: 15px 25px;

	display: flex;
	justify-content: center;
	align-items: center;

	span {
		padding: 0 10px;
		fill: ${(props) => props.theme.fontColor};
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const CountryTextDetails = styled.span`
	display: block;
	margin: 0;
	font-size: 13px;
	margin-bottom: 6px;

	span {
		font-weight: bold;
	}
`;

export const StyledCountryTextDetails = styled(CountryTextDetails)`
	@media only screen and (max-width: 800px) {
		font-size: 2.5vw;
		margin: 20px 0;
	}
`;
