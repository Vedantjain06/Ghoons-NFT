import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import './styles/reset.scss';
import App from './App';
import { ScrollProvider } from './helpers/scrollProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ScrollProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </ScrollProvider>
    </Router>
  </React.StrictMode>
);

