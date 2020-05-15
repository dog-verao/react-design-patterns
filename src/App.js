import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
//import { EnhancedHello } from './Hello';
//import { List } from './HOC/List';
//import List from './RenderProps/List';
//import List from './ClassContextApi/List';
//import List from './FunctionalContextApi/List';
import List from './CompoundComponent/List';

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
