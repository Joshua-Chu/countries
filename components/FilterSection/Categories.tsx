import { useCountries } from "../../store/CountriesContext";
import { StyledCategories, StyledSelect, Svg, IconContainer } from "./Categories.styled";
const Categories = () => {
	const { setRegionHandler } = useCountries();
	const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

	return (
		<StyledCategories>
			<StyledSelect
				name="regionSelection"
				id="regionSelection"
				defaultValue={"Filter By Region"}
				onChange={setRegionHandler}>
				<option value="Filter By Region" disabled hidden>
					Filter By Region
				</option>
				<option value="">All</option>
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
