import React, { useState } from 'react';
import './App.css';

function App() {
  // Состояния для интервала и размера массива
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [arraySize, setArraySize] = useState(10);
  const [generatedArray, setGeneratedArray] = useState([]);
  const [isArrayGenerated, setIsArrayGenerated] = useState(false);

  // Функция для генерации массива случайных чисел
  const generateArray = () => {
    const newArray = [];
    const min = parseInt(minValue);
    const max = parseInt(maxValue);
    const size = parseInt(arraySize);

    // Проверка на корректность введенных значений
    if (isNaN(min) || isNaN(max) || isNaN(size) || min >= max || size <= 0) {
      alert('Пожалуйста, введите корректные значения:\n- Минимум < Максимума\n- Размер массива > 0');
      return;
    }

    // Генерация случайных чисел в заданном диапазоне
    for (let i = 0; i < size; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      newArray.push(randomNum);
    }

    setGeneratedArray(newArray);
    setIsArrayGenerated(true);
  };

  // Обработчики изменения значений
  const handleMinChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleSizeChange = (e) => {
    setArraySize(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Генератор случайных массивов</h1>
      </header>

      <main className="main-content">
        <div className="controls-container">
          <div className="input-group">
            <label htmlFor="minValue">Минимальное значение:</label>
            <input
              type="number"
              id="minValue"
              value={minValue}
              onChange={handleMinChange}
              min="-1000"
              max="1000"
            />
          </div>

          <div className="input-group">
            <label htmlFor="maxValue">Максимальное значение:</label>
            <input
              type="number"
              id="maxValue"
              value={maxValue}
              onChange={handleMaxChange}
              min="-1000"
              max="1000"
            />
          </div>

          <div className="input-group">
            <label htmlFor="arraySize">Размер массива:</label>
            <input
              type="number"
              id="arraySize"
              value={arraySize}
              onChange={handleSizeChange}
              min="1"
              max="100"
            />
          </div>

          <button className="generate-btn" onClick={generateArray}>
            Сгенерировать массив
          </button>
        </div>

        {isArrayGenerated && (
          <div className="result-container">
            <h2>Сгенерированный массив:</h2>
            <div className="array-info">
              <p>Диапазон: от {minValue} до {maxValue}</p>
              <p>Размер массива: {arraySize} элементов</p>
            </div>
            <div className="table-container">
              <table className="array-table">
                <thead>
                  <tr>
                    <th>Индекс</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedArray.map((value, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="array-raw">
              <p>Массив в строковом формате:</p>
              <code>[{generatedArray.join(', ')}]</code>
            </div>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>React Array Generator &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;