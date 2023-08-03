import React from 'react';
import './Home.css';
const Home = () => {

    const dummyData = [{
        
            date : "JULY16",
            tourPlace : "DETROIT, MI",
            tourSpecPlace : "DTE ENERGY MUSIC THEATRE",
            buyBtn : "BUY TICKETS"

        },
        {
            date : "JULY19",
            tourPlace : "TORONTO,ON",
            tourSpecPlace : "DTE ENERGY MUSIC THEATRE",
            buyBtn : "BUY TICKETS"

        },
        {
            date : "JULY22",
            tourPlace : "BRISTOW, VA",
            tourSpecPlace : "JIGGY LUBE LIVE",
            buyBtn : "BUY TICKETS"

        },
        {
            date : "JULY29",
            tourPlace : "PHOENIX, AZ",
            tourSpecPlace : "AK-CHIN PAVILION",
            buyBtn : "BUY TICKETS"

        },
        {
            date : "JULY2",
            tourPlace : "LAS VEGAS, NV",
            tourSpecPlace : "T-MOBILE ARENA",
            buyBtn : "BUY TICKETS"

        },

        {
            date : "JULY7",
            tourPlace : "CONCORD, CA",
            tourSpecPlace : " CONCORD PAVILION",
            buyBtn : "BUY TICKETS"

        },

    ]

    const Data= dummyData.map((data,index) =>{
        return (
        <div key ={index} className = "tour" style={{borderBottom : "1px solid black" ,padding : "1rem",width : '60%',margin:"auto"}}>
            <div className='styling'>
            <span style={{width:'30%'}}>
            {data.date}
            </span>
            <span style={{width:'30%'}}>{data.tourPlace}</span>
            <span style={{width:'30%'}}>{data.tourSpecPlace}</span>
            </div>
            <span className='button'>{data.buyBtn}</span>  
        </div>)
    })

  return (
    <div className='home-container'>
    <header className='header'>
    
    <div className='generics'>The Generics</div>
    <div className='album'>Get Our Latest Album</div>
    <div className='play'>►</div>
    
     
    </header>
    <h1 className='tour-style'>TOURS</h1>
    {Data}
   </div>
  )
}

export default Home;