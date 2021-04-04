import React from 'react'
//import mine from '../pictures/one.jpg'
//import Emon from './Emon.svg'
import Image from './image.svg'
import './styles.css'
const minecss = {
        /* My Pic */

position: 'absolute',
width: '468px',
height: '550px',
left: '770px',
top: '60px'


}

const Bigpic = () => {
    return (
        <div >
            <img className="big-pic" style={minecss} src={Image}/>
        </div>
    )
}

export default Bigpic;
