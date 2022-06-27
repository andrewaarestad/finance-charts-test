import React from 'react';
import './App.css';
import StockChart from "./StockChart";

function App() {
  return (
    <div className="App">
      <h2>react-financial-chartss</h2>
      <p>Sample app for <a href="https://github.com/react-financial/react-financial-charts">react-financial-chartss</a></p>
      <div className='chart'>
        <StockChart/>

      </div>
    </div>
  );
}

export default App;
