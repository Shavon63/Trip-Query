import "./main.css"
import {motion} from "framer-motion"
import React, { useState } from "react"

export default function Home(){
  

const letsGo = "NYC".split("")
const [move, setMove] = useState(false)
    return (
        <div>
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
    <div className="col-lg" id="item-one">col-sm</div>
    <div className="col-lg">col-sm</div>
  </div>
  <div className="row">
    <div className="col-lg">col-sm</div>
    <div className="col-lg">col-sm</div>
    <div className="col-lg">col-sm</div>
  </div>
</div>
        </div>
    )
}