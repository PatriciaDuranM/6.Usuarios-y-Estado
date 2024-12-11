import { USERS } from '../../constants/users';
import Card from '../Card/Card';
import StyledCardsBox from './PrintCards.styles';

const PrintCards = () => {
	return (
		<StyledCardsBox>
			{USERS.map(user => (
				<Card key={user.userId} {...user} />
			))}
		</StyledCardsBox>
	);
};

export default PrintCards;
