import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ShowsContextProvider } from './components/Context/ShowsContext';
import Layout from './components/Layout';

function App() {
    
  return (
      <Router>
            <ShowsContextProvider>
                <div className="container">
                    <Layout />
                </div>
            </ShowsContextProvider>
      </Router>
  );
}

export default App;
