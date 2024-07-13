import logo from './logo.svg';
import './App.css';
import Greet from './reactintro/v1Greet';
import Welcome from './reactintro/v6Welcome';
import Hello from './reactintro/v8Hello';
import V9VarProps from './reactintro/v9Props';
import V10Messge from './reactintro/V10Messge'

function App() {
  return (
    <div className="App">
      <p>-----------------------Video 10 State-----------------</p>
      <V10Messge></V10Messge>
      <p>-----------------------Video 9 Props-----------------</p>
      <V9VarProps name="skrish1" heroName="sudev1">
        <p>This is a child props</p>
      </V9VarProps>
      <V9VarProps name="skrish2" heroName="sudev2"/>
      <V9VarProps name="skrish3" heroName="sudev3"/>
      <V9VarProps name="skrish4" heroName="sudev4"/>
      <Greet></Greet>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
