
import logo from '../../assets/logo.svg'
import { HeaderContainer,HeaderContent } from './styles'

interface HeaderProps{
	onOpenNewTransaction:() => void;
}


export const Header = ({onOpenNewTransaction}:HeaderProps)=>{
	

	return(
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="dt money"/>
				<button type="button" onClick={onOpenNewTransaction}> Nova Transação</button>

			</HeaderContent>
		</HeaderContainer>
	)
}