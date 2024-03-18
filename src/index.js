import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryclient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryclient} contextSharing={true}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
)

reportWebVitals();
