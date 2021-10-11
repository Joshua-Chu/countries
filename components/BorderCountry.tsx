import { StyledCountryTextDetails } from "../styles/util.styles";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

type Props = {
	borders: {
		common: string;
		official: string;
	}[];
};
const BorderCountries: React.FC<Props> = ({ borders }) => {
	console.log(borders);
	const router = useRouter();
	const routePushHandler = (official) => {
		const path = `/country/${official}`;
		router.push(path);
	};
	return (
		<StyledBorderCountries>
			<StyledCountryTextDetails>
				<span>Border Countries: </span>
			</StyledCountryTextDetails>

			<Borders>
				{borders.map((border) => (
					<Border key={border.common} onClick={() => routePushHandler(border.official)}>
						{border.common}
					</Border>
				))}
			</Borders>
		</StyledBorderCountries>
	);
};

export default BorderCountries;

const StyledBorderCountries = styled.div`
	display: flex;
	align-items: center;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

const Borders = styled.div`
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

const Border = styled.button`
	background-color: #2b3743;
	padding: 0.5rem 1rem;
	font-size: 10px;
	color: #fff;
	margin: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	@media only screen and (max-width: 800px) {
		font-size: 2vw;
	}
`;
