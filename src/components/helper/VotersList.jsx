import React from 'react';
import { useContextHelper } from '../../context/votes';

export default function VotersList(props) {
  const { dispatch } = useContextHelper();

  const handleRemoveVote = (contenderName, voterName) => {
    dispatch({
      type: 'REMOVE_VOTE',
      payload: { contenderName, voterName },
    });
  };

  return (
    <div>
      {props.data.voters.map((item) => {
        return (
          <div key={item}>
            <span>{item}</span>
            <button
              onClick={() => handleRemoveVote(props.data.contenderName, item)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
