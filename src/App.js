import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [id, setID] = useState('');

  useEffect(()=>{
        const getID = async () => {
              let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
              let expectedID = res.data[2].id;
              setID(expectedID);
              console.log(expectedID);
        }
        getID();
  },[])

  return (
    <div>
      <h1>id is {id}</h1>
    </div>
  );
}

export default App;
