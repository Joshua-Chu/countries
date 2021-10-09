import { useEffect, useState } from "react";
import Link from "next/link";

//Components
import TogglerIcon from "./TogglerIcon";

// Stylings
import styled from "styled-components";
import { FlexContainer } from "../../styles/util.styles";
const NavBar: React.FC = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		const isDarkSet = sessionStorage.getItem("isDark");
		const isDarkSetBool = Boolean(isDarkSet);

		setIsDark(() => isDarkSetBool);
	}, []);

	const colorThemeToggler = () => {
		setIsDark(() => !isDark);

		// can later be extracted to own hook
		sessionStorage.setItem("isDark", JSON.stringify(isDark));
	};

	return (
		<Header>
			<StyledNavBar>
				<Logo>
					<Link href="/">
						<a>Where in the World?</a>
					</Link>
				</Logo>
				<Toggler onClick={colorThemeToggler}>
					<TogglerIcon isDark={isDark} />

					<span>{isDark ? "Dark Mode" : "Light Mode"}</span>
				</Toggler>
			</StyledNavBar>
		</Header>
	);
};

export default NavBar;

const Header = styled.div`
	background-color: #2b3743;
	padding: 0 20px;
`;
const StyledNavBar = styled(FlexContainer)`
	padding: 30px 0;
	justify-content: space-between;
`;

const Logo = styled.h3`
	margin: 0;
	font-weight: 800;
	font-size: 1.2rem;

	@media only screen and (max-width: 639px) {
		font-size: 0.8rem;
	} ;
`;

const Toggler = styled.div`
	margin: 0;
	font-weight: 800;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 639px) {
		font-size: 0.8rem;
	}
`;
