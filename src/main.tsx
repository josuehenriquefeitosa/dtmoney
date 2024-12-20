import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createServer, Model} from 'miragejs'
import {App} from './App.tsx'


createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelancer website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date()
        },
        {
          id:2,
          title: 'Aluguel ',
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
          createdAt: new Date()
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions',(schema,request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <App />

  </StrictMode>,
)
