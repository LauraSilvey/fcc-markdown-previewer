import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor/index';
import Preview from './components/Preview/index';
import './style.css';


ReactDOM.render(
  <div>
    <Editor />
    <Preview />
  </div>,
  document.getElementById('root')
);


