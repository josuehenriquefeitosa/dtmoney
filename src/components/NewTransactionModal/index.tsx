import Modal from 'react-modal';
import { NewTransactionModalContainer, TransactionTypeContainer, RadioBox } from './styles';
import entradasIcon from '../../assets/entradasIcon.svg'
import saidasIcon from '../../assets/saidasIcon.svg'
import closeIcon from '../../assets/closeIcon.svg'
import { FormEvent, useState, useContext } from 'react';
//import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';


Modal.setAppElement('#root')

interface NewTransactionModalProps{
	isOpen: boolean;
	onRequestClose: () => void;
}


export const NewTransactionModal= ({isOpen, onRequestClose}: NewTransactionModalProps) =>{
	const {createTransaction} = useContext(TransactionsContext)
	const [type,setType] = useState('deposit')
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')



	const handleCreateNewTransaction = async (event:FormEvent) =>{
		event.preventDefault();
		
		await createTransaction({
			title,
			amount,
			category,
			type
		})

		setTitle('')
		setAmount(0)
		setCategory('')
		setType('deposit')

		onRequestClose()
	}


	return(
    <Modal 
			isOpen={isOpen}
		  onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type='button' className='react-modal-close' onClick={onRequestClose}>
				<img src={closeIcon} alt="fechar modal" />
			</button>
			<NewTransactionModalContainer onSubmit={handleCreateNewTransaction}	>

      	<h2>Cadastrar Transação</h2>
				<input 
					placeholder="Título"
					type="text"
					value={title}
					onChange={event=>setTitle(event.target.value)} 
				/>

				<input 
					placeholder="Valor"
					type="number"
					min={0}
					step={5}
					value={amount}
					onChange={event=>setAmount(Number(event.target.value))} 
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={()=>{setType('deposit')}}
						isActive={type==='deposit'}
						activeColor="green"
					>
						<img src={entradasIcon} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
					 type="button"
					 onClick={()=>{setType('withdraw')}}
					 isActive={type==='withdraw'}
					 activeColor="red"
					> 
						<img src={saidasIcon} alt="Saída" /> 
					  <span>Saída</span>
					</RadioBox>

				</TransactionTypeContainer>

				<input
				  placeholder='Categoria'
				  type="text"
					value={category}
					onChange={event=>setCategory(event.target.value)} 
				/>

				<button type="submit">Cadastrar</button>



			</NewTransactionModalContainer>
		
    </Modal>
  )
}