import './App.css';
import List from './components/List';
import ListItem from './components/ListItem';
import { nanoid } from 'nanoid';
import Widget from './components/Widget';
import Link from './components/Link';
import Input from './components/Input';
import Button from './components/Button';

import data from './data';
const { newsWidget, currencyWidget, inputTop, program, visited, broadcast } =
  data;
function App() {
  return (
    <div className='container'>
      <Widget title={<Link href='#0'>Сейчас в сми</Link>}>
        <List className='row' items={newsWidget}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()} className='col-12'>
                <Link href={item.link}>{`${item.logo} ${item.title}`}</Link>
              </ListItem>
            ))
          }
        </List>
        <List className='row' items={currencyWidget}>
          {(items) =>
            items.map((item) => (
              <ListItem
                className='col-3'
                key={nanoid()}>{`${item.currency} ${item.amount}`}</ListItem>
            ))
          }
        </List>
      </Widget>
      <Widget>
        <span>
          <Link href='#0'>Яндекс</Link>
        </span>

        <List className='row' items={inputTop}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()} className='col'>
                <Link href='#0'>{item}</Link>
              </ListItem>
            ))
          }
        </List>
        <form>
          <Input type='text' name='name' style={{ width: '70%' }} required />
          <Button className='btn'>Найти</Button>
          <label className='w-100' htmlFor='name'>
            Найдется все.
          </label>
        </form>
      </Widget>
      <Widget>
        <p className='banner'>Баннер рекламы</p>
      </Widget>
      <div className='row'>
        <Widget className='col-4' title={<Link href='#0'>Погода</Link>}>
          <p>Какой-то прогноз погоды</p>
        </Widget>

        <Widget className='col-4' title={<Link href='#0'>Карта Германии</Link>}>
          {<Link href='#0'>Расписание</Link>}
        </Widget>

        <Widget className='col-4' title={<Link href='#0'>Эфир</Link>}>
          <List items={broadcast}>
            {(items) =>
              items.map((item) => (
                <ListItem key={nanoid()}>
                  <Link
                    href={item.link}>{`${item.title} ${item.channel}`}</Link>
                </ListItem>
              ))
            }
          </List>
        </Widget>

        <Widget className='col-4' title={<Link href='#0'>Посещаемое</Link>}>
          <List className='row' items={visited}>
            {(items) =>
              items.map((item) => (
                <ListItem key={nanoid()}>
                  <Link href='#0'>{item}</Link>
                </ListItem>
              ))
            }
          </List>
        </Widget>

        <Widget className='col-4' title={<Link href='#0'>Телепрограмма</Link>}>
          <List items={program}>
            {(items) =>
              items.map((item) => (
                <ListItem key={nanoid()}>
                  <Link
                    href={item.link}>{`${item.title} ${item.channel}`}</Link>
                </ListItem>
              ))
            }
          </List>
        </Widget>
      </div>
    </div>
  );
}

export default App;
