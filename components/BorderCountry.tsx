import { useRouter } from "next/dist/client/router";
import { StyledCountryTextDetails } from "../styles/util.styles";
import { StyledBorderCountries, Border, Borders } from "./BorderCountry.styles";
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
