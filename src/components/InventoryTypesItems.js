import React, { Component } from 'react'

export class InventoryTypesItems extends Component {


    constructor (props) {
        super(props)
        this.state = {
            timer:0,
            count:0
        }
    }

    onClickLeft = (e) =>{ 
        if(this.state.count===0)
            this.setState({count:this.props.size})
        else
                this.setState(({count}) => ({count:(count-1)%4}))
    }
    onClickRight = (e) =>{ 
        if(this.state.count===this.props.size)
            this.setState({count:0})
        else
                this.setState(({count}) => ({count:(count+1)%4}))
    }
    handleInput = (e) =>{
        this.setState({count:parseInt(e.target.value)})
    }

    render() {


        let pagination = this.props.inventItem.map((obj, index) => {
            if(parseInt(obj.id)===this.state.count)
                return (
                    <li key={obj.id}>
                        {<button className="pageActive" value={obj.id} onClick={this.handleInput}>&#8226;</button>}
                    </li>
                );
            else
                return (
                    <li key={obj.id}>
                        {<button className="pageInactive" value={obj.id} onClick={this.handleInput}>&#8226;</button>}
                    </li>
                );
        });
        
        return(
            this.props.inventItem.map((obj,index) =>{
                if(index===(this.state.count))
                    return(
                        <div className="ITIgrid">
                            <img className="ITIgrida" src={obj.img}  alt=":-)"/>
                            <h3 className="ITIgrida">{obj.title}</h3>
                            <p className="ITIgrida">{obj.capacity}</p>
                            <h6 className="ITIgrida">{obj.rent}</h6>
                            <div className="navPager">
                                <button class="left" type="button" onClick={this.onClickLeft}>
                                    <img src="https://spaceboat.in/static/img/arr-left.png"   alt=":-)"/>
                                </button>
                                <ul className="paginationList">
                                    {pagination}
                                </ul>
                                <button class="right" type="button" onClick={this.onClickRight}>
                                <img src="https://spaceboat.in/static/img/arr-right.png"   alt=":-)"/>
                            </button>
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
            this.setState(({timer}) => ({
                timer:timer+1
            }))
        },1000/15)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}

export default InventoryTypesItems
