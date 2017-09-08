import React from 'react'
import '../../../stylesheets/components/_editor.scss'

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