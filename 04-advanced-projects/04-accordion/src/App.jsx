import './App.css';
import questions from './data';
import Questions from './Questions';

function App() {
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App
