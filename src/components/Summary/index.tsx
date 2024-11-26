import entradasIcon from '../../assets/entradasIcon.svg'
import saidasIcon from '../../assets/saidasIcon.svg'
import totalIcon from '../../assets/totalIcon.svg'
import { SummaryContainer } from './styles'

export const  Summary = () => {
	return (
		<SummaryContainer>
			<div>
				<header>
					<p>Entradas</p>
					<img src={entradasIcon} alt="Icone de entradas" />
				</header>
				<strong>R$ 1000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={saidasIcon} alt="Icone de saidas" />
				</header>
				<strong>-R$ 500,00</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalIcon} alt="Icone de entradas" />
				</header>
				<strong>R$ 500,00</strong>
			</div>
		</SummaryContainer>
	)
}
