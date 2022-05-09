import React from 'react';
import ListItem from './ListItem';
import { nanoid } from 'nanoid';

function List(props) {
  const { data } = props.data;
  return (
    <ul className="row">
      data.map((item) => {
        return {
          <ListItem key={nanoid()} data={item}/>
        } 
      })
      
    </ul>
  );
}

export default List;
