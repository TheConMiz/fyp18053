import React from 'react';
import * as d3 from 'd3';

import './SortD3.css'

class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            xScale: d3.scaleBand()
                .domain(d3.range(this.props.data.length))
                .range([0, this.props.width])
                .paddingInner(0.2),
        
            yScale: d3.scaleLinear()
                .domain([0, d3.max(this.props.data)])
                .range([10, this.props.height - 20]),
          };
    }

    // setInterval( function () {
    // this.bubbleSort(this.position, this.steps, data)

    // d3.select(this.chartRef.current).selectAll('rect')
    //         .data(this.props.data, (d) => d)
    //         //CSS
    //         .classed('active', (d, i) => i === this.position || i + 1 === this.position)
    //         .classed('completed', (d, i) => i >= this.props.data.length - this.steps)

    //         .transition()
    //         .duration(50)
            
    //         .attr('x', (d, i) => this.state.xScale(i));},     
    // /*DURATION*/ 50);        
    // d3.select(this.chartRef.current)

    //     position = 0;
    //     steps = 0;

    // bubbleSort = () => {
    //     if (this.position === this.props.data.length - 1 - this.steps) {
    //         this.position = 0;
    //         this.steps++;
    //     }
        
    //     if (this.steps >= this.data.length - 1) {       
    //         return;
    //     }
        
    //     if (this.props.data[this.position] > this.data[this.position + 1]) {
    //         [this.props.data[this.position], this.props.data[this.position + 1]] = [this.propsdata[this.position + 1], this.props.data[this.position]];            
    //     }
        
    //     this.position++;
    // }

    render() {
        return(
            <g className="barChart">
                {this.props.data.map((d, i) => (
                    <rect
                        x={this.state.xScale(i)}
                        y={this.props.height - this.state.yScale(d)}
                        width={this.state.xScale.bandwidth()}
                        height={this.state.yScale(d)}
                    />
                    
                ))}
            </g>
        ) 
    }
}

export default SortD3;