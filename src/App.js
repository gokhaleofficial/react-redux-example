import "./styles.css";
import Name from "./display-name";
import Counter from "./counter";

import NameWithRedux from "./redux/display-name";
import CounterWithRedux from "./redux/counter";

export default function App() {
  return (
    <div className="App">
      <h1>Non Redux Example</h1>
      <Name />
      <br />
      <Counter />
      <hr />
      <h1>Redux Example</h1>
      <NameWithRedux />
      <br />
      <CounterWithRedux />
    </div>
  );
}

// Create two components, Name and Counter.
// Make sure it works and display it inside App Component.

// CONVERT THIS APPLICATION TO REDUX.

// 1. Install Deps - react-redux, @reduxjs/toolkit

// 2. Create a Store in "store.js" file and configureStore.

// 3. Provide the newly created store to all the components.

// 3.1. The way to achieve this is (index.js)
// 3.2. import {Provider} from 'react-redux';
// import store from './store'
// 3.3 Import the store from store.js
// import store from './store'
// 3.4 Wrap the App component inside Provider.
// 3.5 Pass the store as a prop to Provider component.

// 4. So far we have managed to link the global store and components.

// 5. Lets add some magic ot the stores. (initialValues, Reducers)

// 5.1 Start creating slices - A new file, counter-slice.js
// 5.2 configure the slice - Tt takes an Object argument, you need to supply name, initialValue and reducers
// 5.3 export actions and reducers will be exported out of this.

// Bind the reducer to the store in store.js file.

// 6. Now, its time to play with components and link them to the store.
// 6.1 - Create a folder - call it may be redux.
// 6.2 - Copy the Name and Counter components into this folder
// 6.3 - Make sure its working by importing them into app.js

// 7. Make changes to your components (counter.js).

// 7.1 import useSelector, useDispatch from 'react-redux';
// 7.2 import the actions (increment, dec..) from 'counterSlice.js'

// 7.3 create a dispatch function const dispatch = useDispatch()
// 7.4 create a Selector  const counter = useSelector((state)=>state.counter);

// 7.5 Use counter to display.

// 7.6 to trigger actions, use {() => dispatch(increment())}
// 7.7 to trigger actions, use {() => dispatch(decrement())}

// Lets see how to get the name component to work.
// Repeat steps 7.1 to 7.7 but remember use name and setName (and not counter and increment/decrement)
