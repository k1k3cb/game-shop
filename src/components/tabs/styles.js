import styled from 'styled-components';

export const StyledButton = styled.button`
	display: block;
	margin-bottom: 0.5rem;
	width: 50px;
	padding: 0.5rem;
	border: 1px solid steelblue;
	color: aliceblue;
	background-color: ${({ $active }) => ($active ? 'steelblue' : 'transparent')};
`;
