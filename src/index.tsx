import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs' 

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 8000,
          category: 'Freela',
          createdAt: new Date('2020-02-01 09:00:00')
        },
        {
          id: 2,
          title: 'Alugue',
          type: 'withdraw',
          amount: 1200,
          category: 'Casa',
          createdAt: new Date('2020-01-01 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);