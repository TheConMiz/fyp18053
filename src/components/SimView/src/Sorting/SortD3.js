import React from 'react';
import * as d3 from 'd3';

import './SortD3.css'

class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            widthScale: d3
              .scaleBand()
              .domain(d3.range(0, this.props.data.length))
              .range([0, this.props.width]),
        
            heightScale: d3
              .scaleLinear()
              .domain([0, d3.max(this.props.data)])
              .range([0, this.props.height])
          };
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         light: this.props.light,
    //     }
    //     this.drawChart = this.drawChart.bind(this)
    // }

    drawChart(){
        //THIS PART INITIALISES THE D3 chart
        // const data = d3.range(30).reverse()
        // const node = this.node;
        // const variableSpacing = Math.floor(this.props.width / this.props.data.length);

        // let position = 0;
        // let step = 0;

        // const xScale = d3.scaleBand()
        //     .domain(d3.range(data.length))
        //     .range([50, this.props.width])
        //     .paddingInner(0.1);

        // const yScale = d3.scaleLinear()
        //     .domain(d3.extent(data))
        //     .range([10, this.props.height - 20]);
        
        // d3.select(node).selectAll('rect')
        //     .data(data, (d) => d)
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => i * variableSpacing)
        //     .attr('y', (d) => this.props.height - 10 - yScale(d))
        //     .attr('width', xScale.bandwidth())
        //     .attr('height', (d) => yScale(d));
        
        // d3.select(node)
        //     .selectAll("rect")
        //     .append("svg:title")
        //         .text(function(d) {return "Value: " + d})
        
        // console.log(this.props.data)
        
        // d3.select(node)
        //     .selectAll("rect").remove()

        // d3.select(node)
        //     .selectAll('rect')
        //     .data(data, (d) => d)
        //     .exit()
        //     .remove()

        // // BUBBLE SORT
        // function iterate() {
        //     if (position === data.length - 1 - step) {
        //         position = 0;
        //         step++;
        //     }
            
        //     if (step >= data.length - 1) {       
        //         return;
        //     }
            
        //     //TODO: DEAL WITH === Case
        //     if (data[position] > data[position + 1]) {
        //         [data[position], data[position + 1]] = [data[position + 1], data[position]];            
        //     }
        //     position++;
        // }

        // setInterval( function () {

        //     //bubbleSort();

        //     d3.select(node).selectAll('rect')
        //         .data(data, (d) => d)
        //         //CSS
        //         .classed('active', (d, i) => i === position || i + 1 === position)
        //         .classed('completed', (d, i) => i >= data.length - step)

        //         .transition()
        //         .duration(50)
                
        //         .attr('x', (d, i) => i * variableSpacing);},     
        // /*DURATION*/ 50);        
    }

    // BUBBLE SORT
    // bubbleSort = (position, steps, data) => {
    //     if (position === data.length - 1 - steps) {
    //         position = 0;
    //         steps++;
    //     }
        
    //     if (steps >= data.length - 1) {       
    //         return;
    //     }
        
    //     //TODO: DEAL WITH === Case
    //     if (data[position] > data[position + 1]) {
    //         [data[position], data[position + 1]] = [data[position + 1], data[position]];            
    //     }
    //     position++;
    // }

    // resetChart(){
    //     const node = this.node;
    //     d3.select(node)
    //         .selectAll("rect").remove()
    // }


    
    render() {
        const { x, y, highlightBar, highlightedBar } = this.props,
        { widthScale, heightScale } = this.state;
        return(
            <g>
                {this.props.data.map((d, i) => (

                    <rect
                        x={widthScale(i)}
                        y={this.props.height-this.state.heightScale(d)}
                        width={this.state.widthScale.bandwidth()}
                        height={this.state.heightScale(d)}
                        style={{
                            fill: "blue"
                        }}
                    ></rect>

                ))}
            </g>
        ) 
    }
}

export default SortD3;