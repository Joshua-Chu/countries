import SingleCountryPage from "../../components/Countries/SingleCountryPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { Country } from "../../types";
import { Button, FlexContainer, Section } from "../../styles/util.styles";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

type Props = {
	country: Country;
};

const CountryDetails: React.FC<Props> = ({ country }) => {
	const router = useRouter();
	const pushToHomepage = () => {
		router.push("/");
	};
	return (
		<Section>
			<ButtonBackContainer>
				<Button onClick={pushToHomepage}>
					{" "}
					<span>
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd">
							<path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
						</svg>
					</span>{" "}
					Back
				</Button>
			</ButtonBackContainer>
			<SingleCountryPage country={country[0]} />
		</Section>
	);
};

export default CountryDetails;

const ButtonBackContainer = styled(FlexContainer)`
	margin-top: 80px;
	padding-left: 20px;
	justify-content: flex-start;
`;

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const countriesData: Array<Country> = await response.json();
	const paths = countriesData.map((country) => ({
		params: { name: country.name.official },
	}));

	return {
		paths,
		fallback: false,
	};
};

const getCountry = async (name) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true
    `);

	const country = await res.json();

	return country;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const encodedParams = encodeURI(params.name as string);
	const country = await getCountry(encodedParams);

	return {
		props: {
			country,
		},
	};
};
