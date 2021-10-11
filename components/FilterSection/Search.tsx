import styled from "styled-components";
import { useCountries } from "../../store/CountriesContext";
const Search = () => {
	const { debouncedOnChange } = useCountries();
	return (
		<SearchInput>
			<Input type="text" placeholder="Search for a country..." onChange={debouncedOnChange} />
			<IconContainer>
				<Svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="search"
					className="svg-inline--fa fa-search fa-w-16 "
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
				</Svg>
			</IconContainer>
		</SearchInput>
	);
};

export default Search;

const SearchInput = styled.div`
	max-width: 400px;
	width: 100%;
	position: relative;
	box-shadow: rgb(0 0 0 / 5%) 0px 3px 2px 0px;

	@media only screen and (max-width: 660px) {
		margin-bottom: 50px;
		max-width: none;
	}
`;

const Input = styled.input`
	outline: none;
	border: none;
	padding: 15px 20px 15px 45px;
	width: 100%;
	border-radius: 5px;
	color: ${(props) => props.theme.fontColor};
	background-color: ${(props) => props.theme.accent};
`;

const IconContainer = styled.div`
	position: absolute;
	top: 14px;
	left: 15px;
`;

const Svg = styled.svg`
	width: 20px;
	height: 20px;
	z-index: 1;
	color: ${(props) => props.theme.fontColor};
`;