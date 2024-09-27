import { createContext, useContext, useReducer } from 'react';

const votesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'VOTE': {
      const { contenderName, voterName } = action.payload;
      return {
        ...state,
        list: state.list.map((contender) =>
          contender.contenderName === contenderName
            ? { ...contender, voters: [...contender.voters, voterName] }
            : contender
        ),
        total: state.total + 1,
      };
    }
    case 'REMOVE_VOTE': {
      const { contenderName, voterName } = action.payload;
      return {
        ...state,
        list: state.list.map((contender) =>
          contender.contenderName === contenderName
            ? {
                ...contender,
                voters: contender.voters.filter((voter) => voter !== voterName),
              }
            : contender
        ),
        total: state.total > 0 ? state.total - 1 : 0, 
      };
    }
    default:
      return state;
  }
}

const initial = {
  list: [
    { contenderName: 'Suresh', voters: ['Aditya'] },
    { contenderName: 'Deepank', voters: [] },
    { contenderName: 'Abhik', voters: [] },
  ],
  total: 1,
};

export function VoteContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <votesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </votesContext.Provider>
  );
}

export function useContextHelper() {
  return useContext(votesContext);
}
