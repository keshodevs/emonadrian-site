import React, {useState} from 'react'
import './skills.css'
import profile from '../pictures/profile.png'
import reactjs from '../pictures/reactjs.jpg'
import python from '../pictures/python.jpg'
import code from '../pictures/code.jpg'

const Skills = () => {
    
    const [readmore, setReadMore] = useState(true)

    const Cardp ={
        color: "red"
    }

    return (
        <div className='Backet'>
            <div className='Card-One'>
                <div className='imgBx'>
                    <img src={reactjs} alt=''/>
                </div>
                <div className='content-One'>
                    <h1 style={Cardp}>ReactJs</h1>
                    <p >I started working with Reactjs In June after learning basics of web development with HTML, CSS and Vanilla Javascript. I have literally worked with all React concepts: </p>
                    <li>JSX</li>
                    <li>React Hooks</li>
                    <li>JSX</li>
                    <li>JSX</li>
                    <button> Read More</button>
                </div>
            </div>
            <div className='Card-One'>
                <div className='imgBx'>
                    <img src={python} alt=''/>
                </div>
                <div className='content-One'>
                    <h1 style={Cardp}>Python</h1>
                    <p>In my persue to become a full stack Dev, I had earlier choosen python as my first backend language</p>
                    <p>I know a few basics of Python and I can't wait to carry on soon and learn django to improve my Web Dev skills</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className='Card-One'>
                <div className='imgBx'>
                    <img src={code} alt=''/>
                </div>
                <div className='content-One'>
                    <h1 style={Cardp}>Front-End</h1>
                    <p>My Goal is to become a bigtime Front-End. I'm ambitious ans believe the end of this year I will be a superstar. My favorite framework is reactjs and I'm working to learn at the core.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Skills
