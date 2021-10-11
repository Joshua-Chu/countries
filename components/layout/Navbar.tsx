import Link from "next/link";
import TogglerIcon from "./TogglerIcon";
import { Header, StyledNavBar, Logo, Toggler } from "./Navbar.styles";

type Props = {
	isDark: boolean;
	onThemeToggle: () => {};
};

const NavBar: React.FC<Props> = ({ isDark, onThemeToggle }) => {
	return (
		<Header>
			<StyledNavBar>
				<Logo>
					<Link href="/">
						<a>Where in the World?</a>
					</Link>
				</Logo>
				<Toggler onClick={onThemeToggle}>
					<TogglerIcon isDark={isDark} />

					<span>{isDark ? "Dark Mode" : "Light Mode"}</span>
				</Toggler>
			</StyledNavBar>
		</Header>
	);
};

export default NavBar;
