import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';



function App() {
  return (
    <div className="Content">
      <Header />
      <ul className="list">
        <Content />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
