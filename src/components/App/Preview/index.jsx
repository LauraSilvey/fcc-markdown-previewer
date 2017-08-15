import React from 'react';

// const Preview = (props) => {
//   return (
//     <div id="preview">
//       <p>{this.props.input}</p>
//     </div>
//   )
// };

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="preview">
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default Preview;

