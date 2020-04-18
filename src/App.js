import React from 'react';
import appcss from './css/App.module.css';
import Header from './Header/Header';
import CategoryContainer from './Catagory/CategoryContainer';


function App() {
  return (
    <div className={appcss.App}>

      <Header />
      <CategoryContainer />
    </div>
  );
}

export default App;
