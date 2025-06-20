import logo from './logo.svg';
import './App.css';
import Greet from './reactintro/v1Greet';
import Welcome from './reactintro/v6Welcome';
import Hello from './reactintro/v8Hello';
import V9VarProps from './reactintro/v9Props';
import V10Messge from './reactintro/V10Messge';
import V9PropsInComponent from './reactintro/v9PropsInClassComponents';

function App() {
  return (
    <div className="App">
      <p>-----------------------Video 10 State-----------------</p>
      <V10Messge></V10Messge>
      <p>-----------------------Video 9 Props-----------------</p>
      <V9VarProps name="skrish1" heroName="sudev1">
        <p>This is a child props</p>
      </V9VarProps>
      <V9VarProps name="skrish2" heroName="sudev2">
        <button>Action</button>
      </V9VarProps>
      <V9VarProps name="skrish3" heroName="sudev3" />
      <V9VarProps name="skrish4" heroName="sudev4" />
      <p>-----------------------Video 9 Props with class Component-----------------</p>
      <V9PropsInComponent name="skrish class component" heroName="sudev3-class component">

      </V9PropsInComponent>
      <Greet></Greet>
      <p>-----------------------Video 8 with and without JSX -----------------</p>
      <Hello />
      <p>-----------------------Video 6 Class Component-----------------</p>
      <Welcome />


      <p>-----------------------Video 5 Functional Component-----------------</p>
      <Greet />
    </div>
  );
}

export default App;
