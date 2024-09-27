import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { VoteContextProvider } from './context/votes';

function App() {
  return (
    <VoteContextProvider>
      <div className='App'>
        <Header/>
        <Form/>
        <List/>
      </div>
    </VoteContextProvider>
  );
}

export default App;
