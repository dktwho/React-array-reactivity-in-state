import './App.css';
import { useState} from 'react'

function App() {
  const [notes, setNotes] = useState([1,2,3,4,5])

  let index = 2
  let index2 = '----'




  const result = notes.map((note, idx) => {
    return <p key={idx}>{note}</p>
  })

  function add() {
    setNotes([...notes, 6])
  }

  function deleted() {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }

  function changed() {
    setNotes([...notes.slice(0,index), index2, ...notes.slice(index + 1)])
  }

  function reversed() {
    setNotes([...notes.reverse()])
  }


  return (
    <div className="App">
      <button onClick={add}>Add Char</button>
      <button onClick={deleted}>Deleted Char</button>
      <button onClick={changed}>Changed Char</button>
      <button onClick={reversed}>Reverse arr</button>
      {result}

      {/* <button onClick={() => setLetters([...letters, letterAddedSymbolE ])}>Added</button> <br />
      <button onClick={() => setLetters([...letters.slice(0, index), ...letters.slice(index + 1)])}>Deleted item(index)</button> <br />
      <button onClick={() => setLetters([...letters.slice(0, index), '!!!!', ...letters.slice(index + 1)])}>Changed hard code symbol</button> <br />
      <button onClick={() => setLetters([...letters.slice(0, index), changedSymbol, ...letters.slice(index + 1)])}>Changed from variables symbol</button> <br />
      <button onClick={() => setLetters([...letters.reverse()])}>Reverse</button> */}

    </div>
  );
}

export default App;
