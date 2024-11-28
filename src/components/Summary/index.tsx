import { useContext } from 'react'
import entradasIcon from '../../assets/entradasIcon.svg'
import saidasIcon from '../../assets/saidasIcon.svg'
import totalIcon from '../../assets/totalIcon.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { SummaryContainer } from './styles'

export const  Summary = () => {
	const {transactions} = useContext(TransactionsContext)
	console.log(transactions);
	
	const summary = transactions.reduce((acc,transaction)=>{
		if(transaction.type==='deposit'){
			acc.deposits+= transaction.amount
			acc.total+= transaction.amount
		}else{
			acc.withdraws+= transaction.amount
			acc.total-= transaction.amount
		}
		return acc;
	},{
		deposits: 0,
		withdraws: 0,
		total: 0,
	})
	

	return (
		<SummaryContainer>
			
			<div>
				<header>
					<p>Entradas</p>
					<img src={entradasIcon} alt="Icone de entradas" />
				</header>
				<strong>{
			new Intl.NumberFormat('pt-BR', {
				style:'currency',
				currency:'BRL'
			}).format(summary.deposits)}</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={saidasIcon} alt="Icone de saidas" />
				</header>
				<strong>-{
			new Intl.NumberFormat('pt-BR', {
				style:'currency',
				currency:'BRL'
			}).format(summary.withdraws)}</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalIcon} alt="Icone de entradas" />
				</header>
				<strong>{
			new Intl.NumberFormat('pt-BR', {
				style:'currency',
				currency:'BRL'
			}).format(summary.total)}</strong>
			</div>
		</SummaryContainer>
	)
}
