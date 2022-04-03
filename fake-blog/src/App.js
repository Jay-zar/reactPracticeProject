import './App.css';

const frogges= ['desert rain frog', 'american bullfrog', 'coquí', 'poison dart frog']
const FrogMenu= 
function(frog) {
      return (
        <div>
        <select>
        <option value={frogges[0]}>{frogges[0]}</option>
        <option value={frogges[1]}>{frogges[1]}</option>
        <option value={frogges[2]}>{frogges[2]}</option>
        </select>
        </div>
      )
  };

  const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];
function App() {
  return (
    <div className="App">
      <FrogMenu/>
      <label htmlFor='search'>Search</label><input id='search' type= 'text'/><button>test</button>

    </div>
  );
}

export default App;
