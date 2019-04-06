import React, { Fragment } from 'react';
import * as d3 from 'd3';

import Button from '@material-ui/core/Button'

class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            light: this.props.light,
            data : [12, 5, 4, 8, 9, 16, 23, 12, 12, 5, 2, 8, 9, 16, 23, 12, 1, 1, 1],
        }
        this.drawChart = this.drawChart.bind(this)
    }

    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawChart(){

        const node = this.node
        const dataMax = d3.max(this.state.data)
        const yScale = d3.scaleLinear()
        .domain([0, dataMax])
        .range([0, 50])
        
        d3.select(node)
            .selectAll('rect')
            .data(this.state.data)
            .enter()
            .append('rect')
   
        d3.select(node)
            .selectAll('rect')
            .data(this.state.data)
            .exit()
            .remove()
        
        d3.select(node)
            .selectAll('rect')
            .data(this.state.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => 50 - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)

            d3.select(node)
            .selectAll("rect")
            .append("svg:title")
                .text(function(d) {return "Value: " + d})




        //TODO: EXTENT FUNCTION TO GET MIN MAX VALUES
    }
    
    handleRandomData = () => {
        let min     = 1;
        let max     = 75;
        let newData = new Array();
        for (let i = 0; i < this.state.data.length; ++i){

            newData.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        this.setState(state => ({data: newData}));
    }
    

    render() {
        return(
            <Fragment>
                <svg ref={node => this.node = node} width={550} height={470} >
                
                </svg>
                
                <Button onClick={this.handleRandomData}> Hello</Button>
            </Fragment>

        ) 
    }
}

export default SortD3;