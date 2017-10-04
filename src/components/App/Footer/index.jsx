import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-links">
        <a target="blank" href="https://github.com/LauraSilvey">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
        <a target="blank" href="https://codepen.io/lsilvey/">
          <i className="fa fa-codepen fa-lg" aria-hidden="true"></i>
        </a>
        <a target="blank" href="https://www.freecodecamp.com/laurasilvey">
          <i className="fa fa-free-code-camp fa-lg" aria-hidden="true"></i>
        </a>
      </div>
      <div className="signature">
        <p className="copyright">&copy; 2017, Laura Silvey. All rights reserved.</p>
      </div>
    </div>
 
  )
}

export default Footer