import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Tabletop from 'tabletop'
import Grid from './components/Grid'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import WhyUseUs from './components/WhyUseUs'
import WorkSteps from './components/WorkSteps'
import ModesOfEngagement from './components/ModesOfEngagement'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Look from './components/Look'
import InventoryTypes from './components/InventoryTypes'
import { FaLocationArrow } from 'react-icons/fa';
import './App.css'


export class App extends Component {

  state ={
    links : [
      { label: '9811683092', link: 'https://api.whatsapp.com/send?phone=919811683092&text&source&data&lang=en', },
      { label: 'Blog', link: 'https://blog.spaceboat.in/' },
      { label: 'Case Studies', link: '#case-Studies' },
      { label: 'Carrers', link: '/career' },
      { label: 'Pricing Plans', link: '#pricing-plans' },
      { label: 'Space Providers', link: '#space-providers' },
      { label: 'Request Quote', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc5V3eG3yBV8qjtnHBkub7xHlhq2SN5F0vKAbBg2PgfKbUzOQ/viewform', },
    ],

    images :[],
    faq:[]
  } 
  componentDidMount(){
    Tabletop.init({
      key:'1GLdMtnJrWUejr-QiXvbjRLTG55CO7RVOXJAcGWZV-Zw',
      callback:googleData =>{
        this.setState({
          images:googleData
        })
      },
      simpleSheet:true
    })
    Tabletop.init({
      key:'1FESf_Ikp8n0CrXviZKtLt0gKv-ZedhaKh8IfT4j9H8s',
      callback:googleData =>{
        this.setState({
          faq:googleData
        })
      },
      simpleSheet:true
    })
  }
  
  
  render() {
    return (
      <Router>
        <div className="container">
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links}/>
                <Carousel images={this.state.images} bannerHeading="Helping Educators Grow" bannerContentLine1="Ready to use classrooms for rent at multiple locations in Delhi NCR" bannerContentLine2="Start batches quickly. Reach more students." bannerContentLine3="Pay only for the batch hours that you use."/>
                <button type="button" className="BRbutton"><p>CONTACT US <FaLocationArrow /></p></button>
                <Grid/> 
                <InventoryTypes />
                <HowItWorks/>
                <Faq faqs={this.state.faq}/>
                <Testimonials />
                <Footer />
              </React.Fragment>
            )} />
            <Route exact path="/partner" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links}/>
                <Carousel images={this.state.images} bannerHeading="Helping Educators Grow" bannerContentLine1="Learn what it takes to get a startup off the ground." bannerContentLine2="Earn extra income." bannerContentLine3="Upgrade your infrastructure."/>
                <button type="button" className="BRbutton"><p>CONTACT US <FaLocationArrow /></p></button>
                <WhyUseUs />
                <HowItWorks/>
                <Faq faqs={this.state.faq}/>
                <Footer/>
              </React.Fragment>
            )} />
            <Route exact path="/career" render={props =>(
              <React.Fragment>
                <Navbar links={this.state.links}/>
                <Carousel images={this.state.images} bannerHeading="Join the Team" bannerContentLine1="Learn what it takes to get a startup off the ground." bannerContentLine2="Work with us to solve an exciting problem (or two)!" bannerContentLine3/>
                <button type="button" className="BRbutton"><p>CONTACT US <FaLocationArrow /></p></button>
                <Team />
                <ModesOfEngagement />
                <Look />
                <WorkSteps />
                <Faq faqs={this.state.faq}/>>
                <Footer/>
              </React.Fragment>
            )} />
        </div>
      </Router>
    );
  }
}

export default App