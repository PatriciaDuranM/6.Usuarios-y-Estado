import {
	StyledActive,
	StyledButton,
	StyledCard,
	StyledImg,
	StyledName,
	StyledProfileBox,
	StyledProfileInfo,
	StyledUser
} from './Card.styles';

const Card = ({ active, profileImage, name, username }) => {
	return (
		<StyledCard>
			<StyledProfileBox>
				<StyledImg src={profileImage}></StyledImg>
				<StyledProfileInfo>
					<StyledName>{name}</StyledName>
					<StyledUser>{username}</StyledUser>
				</StyledProfileInfo>
			</StyledProfileBox>
			<StyledActive $activeColor={active ? 'green' : 'red'}>
				{active ? 'Activo' : 'Inactivo'}
			</StyledActive>
			<StyledButton>Ver Detalles</StyledButton>
		</StyledCard>
	);
};

export default Card;
