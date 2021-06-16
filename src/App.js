import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const getKey = async () => {

    // let res = await axios.get(' https://api.opendota.com/api/matches/271145478?api_key=a873cd1b-6100-4bf7-98fd-243c48dac6db' https://api.opendota.com/api/players/116145587/recentMatches);
    let res = await axios.get('https://api.opendota.com/api/matches/6042451411')
    console.log(res)
  }
  getKey();
  return (
    <div className="App">
      <p>home</p>

    </div>
  );
}

export default App;
