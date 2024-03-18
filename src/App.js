import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';


const fetcher = (repo) =>{
  return fetch("https://api.github.com/repos/${repo}".then((res) =>res.json))}

function App() {
  const [repoName,setName] = useState('')
  const {data} = useQuery(['github-data', repoName],() => fetcher(repoName)) 
  return <div className="App">
    <input type ="text" value={repoName} onChange={(e) => e.target.value}></input>
    <h2>Name :{data.name}</h2>
    <h2>Desc :{data.description}</h2>
  </div>
}

export default App;
