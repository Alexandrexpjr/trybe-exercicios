import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Fazer os exercícios', 'Fazer compras', 'Levar o lixo', 'Nabulizar a nala'];

function App() {
  return (
    <ul>
      { tasks.map(task => {
        return (
          Task(task)
        )
      })}
    </ul>
  );
}

export default App;
