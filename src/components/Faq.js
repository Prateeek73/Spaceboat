import React, { Component } from 'react'

export class Faq extends Component {


    constructor (props) {
        super(props)
        this.state = {
          value:true,
          timer:0
        }
    }
    onClick = (e) =>{
        this.setState({value:!this.state.value})
    }


    render() {

        let faqLists=this.props.faqs.map((faq,index) =>{ 
                if(this.state.value && index<5)  
                    return(
                            <li key={index}>
                                <div className="item">
                                <h3 className="question">+ {faq.question}</h3>
                                    <div className="answer">
                                        <p>{faq.answer}</p>
                                    </div>  
                                </div>
                            </li>
                    )
                else if(!this.state.value)
                    return(
                        <li key={index}>
                            <div className="item">
                            <h3 className="question">+ {faq.question}</h3>
                                <div className="answer">
                                    <p>{faq.answer}</p>
                                </div>  
                            </div>
                        </li>
                    )
        })
        return (
            <div className="FAQcontainer">
                <h1 className="headh">Frequently Asked Questions</h1>
                <br/>
                <br/>
                <div className="fcontainer">
                    <div className="startAccordion"/>
                    <ol className="accordion">
                            {faqLists}
                    </ol>
                    <div className="endAccordion"/>
                </div>
                <button type="button" className="collapsible" onClick={this.onClick}>&#9660;</button>
            </div>
        )
    }
    
    // setInterval
    // clearInterval
    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(({timer}) => ({
                timer:timer+1
            }))
        },5000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}
 
export default Faq