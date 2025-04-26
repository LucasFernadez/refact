import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return;

    switch (operation) {
      case 'add':
        setResult(n1 + n2);
        break;
      case 'subtract':
        setResult(n1 - n2);
        break;
      case 'multiply':
        setResult(n1 * n2);
        break;
      case 'divide':
        if (n2 !== 0) setResult(n1 / n2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="envoltura">
      <h2>Calculadora</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <div>
        <button onClick={() => handleCalculation('add')}>Sumar</button>
        <button onClick={() => handleCalculation('subtract')}>Restar</button>
        <button onClick={() => handleCalculation('multiply')}>Multiplicar</button>
        <button onClick={() => handleCalculation('divide')}>Dividir</button>
      </div>
      <h3>Resultado: {result !== null ? result : '-'}</h3>
    </div>
  );
};

export default Calculator;
