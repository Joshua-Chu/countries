import styled from "styled-components";

export const StyledSingleCountry = styled.div`
	flex-basis: 270px;
	margin-bottom: 70px;
	cursor: pointer;
	transition: all 0.5s ease;
	margin-right: 25px;
	box-shadow: rgb(0 0 0 / 5%) 0px 3px 8px 0px;

	&:hover {
		transform: scale(1.05);
	}

	@media only screen and (max-width: 620px) {
		flex-basis: 80%;
		min-width: 250px;
	}
`;

export const CountryCardDetails = styled.div`
	height: 200px;
	background-color: ${(props) => props.theme.accent};
	color: ${(props) => props.theme.fontColor};
	padding: 30px 20px 30px 20px;
	border-radius: 0 0 5px 5px;

	@media only screen and (max-width: 620px) {
		height: 230px;
	}
`;

export const CountryName = styled.h5`
	margin: 0;
	font-size: 0.7rem;
	margin-bottom: 15px;
`;

export const CountryFlagContainer = styled.div`
	position: relative;
	width: 270px;
	height: 162px;

	@media only screen and (max-width: 620px) {
		width: 100%;
		height: 300px;
	}
`;
