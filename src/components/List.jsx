import React from 'react';
import { useContextHelper } from '../context/votes';
import VotersList from './helper/VotersList';

export default function List() {
  const { list } = useContextHelper();

  console.log(list);
  return (
    <div>
      
      {list.map((item, index) => {
        return (
          <div key={item.contenderName}>
            <h3>{item.contenderName}</h3>
            <p>Total Votes: {item.voters.length}</p>
            <VotersList  data={item}/>
          </div>
        )
      })}
    </div>
  )
}
