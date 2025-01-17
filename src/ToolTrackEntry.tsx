import { useState } from "react";

import ImageContainer from "./ImageContainer";

import TagFront from './resources/tag_front.jpg';
import TagBack from './resources/tag_back.jpg';
import AnchorPic from './resources/anchor_horizontalt.jpg'
import USBLoRa from './resources/usb_to_lora_model.jpg'
import SystemOverview from './resources/tool_track_system_overview.jpg'

function ToolTrackEntry(){
    const [viewToolTrack, setViewToolTrack] = useState(true);

    return (
        <>
        <h3 className={viewToolTrack ? 'project_expander': 'project_expander_active'} onClick={() => setViewToolTrack(!viewToolTrack)}>BareTag Tool Tracker</h3>

        <div className='project_preamble'>
            <h4>
                Building a Tool Tracking system that allows contractors and construction workers to track tools on and off the worksite, preventing
                theft, and saving time searching for lost equipment.
            </h4>

            <ul>
                <li>
                    <b>Team:</b> Me, <a href='https://www.linkedin.com/in/connor-mcgarry3/'>Connor McGarry</a>, <a href='https://www.linkedin.com/in/sean-raymond-brown/'>Sean Brown</a>,
                    and <a href='https://www.linkedin.com/in/ken-su-5723031a3/'>Ken Su</a>
                </li>
                <li>
                    <b>Skills:</b> C, Firmware Development, Real-Time Operating Systems (RTOS), Bluetooth Low Energy (BLE), Ultra Wideband (UWB), Python, SQL, iOS Development, 
                    System Design, PCB Design, Hardware Debugging, and much more.
                </li>
                <li>
                    <b>Impact:</b> Build a fully fledged prototype from scratch, while on a tight $500 budget. Learned valuable technical skills, as well as skills in project 
                    management, technical documentation, and professionalism.
                </li>
                <li>
                    <b>Demo Video:</b> Check out this <a href='https://youtu.be/01tySKju2MU'>YouTube Video Demo</a>.
                </li>
            </ul>

            <br/>

            <div className='project_container'>
                <p>
                    The BareTag Tool Tracking is my senior capstone project. Over the course of an academic year, we design, build, test, and present a fully
                    fledged electronic device of our own creation, competing against teams of fellow students.
                </p>

                <p>
                    Our project is a system that allows tools or other valuable items to be tracked on and off a construction site. The goal is to create a system
                    that prevents theft, a very common and costly problem in the construction industry, as well as improve efficiency on the jobsite. 
                </p>

                <p>
                    The central technology is Ultra Wideband (UWB) Radio. UWB is a radio technology that uses low energy radio pulses to transmit data. It is decent 
                    at transmitting data, ~1 gigabit per second, however, UWB is exceptionally good at distance ranging.
                </p>
                <p>
                    By sending UWB pulses from each of our Anchors to our Tag we can measure the distance from each Anchor to the Tag. This distance data is then transmitted
                    over Long Range (LoRa) radio to the base station. At the base station, all this distance information, along with the known starting location of each
                    Anchor can be run through a <b>trilateration</b> algorithm in order to calculate the Tag's current location.
                </p>

                <ImageContainer
                    source={SystemOverview}
                    altText='System overview diagram'
                    title='System overview'>
                </ImageContainer>
                
                <h4>The Tag:</h4>
                <p>
                    The Tag is a small, &lt; 1 in<sup>2</sup>, battery powered device that can be attached to any electric power tool or other important item on the jobsite.
                    The PCB just has the UWB, BLE, and MCU combo modulue on one side (the DWM3001C), and the programming header and associated debug LEDs on the back.
                </p>

                <ImageContainer
                    source={TagFront}
                    altText='Front of Tag PCB'
                    title='Front of Tag PCB, v1'>
                </ImageContainer>

                <ImageContainer
                    source={TagBack}
                    altText='Back of Tag PCB'
                    title='Back of Tag PCB ,v1'>
                </ImageContainer>

                <h4>The Anchor:</h4>
                <p>
                    The Anchor is a device that sends UWB pings to the Tag in order to get the range from the Anchor to the Tag at any given moment. With at least 3
                    Anchors set up, a Tag can be tracked in real time as it moves around the work site. Anchors have a range of up to 100 m, meaning with 4 Anchors,
                    the system can track items within a 10,000 m<sup>2</sup> area.
                </p>

                <ImageContainer
                    source={AnchorPic}
                    altText='Picture of Anchor PCB'
                    title='Anchor PCB, v1'>
                </ImageContainer>

                <h4>The Base Station</h4>
                <p>
                    Finally, there is the base station. This communicates with the Anchors in order to calculate the Tag's position at any given moment. The 
                    base station can be any computer with the appropriate USB to LoRa dongle attached to it running our backend software.
                </p>
                <ImageContainer
                    source={USBLoRa}
                    altText='3D model of USB to LoRa PCB'
                    title='3D model of USB to LoRa PCB'>    
                </ImageContainer>

                

                <p>
                    To see the system demoed check out this <a href='https://youtu.be/01tySKju2MU'>YouTube video</a>. (I am the one presenting)
                </p>

                <p>
                    Finally, if a Tag does leave the construction site, first the Tag's owner will receive a notification that the device has left the job site (likely being stolen).
                    Next, the Tag switches off its UWB radio and turns on its Bluetooth Low Energy (BLE), joining the Apple Find My network. Using the 
                    open source project <a href='https://github.com/seemoo-lab/openhaystack'>OpenHaystack</a>, we can register any generic BLE device to the Apple Find My 
                    network, allowing tools to continue to be tracked after they leave the jobsite.
                </p>

                <p>
                    The BareTag Tool Tracker is an ongoing project, so make sure to check out the <a href='https://github.com/WaltTeb/BareTag_Tool_Tracker'>GitHub repo</a> for the most up to date information on the project!
                </p>

            </div>

        </div>
        </>
    )
}

export default ToolTrackEntry;