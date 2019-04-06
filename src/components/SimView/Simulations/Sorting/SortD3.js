import React, { Fragment } from 'react';
import * as d3 from 'd3';

import Button from '@material-ui/core/Button'

class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            light: this.props.light,
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

        const variableSpacing = Math.floor(this.props.width / this.props.data.length)
        //console.log(variableSpacing)
        const node = this.node
        const yScale = d3.scaleLinear()
        .domain([0, d3.max(this.props.data)])
        .range([0, this.props.height - 10])
        
        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
   
        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
        
        d3.select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', 'pink')
            .attr('x', (d,i) => i * variableSpacing)
            .attr('y', d => this.props.height - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)


            d3.select(node)
            .selectAll("rect")
            .append("svg:title")
                .text(function(d) {return "Value: " + d})

        //TODO: EXTENT FUNCTION TO GET MIN MAX VALUES
    }
    
    render() {
        return(
            <Fragment>
                <svg
                ref={node => this.node = node} 
                width={this.props.width} 
                height={this.props.height}/>
            </Fragment>

        ) 
    }
}

export default SortD3;