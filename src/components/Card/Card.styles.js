import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCard = styled.div`
	width: 484px;
	height: 64px;
	border-radius: 10px;
	background-color: white;
	padding: 16px;
	gap: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
`;
const StyledImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50px;
`;

const StyledProfileBox = styled.div`
	width: 266px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`;

const StyledProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const StyledName = styled.h2`
	margin: 0px;
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.semibold};
`;

const StyledUser = styled.span`
	margin: 0px;
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.regular};
`;

const StyledActive = styled.span`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.regular};
	color: ${({ $activeColor }) => $activeColor};
`;
const StyledButton = styled.button`
	width: 110px;
	height: 24px;
`;

export {
	StyledCard,
	StyledImg,
	StyledProfileBox,
	StyledProfileInfo,
	StyledName,
	StyledUser,
	StyledActive,
	StyledButton
};
