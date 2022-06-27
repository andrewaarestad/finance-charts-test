import React from 'react';
import './App.css';
import StockChart from "./StockChart";

function App() {
  return (
    <div className="App">
      <h2>react-finance-charts</h2>
      <p>Sample app for <a href="https://github.com/react-financial/react-financial-charts">react-finance-charts</a></p>
      <div className='chart'>
        <StockChart/>

      </div>
    </div>
  );
}

export default App;
