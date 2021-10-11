import styled from "styled-components";

export const SearchInput = styled.div`
	max-width: 400px;
	width: 100%;
	position: relative;
	box-shadow: rgb(0 0 0 / 5%) 0px 3px 2px 0px;

	@media only screen and (max-width: 660px) {
		margin-bottom: 50px;
		max-width: none;
	}
`;

export const Input = styled.input`
	outline: none;
	border: none;
	padding: 15px 20px 15px 45px;
	width: 100%;
	border-radius: 5px;
	color: ${(props) => props.theme.fontColor};
	background-color: ${(props) => props.theme.accent};
`;

export const IconContainer = styled.div`
	position: absolute;
	top: 14px;
	left: 15px;
`;

export const Svg = styled.svg`
	width: 20px;
	height: 20px;
	z-index: 1;
	color: ${(props) => props.theme.fontColor};
`;
