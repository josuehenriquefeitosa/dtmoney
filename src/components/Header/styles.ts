import styled from "styled-components";

export const HeaderContainer = styled.header`
	
	background: var(--blue);
`
export const HeaderContent = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 2rem 1rem 12rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid red;

	button{
		font-size: 1rem;
		color: var(--shape);
		background:var(--blue-ligth);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;
		transition: ease-in-out 250ms;

		&:hover{
			filter: brightness(0.9);
			
		}
	}
`
