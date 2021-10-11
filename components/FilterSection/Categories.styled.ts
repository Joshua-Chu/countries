import styled from "styled-components";

export const StyledCategories = styled.div`
	position: relative;
`;
export const StyledSelect = styled.select`
	width: 200px;
	padding: 15px 20px 15px 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: ${(props) => props.theme.fontColor};
	background-color: ${(props) => props.theme.accent};
	box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 0px;

	cursor: pointer;

	appearance: none;
`;
export const IconContainer = styled.div`
	position: absolute;
	top: 12px;
	left: 165px;
	cursor: pointer;
`;

export const Svg = styled.svg`
	width: 25px;
	height: 25px;
	fill: ${(props) => props.theme.fontColor};
`;
