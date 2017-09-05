import React from 'react';

const Editor = (props) => {
  return (
      <textarea
        id='editor' 
        value={props.input} 
        onChange={props.onChange} />
  );
}

export default Editor;