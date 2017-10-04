import React from 'react'


const Editor = (props) => {
  return (
      <textarea
        id='editor' 
        className='editor'
        value={props.input} 
        onChange={props.onChange} />
  )
}

export default Editor