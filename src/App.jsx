import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const tasks = useSelector(state => state.tasks);

  return (
    <div className="App">
      <Header />
      <div>
        {tasks.length ?
          <div>
            {tasks.map(task => <Tasks key={task.id} task={task} />)}
          </div>
          :
          <h3>No tasks</h3>}
      </div>
      <Footer />
    </div>
  );
}

export default App;