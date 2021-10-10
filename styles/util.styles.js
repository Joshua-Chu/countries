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
	border: none;
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	background-color: #2b3743;
	border-radius: 5px;
	padding: 20px 30px;

	display: flex;
	justify-content: center;
	align-items: center;

	span {
		padding: 0 10px;
		fill: #fff;
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
