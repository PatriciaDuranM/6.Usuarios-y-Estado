import {
	StyledCheckboxBox,
	StyledForm,
	StyledHeader,
	StyledTitle
} from './Header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledTitle>Listado de usuarios</StyledTitle>
			<StyledForm>
				<input type='text'></input>
				<StyledCheckboxBox>
					<label>Sólo activos</label>
					<input type='checkbox'></input>
				</StyledCheckboxBox>
				<select>
					<option>Por defecto</option>
					<option>Por nombre</option>
				</select>
			</StyledForm>
		</StyledHeader>
	);
};

export default Header;
