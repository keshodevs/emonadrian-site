import React, {useState} from 'react'
import './skills.css'
//import profile from '../pictures/profile.png'
//import reactjs from '../pictures/reactjs.jpg'
//import python from '../pictures/python.jpg'
//import code from '../pictures/code.jpg'
import {info} from '../data'

const Skills = () => {
    const [myInfo, SetmyInfo] = useState(info)
    const [readmore, setReadMore] = useState(true)
    console.log(myInfo)



    const Cardp ={
        color: "red"
    }


   return (
        <div className='Backet'>
        {info.map((item, id)=>(
            <div className='Card-One' key={id}>
                <div className='imgBx'>
                    <img src={item.img} alt=''/>
                </div>
                <div className='content-One'>
                    <h1 style={Cardp}>{item.title}</h1>
                    <p>{item.notes}</p>
                    <button> Read More</button>
                </div>
        </div>
             ))}
            
            </div>   
      )
} 


export default Skills
