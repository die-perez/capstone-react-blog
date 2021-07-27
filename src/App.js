import Snake from './img/snake.png'
import './App.css';
import Blog from './components/Blog'
import AddPost from './components/AddPost'



function App() {
  return (
    <div className="App">
      <img src={Snake} alt="snake" />
      <p>welcome to andie's blog</p>
      <Blog />
      <AddPost />
    </div>
  );
}

export default App;
