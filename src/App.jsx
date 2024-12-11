import Header from './components/Header/Header';
import PrintCards from './components/PrintCards/PrintCards';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<PrintCards />
		</>
	);
};

export default App;
