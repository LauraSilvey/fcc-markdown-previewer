import React from 'react';

const Editor = (props) => {
  return (
      <textarea 
        value={props.input} 
        onChange={props.handleInput}
        id="editor" />
  );
}

export default Editor;