import { useState } from 'react';
import Header from './components/Header/Header';
import PrintCards from './components/PrintCards/PrintCards';
import { USERS } from './constants/users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [search, setSearch] = useState('');
	const [check, setCheck] = useState(false);
	const [order, setOrder] = useState('default');
	console.log(search, order, check);

	const searchFilter = () => {
		const filteredUsers = USERS.filter(user =>
			user.name.toLowerCase().includes(search.toLowerCase())
		);
		return filteredUsers;
	};

	const activeCheck = () => {
		const defaultUsers = USERS.filter(user => user);
		const activeUsers = USERS.filter(user => user.active === true);
		const inactiveUsers = USERS.filter(user => user.active === false);

		if (check === true) {
			return activeUsers;
		} else {
			return inactiveUsers;
		}
	};

	return (
		<>
			<GlobalStyles />
			<Header
				search={search}
				setSearch={setSearch}
				check={check}
				setCheck={setCheck}
				order={order}
				setOrder={setOrder}
			/>
			<PrintCards users={(searchFilter(), activeCheck())} />
		</>
	);
};

export default App;
