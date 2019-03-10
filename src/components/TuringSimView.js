import React from 'react'
import * as d3 from 'd3'
import rd3 from 'react-d3-library'

class TuringSimView extends React.Component{
    componentDidMount(){
        this.drawChart();
    }

    drawChart(){
        const data = [80, 120, 60, 150, 200];
        const barHeight = 20;
        const bar = d3.select('svg')
          .selectAll('rect')
              .data(data)
              .enter()
              .append('rect')
              .attr('fill', 'blue')
              .attr('width', function (d) {
                  return d;
              })
              .attr('height', barHeight - 1)
              .attr('transform', function (d, i) {
                  return "translate(0," + i * barHeight + ")";
              });
              
            }

    render(){
        return(
            <div className="TuringSim">

            </div>
        )
    }
}
export default TuringSimView