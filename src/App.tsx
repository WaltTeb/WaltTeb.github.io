import './App.css';
import { useState } from 'react';

import SocialIconsBar from './SocialIconsBar';

import BEZEntry from './BEZEntry';
import LemonsEntry from './LemonsEntry';

import logo from './logo.svg'





function App() {
  const [viewLemons, setViewLemons] = useState(false);
  // const [viewBEZ, setViewBEZ] = useState(false);

  return (
    <body>
      <div className="App">
        
        <h1>Hello I'm Walter Tebbetts, it's nice to meet you &#128075;.</h1>

        <SocialIconsBar/>

        <h2>About me:</h2>
        
        <p className='about_me'>
          I am currently a junior at the University of Massachusetts Amherst, where I am earning a BS in computer engineering and 
          a BA in Computer Science.
          I am especially interested in low level systems programming, embedded systems, and web development! Check out some of my projects
          below.
        </p>


        <div className="projects_section">
          <h2>My Projects:</h2>
          
            <ol>
              <li>
                <LemonsEntry/>
              </li>

              <br/>
              <li>
                <BEZEntry/>
              </li>

              </ol>
            
        </div>

        <SocialIconsBar/>

      </div>
    </body>
  );
}

export default App;
