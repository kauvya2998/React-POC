import React from 'react';
import './App.css';
import Welcome from '../src/components/Welcome'
import Parent from '../src/components/Parent'

export const CopyRightsContext = React.createContext()

function App() {
  return (
    <div className="App">
      
      <Parent>
      <CopyRightsContext.Provider value={'CC @ Kauvya Krishna Kumar'}>
      <Welcome name="The World of Books"  />
      </CopyRightsContext.Provider>
      </Parent>
      
    </div>
  );
}

export default App;
