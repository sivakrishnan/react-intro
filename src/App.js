import logo from './logo.svg';
import './App.css';
import Greet from './reactintro/v1Greet';
import Welcome from './reactintro/v6Welcome';
import Hello from './reactintro/v8Hello';
import V9VarProps from './reactintro/v9Props';
import V10Messge from './reactintro/V10Messge';
import V9PropsInComponent from './reactintro/v9PropsInClassComponents';
import V11Counter from './reactintro/V11Counter';
import V12DestructuringPropsAndState from './reactintro/V12DestructuringPropsAndState';
import V12DestructuringPropsAndStateInClassCom from './reactintro/V12DestructuringPropsAndStateInClassCom';
import V13ClassClick from './reactintro/V13ClassClick';
import V13FunctionClick from './reactintro/V13FunctionClick';
import V14EventBind from './reactintro/V14EventBind';
import V15ParentComponent from './reactintro/V15ParentComponent';
import V16ConditionalRendering from './reactintro/V16ConditionalRendering';
import V17NameList from './reactintro/V17NameList';
import V20Stylesheets from './reactintro/V20Stylesheets';
import V20InlineStyleSheet from './reactintro/V20InlineStyleSheet';
import styles from './reactintro/appStyles.module.css';
import './reactintro/appStyles.css';
import V21Forms from './reactintro/V21Forms';
import V23MountingLifeCycle from './reactintro/V23MountingLifeCycle';
import V25FragmentDemo from './reactintro/V25FragmentDemo';



function App() {
  return (
    <div className="App">

      <p>-----------------------Video 25 React Fragments-----------------</p>
      <V25FragmentDemo></V25FragmentDemo>
      <p>-----------------------Video 23 and 24 Component Mounting, Updating Lifecycle-----------------</p>
      <V23MountingLifeCycle></V23MountingLifeCycle>
      <p>-----------------------Video 22 Component Lifecycle method-----------------</p>
      <ul>
        <li>
          -----Mounting-----
          <ul>
            <li>
              Constructor
            </li>
            <li>
              static getDerivedStateFromProps
            </li>
            <li>
              render
            </li>
            <li>
              ComponentDidMount
            </li>
          </ul>
        </li>
        <li>
          -----Updating-----
          <ul>
            <li>
              static getDerivedStateFromProps
            </li>
            <li>
              shouldComponentUpdate
            </li>
            <li>
              render
            </li>
            <li>
              getSnapshotBeforeUpdate
            </li>
            <li>
              ComponentDidUpdate
            </li>

          </ul>
        </li>
        <li>
          -----UnMounting-----
          <ul>
            <li>
              ComponentWillUnMount
            </li>
          </ul>
        </li>
        <li>
          -----Error Handling-----
          <ul>
            <li>
              getDerivedStateFromError
            </li>
            <li>
              ComponentDidCatch
            </li>
          </ul>
        </li>
      </ul>
      <p>-----------------------Video 21 Basic Forms-----------------</p>
      <V21Forms primary={true}></V21Forms>
      <p>-----------------------Video 20 Styling Component-----------------</p>
      <V20Stylesheets primary={true}></V20Stylesheets>
      <V20InlineStyleSheet></V20InlineStyleSheet>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <p>-----------------------Video 17, 18 and 19  List Rendering-----------------</p>
      <V17NameList></V17NameList>
      <p>-----------------------Video 16 Conditional Rendering-----------------</p>
      <V16ConditionalRendering></V16ConditionalRendering>


      <p>-----------------------Video 15 Methods as Props-----------------</p>
      <V15ParentComponent></V15ParentComponent>
      <p>-----------------------Video 14 Event Binding-----------------</p>
      <V14EventBind></V14EventBind>
      <p>-----------------------Video 13 Event Handling-----------------</p>
      <V13FunctionClick></V13FunctionClick>
      <V13ClassClick></V13ClassClick>
      <p>-----------------------Video 12 Destructruing props and state-----------------</p>
      <V12DestructuringPropsAndState name="skrish" heroName="suyambu"></V12DestructuringPropsAndState>
      <V12DestructuringPropsAndStateInClassCom name="skrish" heroName="suyambu"></V12DestructuringPropsAndStateInClassCom>
      <p>-----------------------Video 11 Related to State-----------------</p>
      <p>-----------------------Video 11 Point1- Always make use of setState and never modify the state directly-----------------</p>
      <p>-----------------------Video 11 Point2- Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method----------------</p>
      <p>-----------------------Video 11 Point3- When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object----------------</p>
      <V11Counter></V11Counter>
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
