import { useState } from "react";
import ImageContainer from "./ImageContainer";
import close_up_bez from './resources/close_up_bez.jpg';
import wide_angle_bez from './resources/wide_angle_bez.jpg';

function BEZEntry(){
    const [viewBEZ, setViewBEZ] = useState(true);

    return(
        <>
        <div className='project_entry'>
        <h2 id='project_name' onClick={() => setViewBEZ(!viewBEZ)} className={viewBEZ ? 'project_expander': 'project_expander_active'}>BreathalyEZ 🛜 </h2>
              
        <div className='project_preamble'>
        <ul>
          <li>
            <b>Team:</b> <a href='https://www.linkedin.com/in/ashton-perkinson-325339253/'>Ashton Perkinson</a> and I.
          </li>
          <li>
            <b>Skills:</b> Embedded Systems, TypeScript, Python (Flask), Circuit Design, and Linux.
          </li>
          <li>
            <b>Impact:</b> Integrating multiple different devices with an effective system design. Improved my skills in using GitHub to collaborate 
            and share code. Practiced fundamentals of embedded system design, specifically analog circuits, analog to digital conversion,
            and computer networking.
          </li>
          </ul>
        


        
        
        <p>
          Originally created as a hackathon project during <a href='https://hackumass.com/'>HackUMass XI</a> in October of 2023, 
          BreathlyEZ is a wifi enabled breathalyzer. A last minute creation with my friend <a href='https://github.com/Sinjiner'>Ashton P</a>, 
          the original version of BreathlyEZ was created in 14 hours.
        </p>

        <ImageContainer
        source={wide_angle_bez}
        altText='Wide angle shot of a laptop, some electronics, and a bottle of mouthwash.'
        title='The original BreathlyEZ.'
        />

        <ImageContainer
        source={close_up_bez}
        altText='Close up shot of an Arduino UNO, Raspberry Pi, and a breadbroad, all connected with jumper wires.'
        title="BreathlyEZ's electronics." 
        />
        </div>
        {viewBEZ && <div className='project_container'>
        
          The BreathlyEZ consists of 4 main components: the MQ3 alcohol gas sensor, an Arduino UNO, a Raspberry Pi, and a React.js website.
          <ol>
          <li>The MQ3 alcohol gas sensor is able to detect the PPM of alcohol in a sample of air blown over it's ceramic heated resistor.</li>
          <li>The Arduino UNO was used exclusively for analog to digital conversion (ADC), sending that value to the Raspberry Pi via serial port.</li>
          <li>The Raspberry Pi performed the necessary calculations to convert PPM to blood alcohol content (BAC), this was value could then be obtained
          by querying the web server being hosted on the Raspberry Pi.</li>
          <li>Finally the React.js website displays the latest sample BAC, as well as a button to trigger a new sample collection.</li>
          </ol>
        

        <p>
          BreathlyEZ is an ongoing project, make sure to check out its <a href='https://github.com/WaltTeb/BreathalyEZ'>GitHub repo</a> for updates
          on the project!
        </p>
        </div>}

        <p className='show_select' onClick={() => setViewBEZ(!viewBEZ)}>{viewBEZ ? 'Show Less...':'Show More...'}</p>
        </div>
        </>
    )
}

export default BEZEntry;