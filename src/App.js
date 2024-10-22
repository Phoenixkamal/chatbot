import './App.css';
import Chat from './components/chat/Chat';
import Userinput from './components/userinput/Userinput';

function App() {

  return (
    <div className="App">
      <section className='bot-ui-container'>
        <div className='content-wrap'>
          <Chat />
          <Userinput />
        </div>
      </section>
    </div>
  );
}

export default App;
