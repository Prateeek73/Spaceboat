import React, { Component } from 'react'
import  ashoka from './raw/ashoka.png';
import  dla from './raw/dla.png';
import  edushastra from './raw/edushastra.png';
import  toastmasters from './raw/toastmasters.png';

export class Testimonials extends Component {
    constructor (props) {
        super(props)
        this.state = {
          count: 0,
          testi : [
            { content: 'Accessible staff, flexibility in time slots and timely billing have made our meetings at these space hassle-free.', imgLink: toastmasters, redirectLink: 'https://www.toastmasters.org/',link:'Anubhav,Millennium Gurgaon Toastmasters Club'},
            { content: "I've had a very pleasant and positive ex1perience working with SpaceBoat. The team is great at understanding your requirements and providing options with a fast turnaround time. I had a requirement for a venue at very short notice, and the SpaceBoat team ensured we got what we required. On the days of the event, a member of the team was there to ensure everything ran smoothly. Will definitely use their services again when required!", imgLink: ashoka, redirectLink: 'https://www.ashoka.edu.in/',link:'Prerna Seth,Ashol University'},
            { content: "Stellar experience! I have been a happy user of Spaceboat's services for almost a year now. They are willing to be flexible and accommodate requirements.", imgLink: dla, redirectLink: 'https://www.delhilawacademy.com/',link:'Vivek Subraimaniyam, Delhi Law University'},
            { content: "This model gives flexibility and bandwidth to scale. We started with them two years back and it has been a successful journey.", imgLink: edushastra, redirectLink: 'https://www.edushastra.com/',link:'Vipul Parashar, Edushashtra'}
          ]
        }
    }
    render(){
        return (
            this.state.testi.map((obj,index) =>{
                if(index===(this.state.count%4))
                    return(
                        <div className="Tgrid" >
                            <h1 className="headh">Testimonials</h1>
                            <center>
                                <p className="Tcontent">
                                    {obj.content}
                                </p>
                                <img src={obj.imgLink} alt=":-)" />
                                <br/>
                                <a href={obj.redirectLink} target="blank">
                                    <i class="author">{obj.link}</i>
                                </a>
                            </center>
                        </div>
                    )
            })
            
        )
    }

    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(({count}) => ({
                count:count+1
            }))
        },5000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
}
}
export default Testimonials
