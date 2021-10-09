import styled from "styled-components";
const Categories = () => {
	const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

	return (
		<StyledCategories>
			<StyledSelect name="regionSelection" id="regionSelection" placeholder="Filter By Region">
				<option value="" disabled selected hidden>
					Filter By Region
				</option>
				{options.map((op) => (
					<option value={op} key={op}>
						{op}
					</option>
				))}
			</StyledSelect>

			<IconContainer>
				<Svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
				</Svg>
			</IconContainer>
		</StyledCategories>
	);
};

export default Categories;

const StyledCategories = styled.div`
	position: relative;
`;
const StyledSelect = styled.select`
	width: 200px;
	padding: 15px 20px 15px 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: #fff;
	background-color: #2b3743;
	cursor: pointer;

	appearance: none;
`;
const IconContainer = styled.div`
	position: absolute;
	top: 12px;
	left: 165px;
	cursor: pointer;
`;

const Svg = styled.svg`
	width: 25px;
	height: 25px;
	fill: #fff;
`;
