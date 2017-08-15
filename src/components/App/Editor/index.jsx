import React from 'react';

// const Editor = (props) => {
//   return (
//     <div className="editor">
//       <textarea 
//         value={this.props.input} 
//         onChange={this.props.handleInput}
//         id="editor" />
//     </div>
//   )
// };

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor">
        <textarea 
          value={this.props.input} 
          onChange={this.props.handleInput}
          id="editor" />
      </div>
    );
  }

}

export default Editor;