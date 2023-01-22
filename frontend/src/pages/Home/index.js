import "./main.css"
import {motion} from "framer-motion"
import React, { useState } from "react"

export default function Home(){
  

const letsGo = "NYC".split("")
const [move, setMove] = useState(false)
    return (
        <div className="body">
            <div>
                <div className="header-intro">
                    <h4 className="signature">Stay Connected</h4>
                    <h1 className="header"><span>E</span>xplore <span>Y</span>our <span>C</span>ommunity</h1>
                    <button className="signup-link">Sign Up</button>
                    <motion.div 
                    animate={{x: 500, scale: 1}} 
                    initial={{x:-500,scale: 0.1}}
                    transition={{type: "tween", duration: 3 }}
                    >
                    <img src="https://i.imgur.com/lGsQmuS.png" alt="cab-icon"></img>
                    </motion.div>

                </div>
            </div>
    <div className="container-text-center">
        <div className="row">
            <div className="col-lg" id="item-one">
              <div className="item-one-info">Find mazing "Airbnb's" to host events in your town. Landlords and subleasing companies throughout the Country are always hosting homes in your community for people just like you to bring people together or just have a chill night with friends.  </div>
            </div>
            <div className="col-lg" id="item-two">
              <div className="item-two-info">
                <h3 className="item-two-h3">Galiotos in "Little Italy"
                Serving up "fresh Pressed Juice".</h3>
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-lg" id="item-4">
              <div className="item-four-info">
                <h3>"STK ROOFTOP"</h3>
                one of NYC's premier steak houses Downtown, overlooking the meat packing distric.
              </div>
              </div>
            <div className="col-lg" id="item-5">
              <div className="item-five-info"><h3>"Coney Island"</h3> Brooklyn's very own world renown amusement park & beach. </div>
            </div>
            <div className="col-lg" id="item-6">
              <div className="item-six-info">
                <h3>"Manhattan's Museum Of Art"</h3>

              </div>
            </div>
          </div>
        </div>
    </div>
    )
}