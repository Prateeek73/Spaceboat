import React, { Component } from 'react'

export class Carousel extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          count: 0
        }
    }

    render() {
        return(
            this.props.images.map((obj,index) =>{
                let size = Object.keys(this.props.images).length;
                if(index===(this.state.count%size))
                    return(
                        <div className="slideCarousel" >
                            <div className="carousel">
                                <img src={obj.url} alt=":-)"/>
                                <section className="slideContent">
                                    <h1>{this.props.bannerHeading}</h1>
                                    <p>
                                       {this.props.bannerContentLine1}
                                       <br/>
                                       {this.props.bannerContentLine2}
                                       <br/>
                                       {this.props.bannerContentLine3}
                                    </p>
                                </section>
                            </div>
                        </div>
                    )
            })
        )
    }

    // setInterval
    // clearInterval
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

export default Carousel