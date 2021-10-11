import styled from "styled-components";

export const StyledBorderCountries = styled.div`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.fontColor};

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export const Borders = styled.div`
	margin-left: 10px;
	width: 80%;
	display: flex;
	padding: 15px 0;
	flex-wrap: wrap;

	@media only screen and (max-width: 800px) {
		width: 100%;
		margin-left: 0;
	}
`;

export const Border = styled.button`
	background-color: ${(props) => props.theme.accent};
	padding: 0.5rem 1rem;
	font-size: 10px;
	color: ${(props) => props.theme.fontColor};
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	border: 4px solid ${(props) => props.theme.buttonBorder};
	box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 0px;

	@media only screen and (max-width: 800px) {
		font-size: 2vw;
	}
`;
