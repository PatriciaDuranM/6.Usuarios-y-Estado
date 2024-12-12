import Card from '../Card/Card';
import StyledCardsBox from './PrintCards.styles';

const PrintCards = ({ users }) => {
	return (
		<StyledCardsBox>
			{users.map(user => (
				<Card key={user.userId} {...user} />
			))}
		</StyledCardsBox>
	);
};

export default PrintCards;
