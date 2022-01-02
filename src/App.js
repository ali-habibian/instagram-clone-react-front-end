import './App.css';
import Home from './Components/HomePage/Home';
import LoginPage from './Components/LoginPage/LoginPage';


export default function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("user") == undefined || localStorage.getItem("user") == null) ?
          <LoginPage /> : <Home />
      }
    </div>
  );
}
