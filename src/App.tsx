import './App.css';
import { useState } from 'react';

import SocialIconsBar from './SocialIconsBar';
import ImageContainer from './ImageContainer';

import car_engine from './resources/engine.jpg';
import on_trailer from './resources/on_trailer.jpg';
import forward_interior from './resources/forward_interior.jpg';
import final_cage from './resources/final_cage.jpg';
import low_angle from './resources/low_angle.jpg';
import driver_in_car from './resources/driver_in_car.jpg';
import side_profile from './resources/side_profile.jpg';
import whole_team from './resources/whole_team.jpg';

import close_up_bez from './resources/close_up_bez.jpg';
import wide_angle_bez from './resources/wide_angle_bez.jpg';

import valve_cover_video from './resources/valve_cover_timelapse.mp4'



function App() {
  const [viewLemons, setViewLemons] = useState(true);
  return (
    <body>
    <div className="App">
      
      <h1>Hello I'm Walter Tebbetts, it's nice to meet you &#128075;.</h1>
      <SocialIconsBar/>
      <h2>About me:</h2>
      <p className='about_me'>I am currently a junior at the University of Massachusetts Amherst, where I am earning a BS in computer engineering.
        I am especially interested in low level systems programming, embedded systems, and web development! Check out some of my projects
        and past experiences below.
      </p>


      <div className="projects_section">
        <h2>My Projects:</h2>
        
          
              <h3 onClick={() => setViewLemons(!viewLemons)}>24hrs of Lemons Race Car 🏎️</h3>
            {viewLemons && 
            <div className='project_container'>
              <p>
              In the summer of 2022 some friends and I decided to join the budget racing series, 
              the <a href="https://24hoursoflemons.com/">24hrs of Lemons</a>. The 24hrs of Lemons 
              is racing series where you are not allowed to spend more than $500 upgrading and modifying your car!
              </p>
              <p>
              However, you are allowed an unlimited budget for safety, with safety being very important, and heavily 
              scrutinized.
              </p>
              <p>
              After learning about the racing series in early 2020, I began the hunt for a dirt cheap potential racecar. 
              In late December 2020 I stumbled uppon a 2002 Volkswagen Jetta being sold for $900. After some shrewd negotiation
              I bought the vehicle for $500, transporting it home on a flat bed.
              </p>

              
              <ImageContainer
              source={car_engine}
              altText='The race car before any safety gear was added.'
              title='The race car before any safety gear was added'
              />
              
              <ImageContainer
              source={on_trailer}
              altText='The race car on a trailer being towed by a yellow box truck.'
              title='The car leaving for the racetrack.'
              />

              <p>
              After getting the car back to my garage, we realized that a lot of work was going to be needed to make
              the car safe, and reliable enough for the track. First this meant a full teardown, removing the entire interior,
              as well as replacing the head gasket and all 6 spark plugs.

              </p>

              <video autoPlay loop>
                <source src={valve_cover_video} type='video/mp4'/>
              </video>

              <p>
              With the car in full working order, I turned my attention to safety. The 24hrs of Lemons requires a full 6 pointed 
              steel rollcage, along with many other safety features. We ordered the roll cage as series of pre bent tubes, requiring us to 
              cut and weld the pieces to fit in our car. Additional safety features included a one piece flame resistant racing seat, 
              along with a 10lb fire supression system with nozzels in the interior as well as the engine bay.
              </p>


              <ImageContainer
              source={forward_interior}
              altText='A car interior with all carpet, and dashboard compents stripped out, along with a fire exstinguisher.'
              title='The firesuppression system installed under the dashboard.'
              />

              <ImageContainer
              source={final_cage}
              altText='Looking from the rear passanger door forward, a 6 pointed steel cage has been welded into the interior of the car.'
              title='The fully constructed roll cage, including supporting gusset plates.'
              />
              
              <p>
                Altogether, from purchasing the car to getting it in race ready form took me and my 3 friends about 2 years. Work 
                would take place during school breaks, on weekends, and after work. Throughout the project I taught myself to weld, as 
                well as a vast amount of general mechanical knowledge. 
              </p>

              <p>
                One of the biggest challenges we faced was installing an electronic kill switch. As part of the safety requirements, an
                electronic kill switch must be installed, that when activated will shut down the engine and break the main electronic circuit within
                the car. After a couple of failed attempts we discovered that interupting power to the engine control unit (ECU) relay was the best way to 
                effectively kill the engine and disconnect the electric system.
              </p>
              
              <p>
                In early August 2023 the race car was packed up and brought to Thompson Speedway in Thompson Connecticut for the 
                24hrs of Lemons <a href="https://24hoursoflemons.com/race-2/?id=386">GP du Lac Chargoggagogg</a>. 
              </p>

              
              <ImageContainer
              source={low_angle}
              alt='Low angle shot of the race car about to head out on track, hood is up.'
              title='The car in full race trim, with number and decorative spoiler.'
              />
              
              <ImageContainer 
              source={driver_in_car} 
              altText='A fully suited up driver in the car, while two others stand outside assisting.'
              title='One driver gets situated in the car, as other help him get his bearings and adjust mirrors.'
              />

              <p>
                The race took place over two days, with 12 hours of racing on the first day, and 6 hours of racing on the second day. The 
                car ran great for 8 hours on the first day, allowing every member of our team to get at lead 45 mins behind the wheel out on track.
                Unfortunately, around 2 pm the radiator fan sliced open a rubber coolant line, dumping water onto the track and causing the engine to overheat.
                This overheating lead to a blow headgasket and our race was over.
              </p>

              <p>
                However unfortunate the early retirement was, I was still super proud of what me and my teammates had accomplished. From finding out about
                Lemons in late 2020 to finally racing in 2022 had been a long and difficult journey. We all had learned a ton. I specifically learned a ton 
                about automotive electrics, internal compbustion engines, metallurgy, and the iterative design process. We all walked away far more knowledgable 
                than when we started the project, and we were all incredibly proud of what we accomplished.
              </p>

              <ImageContainer
              source={side_profile}
              altText='Image of race car side profile.'
              title='The race car coming in after testing laps.'
              />

              <ImageContainer
              source={whole_team}
              altText='All 5 members of the race team infront of the car'
              title='Team photo.'
              />


            </div>}
            
            <br/>
            <div>
              <h3>BreathalyEZ 🛜 </h3>
              <p>
                Originally created as a hackathon project during <a href='https://hackumass.com/'>HackUMass XI</a> in October of 2023, 
                BreathlyEZ is a wifi enabled breathalyzer. A last minute creation with my friend
                <a href='https://github.com/Sinjiner'> Ashton P</a>, the original version of BreathlyEZ was created in 14 hours.
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

              <p>
                The BreathlyEZ consists of 4 main components: the MQ3 alcohol gas sensor, an Arduino UNO, a Raspberry Pi, and a React.js website.
                The MQ3 alcohol gas sensor is able to detect the PPM of alcohol in a sample of air blown over it's ceramic heated resistor.
                The Arduino UNO was used exclusively for analog to digital conversion (ADC), sending that value to the Raspberry Pi via serial port.
                The Raspberry Pi performed the necessary calculations to convert PPM to blood alcohol content (BAC), this was value could then be obtained
                by querying the web server being hosted on the Raspberry Pi.
                Finally the React.js website was were the latest sample BAC was displayed, as well as a button to trigger a new sample collection.
              </p>

              <p>
                BreathlyEZ is an ongoing project, make sure to check out its <a href='https://github.com/WaltTeb/BreathalyEZ'>GitHub repo</a> for updates
                on the project!
              </p>

            </div>
          
        
      </div>

      <SocialIconsBar/>
    </div>
    </body>
  );
}

export default App;
