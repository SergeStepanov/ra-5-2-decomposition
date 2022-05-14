import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import { nanoid } from 'nanoid';
import Widget from './components/Widget';

import data from './data';
const { newsWidget, currencyWidget } = data;

function App() {
  return (
    <div className='container'>
      <Widget title={<a href="#0">Сейчас в сми</a>}>
        <List className='row' items={newsWidget}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()} className='col-12'>
                <a href={item.link}>
                  {item.logo}
                  {item.title}
                </a>
              </ListItem>
            ))
          }
        </List>
      </Widget>
      {/* {console.log(data)} */}
    </div>
  );
}

export default App;
