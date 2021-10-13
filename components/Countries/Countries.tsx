import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Country } from "../../types";
import SingleCountryCard from "./SingleCountryCard";
import { FlexContainer, Section } from "../../styles/util.styles";
import styled from "styled-components";

type Props = {
	countries: Array<Country>;
};

const Countries: React.FC<Props> = ({ countries }) => {
	const [pageNumber, setPageNumber] = useState<number>(0);
	const COUNTRIES_PER_PAGE = 8;
	const COUNTRIES_VISITIED = pageNumber * COUNTRIES_PER_PAGE;
	const paginatedCountries = countries
		.slice(COUNTRIES_VISITIED, COUNTRIES_VISITIED + COUNTRIES_PER_PAGE)
		.map((country) => {
			return <SingleCountryCard key={country.name.official} country={country} />;
		});
	const pageCount = Math.ceil(countries.length / COUNTRIES_PER_PAGE);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<Section>
			<CountriesContainer>
				{paginatedCountries}
				<ReactPaginate
					previousLabel={"Previous"}
					nextLabel={"Next"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"paginationBttns"}
					previousLinkClassName={"previousBttn"}
					nextLinkClassName={"nextBttn"}
					disabledClassName={"paginationDisabled"}
					activeClassName={"paginationActive"}
				/>
			</CountriesContainer>
		</Section>
	);
};

export default Countries;

const CountriesContainer = styled(FlexContainer)`
	flex-wrap: wrap;
	justify-content: center;
	gap: 35px;
	min-height: 1010px;

	@media only screen and (max-width: 1200px) {
		justify-content: center;
	}
`;
