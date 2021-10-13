import { Section, FlexContainer } from "../styles/util.styles";
import styled from "styled-components";
const Announcement: React.FC = ({ children }) => {
	return (
		<Section>
			<StyledAnnouncement>{children}</StyledAnnouncement>
		</Section>
	);
};

export default Announcement;

const StyledAnnouncement = styled(FlexContainer)``;
