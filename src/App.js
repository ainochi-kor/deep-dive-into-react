import logo from './logo.svg';
import './App.css';
import QuickStartPage from './page/quick-start';
import About from './page/about';
import Profile from './page/profile';
import Product from './page/product';
import ShoppingList from './page/shop';
import RespondingToEvent from './page/responding';
import State from './page/state';

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

const showProduct = () => {
  if (window.location.pathname === "/product") {
    return <Product />
  }
}

const showShop = () => {
  if (window.location.pathname === "/shop") {
    return <ShoppingList />
  }
}

const showResponse = () => {
  if (window.location.pathname === "/responding") {
    return <RespondingToEvent />
  }
}

const showState = () => {
  if (window.location.pathname === "/responding") {
    return <State />
  }
}

function App() {
  return (
    <div className="App">
      {showQuickStart()}
      {showAbout()}
      {showProfile()}
      {showProduct()}
      {showShop()}
      {showResponse()}
      {showState()}
    </div>
  );
}

export default App;
