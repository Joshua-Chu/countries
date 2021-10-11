import styled from "styled-components";

export const CountryDetailsContainer = styled.div`
	flex-basis: 50%;
	padding: 10px 40px 40px 40px;
	margin-left: 40px;

	@media only screen and (max-width: 800px) {
		flex-basis: 100%;
		margin-left: 0px;
		padding: 10px 0px;
	}
`;

export const CountryName = styled.h2`
	margin-bottom: 30px;
	color: ${(props) => props.theme.fontColor};
	@media only screen and (max-width: 800px) {
		font-size: 6vw;
	}
`;

export const Details = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const TextDetails = styled.div`
	flex-basis: 50%;
	padding-right: 20px;
	color: ${(props) => props.theme.fontColor};
	@media only screen and (max-width: 800px) {
		padding-bottom: 10px;
	}
`;
