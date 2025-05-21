import React, { useEffect, useState } from 'react';
import './App.css'; // Optional CSS import

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>My Full Stack App</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
