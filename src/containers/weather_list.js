import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from './chart';
class WeatherList extends Component
{
    constructor(props){
        super(props);
    }

    renderList = (cityData) =>{
         const id=cityData.city.id;
        const name=cityData.city.name;
        const country = cityData.city.country;
        const temps=cityData.list.map(weather => weather.main.temp);
        const pres=cityData.list.map(weather => weather.main.pressure);

        const humi=cityData.list.map(weather => weather.main.humidity);
        
        console.log(temps);
        return(
            <tr key={id} style={{color:'white'}}>
                <td>
                    {name},{country}
                    </td>
                    <td>
                     <Chart data={temps} color='red' />
                        </td>
                        <td>
                        <Chart data={pres} color='green'/>
                        </td>
                        <td>
                        <Chart data={humi} color='blue' />
                            </td>
                        
            </tr>)
        
    }
    
    render(){
        return(
            <div>

<table className="table table-hover table-responsive" style={{marginLeft:'10%',color:'white'}}>
  <thead>
    <tr>
      <th style={{color:'white'}}>City</th>
      <th style={{color:'white'}}>Tempertaure</th>
      <th style={{color:'white'}}>Pressure</th>
      <th style={{color:'white'}}>Humidity</th>
    </tr>
  </thead>
  <tbody>
   {this.props.weather.map(this.renderList)}
  </tbody>
</table>

                </div>
        )
    }
}

function mapStateToProps(state){
    return{weather : state.weather};
}
export default connect(mapStateToProps)(WeatherList);