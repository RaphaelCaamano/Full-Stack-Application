import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList'; // Import the ItemList component
import './styles/App.css'; // Import the CSS file

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
      <ItemList items={data} /> {/* Use the ItemList component */}
    </div>
  );
}

export default App;
