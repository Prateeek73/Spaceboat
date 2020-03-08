import React, { Component } from 'react'

export class WorkSteps extends Component {
    render() {
        return (
            <div  className="WorkStep">
                <div  className="Work">
                    <h1 className="headh">Work and Life Code</h1>
                    <p className="headp">What are the work timings? What is our view on ‘work from home’? Can you go on a mid-day date in-between a workdays?<br/>To know more, read our 'Work and Life Code'</p>
                    <center>
                        <a href="http://bit.ly/2xMoLWI" target="blank">
                            <button className="btnWUU">Click Here</button>
                        </a>
                    </center>
                </div>
                <div  className="Step">
                    <h1 className="headh">Next Steps</h1>
                    <ul className="centerSectionSub">
                        <li className="gap"></li>
                        <li className="sectionList">
                            <h1>01</h1>
                            <p>Read SpaceBoat Work and Life Code</p>
                        </li>
                        <li className="sectionList">
                            <h1>02</h1>
                            <p>Apply to SpaceBoat</p>
                        </li>
                        <li className="sectionList">
                            <h1>03</h1>
                            <p>Recruitment Process</p>
                        </li>
                        <li className="gap"></li>
                    </ul>
                    <br/>
                    <center>
                        <a href=" http://bit.ly/2xMoLWI">
                            <button className="btnWUU" target="blank">WORK AND LIFE CODE</button>
                        </a>
                        &nbsp; &nbsp;
                        <a href="http://bit.ly/2yUcqkb">
                            <button className="btnWUU" target="blank">APPLY NOW</button>
                        </a>
                    </center>
                </div>
            </div>
        )
    }
}

export default WorkSteps
