import { useState } from 'react'
import { GlobalStyle } from './styles/global.ts'
import { Header } from "./components/Header"
import { Dashboard } from './components/Dashboard/index.tsx'
import { NewTransactionModal } from './components/NewTransactionModal/index.tsx'
import { TransactionsProvider } from './TransactionsContext.tsx'




export const App = () => {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

	const handleOpenNewTransactionModal= ()=>{
		setIsNewTransactionModalOpen(true)
	}

	const handleCloseNewTransactionModal= ()=>{
		setIsNewTransactionModalOpen(false)
	}

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard /> 
      <NewTransactionModal 
					isOpen={isNewTransactionModalOpen} 
					onRequestClose={handleCloseNewTransactionModal}
				>
			</NewTransactionModal>
    </TransactionsProvider>
  )
}

