import {
	StyledCheckboxBox,
	StyledForm,
	StyledHeader,
	StyledTitle
} from './Header.styles';

const Header = ({ setSearch, setCheck, setOrder }) => {
	return (
		<StyledHeader>
			<StyledTitle>Listado de usuarios</StyledTitle>
			<StyledForm>
				<input
					type='text'
					onInput={event => setSearch(event.target.value)}
				></input>
				<StyledCheckboxBox>
					<label>Sólo activos</label>
					<input
						type='checkbox'
						onChange={event => setCheck(event.target.checked)}
					></input>
				</StyledCheckboxBox>
				<select onChange={event => setOrder(event.target.value)}>
					<option value='default'>Por defecto</option>
					<option value='name'>Por nombre</option>
				</select>
			</StyledForm>
		</StyledHeader>
	);
};

export default Header;
