import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header
        title="Component Site"
        link1="Home"
        link2="About"
        link3="Profile"
      />
      <SideBar
        link1="Home"
        link2="About"
        link3="Profile"
      />
      <MainContent
        title="Welcome visitor!"
        imageUrl="https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-1480x925.jpg"
        paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt natus quidem, ratione dolor voluptatem vero ea repellendus aliquam maiores vitae quaerat numquam dolorem enim."
      />
      <MainContent
        title="Other article!"
        imageUrl="https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-1480x925.jpg"
        paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

export default App;

