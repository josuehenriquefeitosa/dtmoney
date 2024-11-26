import { useEffect } from "react";
import { TransactionContainer } from "./styles";
import { api } from "../../services/api";

export const TransactionsTable = () =>{

	useEffect(()=>{
		api.get('/transactions')
		.then(data => console.log(data))
	},[])

	return(
		<TransactionContainer>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/11/2024</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className="withdraw">- R$1.100,00</td>
						<td>Casa</td>
						<td>07/11/2024</td>
					</tr>
				</tbody>
			</table>

		</TransactionContainer>
	)
}