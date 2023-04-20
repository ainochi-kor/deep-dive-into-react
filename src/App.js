import logo from './logo.svg';
import './App.css';
import QuickStartPage from './page/quick-start';
import About from './page/about';
import Profile from './page/profile';

const showQuickStart = () => {
  if (window.location.pathname === "/") {
    return <QuickStartPage />
  }
}

const showAbout = () => {
  if (window.location.pathname === "/about") {
    return <About />
  }
}

const showProfile = () => {
  if (window.location.pathname === "/profile") {
    return <Profile />
  }
}

function App() {
  return (
    <div className="App">
      {showQuickStart()}
      {showAbout()}
      {showProfile()}
    </div>
  );
}

export default App;
