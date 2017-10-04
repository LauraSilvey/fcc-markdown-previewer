import React, { Component } from 'react'
import Editor from './Editor/index'
import Preview from './Preview/index'
import Footer from './Footer/index'
import '../../stylesheets/main.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      editorValue: event.target.value
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <header>
          <h1 className='title'>Markdown Previewer</h1>
        </header>
        <main className='main'>
          <section className='container'>
            <h1 className='title'>Editor</h1>
            <Editor input={this.state.editorValue} onChange={this.handleChange} />
          </section>
          <section className='container'>
            <h1 className='title'>Preview</h1>
            <Preview input={this.state.editorValue} />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }    
}


const placeholder = 
`# Header
## Sub Header
[I am a link](https://laurasilvey.github.io/FCC-personal-portfolio/)

Here is some inline code \`<div></div>\`

\`\`\`
  // and here is some multi-line code

  function example(num) {
    return num;
  } 
\`\`\`

1. This is a list
1. You can use whatever number you want 
1. The list will count on like normal
- You can even use dashes
* Or an asterisk if you'd like

> Use a greater than symbol 
> when you need a block quote

To make some text bold try using two **asterisks**

This app was made with:

![React Logo w/ Text](https://goo.gl/Umyytc)

`

export default App;
