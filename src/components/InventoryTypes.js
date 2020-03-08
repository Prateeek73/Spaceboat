import React, { Component } from 'react'
import InventoryTypesItems from './InventoryTypesItems'
import  AC from './raw/AC.jpg';
import  BC from './raw/BC.jpg';
import  CC from './raw/CC.jpg';
import  DC from './raw/DC.jpg';
import  AA from './raw/AA.jpg';
import  BA from './raw/BA.jpg';
import  CA from './raw/CA.jpg';
import  DA from './raw/DA.jpg';
import  AE from './raw/AE.jpg';
import  BE from './raw/BE.jpg';
import  CE from './raw/CE.jpg';
import  AAD from './raw/AAD.jpg';
import  AAO from './raw/AAO.jpg';


export class InventoryTypes extends Component {

    constructor (props) {
        super(props)
        this.state = {
          testiClassroom : [
                {id:'0',img:AC,title:'Classroom - Professional',capacity:'Capacity: 10 - 30 people',rent:'Rent starting at ₹ 15000 /month'},
                {id:'1',img:BC,title:'Classroom - Flipboard',capacity:'Capacity: 10 - 80 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'2',img:CC,title:'Classroom - Regular',capacity:'Capacity: 10 - 30 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'3',img:DC,title:'Classroom - Junior',capacity:'Capacity: 10 - 20 people',rent:'Rent starting at ₹ 10000 /month'}
            ],
        testiActivity : [
                {id:'0',img:AA,title:'Activity - Regular',capacity:'Capacity: 10 - 20 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'1',img:BA,title:'Activity - MultiPurpose',capacity:'Capacity: 10 - 20 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'2',img:CA,title:'Activity - Dance',capacity:'Capacity: 10 - 20 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'3',img:DA,title:'Activity - Playarea',capacity:'Capacity: Not Applicable',rent:'Rent starting at ₹ 10000 /month'}
            ],
        testiEvent : [
                {id:'0',img:AE,title:'Event - Amphitheatre',capacity:'Capacity: 50 - 100 people',rent:'Rent starting at ₹ 5000 /month'},
                {id:'1',img:BE,title:'Activity - Auditoium',capacity:'Capacity: 100 - 500 people',rent:'Rent starting at ₹ 10000 /month'},
                {id:'2',img:CE,title:'Activity - Seminar',capacity:'Capacity: 30 - 150 people',rent:'Rent starting at ₹ 5000 /month'}
            ],
          testiAdmin : [
                {id:'1',img:AAD,title:'Admin - Counselling Room',capacity:'Capacity: 3 - 5 people',rent:'Rent starting at ₹ 5000 /month'},
                {id:'2',img:AAO,title:'Admin - Office',capacity:'Capacity: 1 - 10 people',rent:'Rent starting at ₹ 5000 /month'}
            ]
        }
    }

    render() {
        return (
            <div className="InviBigContainer">
                <h1 className="headh">Inventory Types</h1>
                <p className="headp">You can rent the following classrooms and spaces across multiple locations</p>
                <div className="InviContainer">
                    <div className="InviStart"/>
                    <div className="InviMain">
                        <div className="InviMainItem">
                            <div className="InviMainItemConatiner">
                                <h1>Classroom</h1>
                                <InventoryTypesItems inventItem={this.state.testiClassroom} size={3}/>
                            </div>
                        </div>
                        <div className="InviMainItem">
                            <div className="InviMainItemConatiner">
                                <h1>Activity</h1>
                                <InventoryTypesItems inventItem={this.state.testiActivity} size={3}/>
                            </div>
                        </div>
                        <div className="InviMainItem">
                            <div className="InviMainItemConatiner">
                                <h1>Event</h1>
                                <InventoryTypesItems inventItem={this.state.testiEvent} size={2}/>
                            </div>
                        </div>
                        <div className="InviMainItem">
                            <div className="InviMainItemConatiner">
                                <h1>Admin</h1>
                                <InventoryTypesItems inventItem={this.state.testiAdmin} size={1}/>
                            </div>
                        </div>  
                    </div>
                    <div className="InviEnd"/>                
                </div>  
            </div>
        )
    }
}

export default InventoryTypes
