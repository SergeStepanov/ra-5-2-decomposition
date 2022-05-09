import './App.css';
import List from "./components/List";
import data from './data'

function App() {
  return (
    <div className='container'>
      'start'
      <List data={data}/>
      {console.log(data)}
    </div>
  )
}

export default App;
