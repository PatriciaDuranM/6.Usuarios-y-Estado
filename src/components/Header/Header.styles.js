import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 32px;
`;

const StyledTitle = styled.h1`
	font-family: sans-serif;
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 32px;
	width: 484px;
`;

const StyledCheckboxBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 4px;
`;

export { StyledHeader, StyledTitle, StyledForm, StyledCheckboxBox };
