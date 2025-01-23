import './App.css';


import SocialIconsBar from './SocialIconsBar';

import BEZEntry from './BEZEntry';
import LemonsEntry from './LemonsEntry';
import ToolTrackEntry from './ToolTrackEntry';




function App() {
 

  return (
    <body>
      <div className="App">
        
        <h1>Hello I'm Walter Tebbetts, it's nice to meet you &#128075;.</h1>

        <SocialIconsBar/>
        <div className='item_divider'></div>

        <h2 className='about_me_label'>About me:</h2>
        
        <ul className="about_me">
          <li>Current Senior at <a href="https://www.umass.edu/engineering/">University of Massachusetts Amherst.</a></li>
          <li>Getting a BS in Computer Engineering.</li>
          <li>Working in the <a href="https://groups.cs.umass.edu/ahha/">Advanced Human Health Analytics Laboratory</a>, building low-power 
          wearable sensors to help monitor stroke survivors during recovery.</li>
          <li>Actively searching for new grad postions starting summer 2025.</li>
          <li>Especially interested in low-power computing, system software, and aerospace electronics.</li>
        </ul>

        <div className="projects_section">
        <div className='item_divider'></div>
          <h2 className='project_section_label'>My Projects:</h2>
          
            <ol className='projects_list'>
            
              <li className='project_list_item'>
                <ToolTrackEntry/>
              </li>

              <div className='item_divider'></div>
              <li className='project_list_item'>
                <LemonsEntry/>
              </li>

              <div className='item_divider'></div>              
              <li className='project_list_item'>
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
