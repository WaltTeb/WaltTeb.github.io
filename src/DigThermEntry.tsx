import { useState } from "react";

import ImageContainer from "./ImageContainer";

import thermometer_pic from './resources/thermometer_pic.jpeg';
import thermometer_vid from './resources/thermometer_video.mp4';
import thermometer_c_code from './resources/thermometer_c_code.jpg';


function DigThermEntry(){
    const [viewTherm, setViewTherm] = useState(false);

    return(
        <>
            <h3 className={viewTherm ? 'project_expander': 'project_expander_active'} onClick={() => setViewTherm(!viewTherm)}> Digital Thermometer 🌡️ </h3>  
            <div className="project_preamble">
                <p>
                    A digital thermometer build using the ATmega328P microntroller on an Arduino Uno to collect, parse, and display temperatures on a 
                    7-segment display in fahrenheit and celcius.
                </p>
                <ul>
                    <li>
                        <b>Team:</b> Me.
                    </li>
                    <li>
                        <b>Skills:</b> Electonics, Embedded Systems, and C programming.
                    </li>
                    <li>
                        <b>Impact:</b> Learned the fundamentals of embedded system programming. Specifically how to use analog to digital converters,
                        and control analog and digital pins on an embedded computer.
                    </li>
                </ul>

                <br/>
                <ImageContainer 
                source={thermometer_pic}
                altText='A 7-segment LED display connected to an Arduino UNO with ranbow jumper cables. A small solid state thermometer is plugged into the left
                side of the breadboard.'
                title='The digital thermometer'
                />
            </div>

            {viewTherm &&
            <div>
                The thermometer consisted of 3 main components: the temperature sensor, the 7-segment LED display, and the Arduino UNO.
                <ol>
                    <li>
                        The temperature sensor gave varying milivolt values depending on ambient temperature.
                    </li>
                    <li>
                        The 7-segment display was used to display the calculated temperature reading. Persistance of vision allowed 
                        the display to appear to show all 4 sections active.
                    </li>
                    <li>
                        The ATmega328P microntroller on the Arduino UNO collected analog voltage values from the temperature sensor,
                        and used a characteristic equation to obtain a temperature. The microntroller would then turn off and on the correct
                        display segments in order to display the current temperature. Additonally a button could be pressed to toggle the 
                        thermometer between fahrenheit and celcuis.
                    </li>
                </ol>
                
                <br/>
                <video id="therm_vid" autoPlay loop muted>
                    <source src={thermometer_vid} type='video/mp4'/>
                </video>

                <p>
                    The hardest part of the project was getting the 7-segment display to properly show each digital value.
                    This involved testing each of the 12 pins on the display to figure out which segment/digit on the display it controlled by each pin.
                    This information was used to turn on each digit for 5 miliseconds to display each number sequentially. Quickly switching between
                    each digit, keeping it illuminated for only 5 miliseconds will appear as if all 4 digits are on at the same time, leveraging <a href='https://en.wikipedia.org/wiki/Persistence_of_vision'>persistance of vision</a>.
                </p>
                <ImageContainer 
                source={thermometer_c_code}
                altText='C code to display numbers on the 7-segment display.'
                title='Some of the C code for controlling the 7-segment display'
                />

                <p>
                    Altogether this project was one of my first experiences combining circuity and software, sparking my interest in embedded systems!
                </p>
            </div>
            }
            <p className='show_select' onClick={() => setViewTherm(!viewTherm)}>{viewTherm ? 'Show Less...':'Show More...'}</p>

        </>
    )
}

export default DigThermEntry;