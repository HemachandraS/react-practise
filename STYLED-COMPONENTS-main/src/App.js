import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/button";
function App() {
  return (
    <div className="App">
      <Button my_color={'white'} my_background_color={'rgb(36,144,254)'} my_border={'0px'}>Primary Button</Button>
      <Button my_color={'black'} my_background_color={'white'}  my_border={'1px solid #DDDDDD'}>Default Button</Button>
      <Button my_color={'black'} my_background_color={'white'}  my_border={'1px dashed #DDDDDD'}>Dashed Button</Button>
      <Button my_color={'black'} my_background_color={'white'}  my_border={'0px'}>Text Button</Button>
      <Button my_color={'rgb(36,144,254)'} my_background_color={'white'}  my_border={'0px'}>Link Button</Button>
    </div>
  );
}

export default App;
