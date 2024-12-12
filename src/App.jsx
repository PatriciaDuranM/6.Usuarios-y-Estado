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

	let filteredUsers = searchFilter(search, USERS);
	filteredUsers = activeCheck(check, filteredUsers);
	filteredUsers = selectFilter(order, filteredUsers);

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
			<PrintCards users={filteredUsers} />
		</>
	);
};

export default App;

const searchFilter = (search, users) => {
	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(search.toLowerCase())
	);
	return filteredUsers;
};

const activeCheck = (check, users) => {
	const activeUsers = users.filter(user => user.active === true);

	if (check === true) {
		return activeUsers;
	} else {
		return users;
	}
};

const selectFilter = (order, users) => {
	const newUSERS = [...users];
	if (order === 'name') {
		return newUSERS.sort((a, b) => a.name.localeCompare(b.name));
	}
	if (order === 'default') {
		return newUSERS;
	}
};
