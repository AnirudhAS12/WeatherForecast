import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart =(props)=>{
    return(
        <Sparklines style={{height:'120',width:'180'}} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
        </Sparklines>
    )
}

export default Chart;