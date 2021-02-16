import React from 'react'

const mystyle = {
          /* meet */

position: 'absolute',
width: '231px',
height: '88px',
left: '100px',
top: '20px',

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '56px',
lineHeight: '112px',

color: '#000000'
  
  };
const name ={
       /* emonadrian */

position: 'absolute',
width: '559px',
height: '112px',
left: '96px',
top: '40px',

fontFamily: 'Kodchasan',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '96px',
lineHeight: '125px',

color: '#000000',


    
}
const sub ={
      /* Yo’ Junior Dev */

position: 'absolute',
width: '598px',
height: '312px',
left: '250px',
top: '110px',

fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '48px',
lineHeight: '72px',

color: '#000000'


}


const Fronttext = () => {
    return (
        <div className='Text-body'>
            <p style={mystyle}>meet</p>
            <div>
               <h3 style={name}>
                       emonadrian
                      </h3> 
                      <h6 style={sub}>
                         Yo’ Junior Dev </h6>
            </div>
        </div>
    )
}
   

export default Fronttext
