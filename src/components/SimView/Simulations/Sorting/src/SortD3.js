import React from 'react';
import * as d3 from 'd3';

class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            light: this.props.light
        }
    }

    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate() {
        //this.drawChart();
    }

    drawChart(){
        const data = this.props.data;
    
        const svg = d3.select(".test")
        .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height)
        .style("margin-left", 10)
        .style("margin-right", 10)
        
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * (this.props.width / data.length))
        .attr("y", (d, i) => this.props.height - (10 * d) - 3)
        .attr("width", (this.props.width / data.length - 5))
        .attr("height", (d, i) => d * 10)
        svg.attr("fill", "orange"); 
    }

    render(){
        return <div className="test" ></div>
      }
}


export default SortD3;