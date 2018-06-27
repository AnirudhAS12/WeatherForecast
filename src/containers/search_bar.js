import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component
{
    constructor(props){
        super(props);

        this.state ={city:'', country:''}
        this.onInputChange1=this.onInputChange1.bind(this);
        this.onInputChange2=this.onInputChange2.bind(this);
        
        this.onFormSubmit=this.onFormSubmit.bind(this);

    }

    onInputChange1 =(event)=>{
        this.setState({city : event.target.value});
        // console.log(event.target.value);
        

    }

    onInputChange2 =(event)=>{
        this.setState({country : event.target.value});
        // console.log(event.target.value);
        

    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.city,this.state.country);
        this.setState({city :''});
        this.setState({country:''});
    }
    render(){
        return(
            <div>
                <form style={{ width:'80%', marginLeft:'10%'}} onSubmit={this.onFormSubmit}>

                    <div className="row">

                        <div className="col-md-6" style={{width:'50%'}}>
                        <input 
                    className="form-control" 
                    value={this.state.city} 
                    placeholder="Enter the city name for a 5-day forecast"
                    onChange={this.onInputChange1} required/>
                        </div>
                    <div className="col-md-6" style={{width:'50%'}}>
                    <input 
                    className="form-control" 
                    value={this.state.country} 
                    placeholder="Enter the country code for a 5-day forecast"
                    onChange={this.onInputChange2} required/>
                        </div>
                    {/* <span className="input-group-btn"> */}
                        {/* <button className="btn btn-secondary" type="submit">Search</button> */}
                        {/* </span> */}
                    </div>
                    <button className="btn btn-secondary" type="submit" style={{marginTop:'1%', marginLeft:'91.5%'}}>Search</button>
                    
                    </form>        
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);;