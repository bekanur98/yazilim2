import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  function changeLang(lang = 'ky'){
    i18n.changeLanguage(lang)
  }


  return (
    <div className="App">
      <header className="App-header">

        <button onClick={()=>changeLang('ky')}>KG</button>
        <button onClick={()=>changeLang('ru')}>RU</button>
        <button onClick={()=>changeLang('tr')}>TR</button>
        <button onClick={()=>changeLang('en')}>EN</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{t('hello')}</p>
      </header>
    </div>
  );
}

export default App;
