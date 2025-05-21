import React, { useState } from 'react';

const App = () => {
  const [template, setTemplate] = useState("ERC-20");
  const [name, setName] = useState("MyToken");
  const [symbol, setSymbol] = useState("MTK");
  const [supply, setSupply] = useState(1000000);

  const handleGenerate = () => {
    // Logic to generate the smart contract code
    const contractCode = generateSmartContract(template, name, symbol, supply);
    console.log(contractCode);  // This will show the generated code in the console
  };

  return (
    <div>
      <h1>Smart Contract Template Generator</h1>
      <div>
        <label>Select Template:</label>
        <select onChange={(e) => setTemplate(e.target.value)} value={template}>
          <option value="ERC-20">ERC-20</option>
          <option value="ERC-721">ERC-721</option>
        </select>
      </div>
      <div>
        <label>Token Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Token Symbol:</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      </div>
      <div>
        <label>Total Supply:</label>
        <input type="number" value={supply} onChange={(e) => setSupply(e.target.value)} />
      </div>
      <button onClick={handleGenerate}>Generate Contract</button>
    </div>
  );
};

const generateSmartContract = (template, name, symbol, supply) => {
  if (template === "ERC-20") {
    return `
      pragma solidity ^0.8.0;
      contract ERC20Token {
          string public name = "${name}";
          string public symbol = "${symbol}";
          uint256 public totalSupply = ${supply} * (10 ** 18);
          mapping(address => uint256) public balanceOf;
      
          constructor() {
              balanceOf[msg.sender] = totalSupply;
          }
      
          function transfer(address recipient, uint256 amount) public returns (bool) {
              require(balanceOf[msg.sender] >= amount, "Insufficient balance");
              balanceOf[msg.sender] -= amount;
              balanceOf[recipient] += amount;
              return true;
          }
      }
    `;
  }
  // Add more templates here...
};

export default App;
