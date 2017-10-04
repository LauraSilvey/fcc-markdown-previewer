import React from 'react'
import marked from 'marked'


const Preview = (props) => {
  return (
    <div
      className='preview' 
      id='preview'
      dangerouslySetInnerHTML={{__html: marked(props.input)}} /> 
  );
}

export default Preview;

