import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import {extractGanntObjects, scheduleTasks} from 'src/GanttLang/index.ts';

const MARGIN = {
  top: 50,
  right: 50,
  bottom: 100,
  left: 100
} as const;

const ROW_HEIGHT = 50;
const DAY_WIDTH = 50;
const X_GAP = 2;

type GanttChartProps = {
  gantt: string
}


function GanttChart({gantt}: GanttChartProps): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(
    ()=>{
      if (svgRef.current == null) {
        return;
      }

      let tmpTasks, tmpParticipants, tmpScheduledTasks;
      try {
        const {tasks, participants} = extractGanntObjects(gantt);
        tmpTasks = tasks;
        tmpParticipants = participants;
      }
      catch (e){
        console.log(e);
        tmpTasks = new Map();
        tmpParticipants = new Map();
      }
      try {
        const scheduledTasks = scheduleTasks(tmpTasks, tmpParticipants);
        tmpScheduledTasks = scheduledTasks;
      }
      catch (e){
        console.log(e);
        tmpScheduledTasks = new Map();
      }
      console.log({tmpParticipants, tmpScheduledTasks})
      const participants = tmpParticipants;
      const scheduledTasks = tmpScheduledTasks;

      const dayMin = Math.min(1, ...[...scheduledTasks.values()].map(task=>task.start!));
      const dayMax = Math.max(1, ...[...scheduledTasks.values()].map(task=>task.end!));
      const participantCount = participants.size;
      const width = (dayMax - dayMin + 1) * DAY_WIDTH + MARGIN.left + MARGIN.right;
      const height = participantCount * ROW_HEIGHT + MARGIN.top + MARGIN.bottom;

      console.log({dayMin, dayMax, days: [...scheduledTasks.values()].map(task=>task.start!)});

      const svg = d3.select(svgRef.current)
        .style('width', `${width}px`)
        .style('height', `${height}px`)
        .attr('viewBox', `0 0 ${width} ${height}`)

      // setup axis scaling
      const yScale = d3.scaleBand()
        .domain([...participants.values()].map(p=>p.name).sort())
        .range([MARGIN.top, height-MARGIN.bottom])
        .padding(0.2);

      const xScale = d3.scaleLinear()
        .domain([dayMin, dayMax+1])
        .range([MARGIN.left, width-MARGIN.right])

      const groups = svg.selectAll('g')
        .data(['xLabelGroup', 'yLabelGroup', 'gridGroup', 'taskBarGroup'])
        .join('g');
      
      const xLabelGroup = d3.select(groups.nodes()[0]);
      const yLabelGroup = d3.select(groups.nodes()[1]);
      const gridGroup = d3.select(groups.nodes()[2]);
      const taskBarGroup = d3.select(groups.nodes()[3]);

      // Draw Gantt Bars
      xLabelGroup.selectAll('text')
        .data([...participants.values()])
        .join('text')
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('x', MARGIN.left - 5)
        .attr('y', d => yScale(d.name)! + yScale.bandwidth()/2)
        .text(d => d.name);
      
      yLabelGroup.selectAll('text')
        .data(
          [...new Array(dayMax-dayMin+1)]
            .map((_u, i)=>i+dayMin)
        )
        .join('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'hanging')
        .attr('x', d=>xScale(d+0.5))
        .attr('y', height - MARGIN.bottom)
        .text(d => d.toString());
      
      gridGroup.selectAll('rect')
        .data(['box'])
        .join('rect')
        .style('fill', 'none')
        .style('stroke', 'gray')
        .attr('x', MARGIN.left)
        .attr('y', MARGIN.top)
        .attr('width', width - MARGIN.left - MARGIN.right)
        .attr('height', height - MARGIN.top - MARGIN.bottom)
      
      gridGroup.selectAll('line')
        .data(
          [...new Array(dayMax-dayMin+1)]
            .map((_u, i)=>i+dayMin)
        )
        .join('line')
        .style('stroke', 'Gainsboro')
        .attr('x1', d=> xScale(d))
        .attr('y1', MARGIN.top)
        .attr('x2', d=> xScale(d))
        .attr('y2', height-MARGIN.bottom)
    
      taskBarGroup.selectAll('rect')
        .data(scheduledTasks.values())
        .join('rect')
        .style('fill', 'silver')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('x', t=>xScale(t.start!) + X_GAP)
        .attr('y', t=>yScale(t.participant!)!)
        .attr('width', t=>(t.end! - t.start! + 1) * DAY_WIDTH - 2 * X_GAP)
        .attr('height', yScale.bandwidth())

      taskBarGroup.selectAll('text')
        .data(scheduledTasks.values())
        .join('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('x', t=>xScale((t.start! + t.end! + 1)/2))
        .attr('y', t => yScale(t.participant!)! + yScale.bandwidth()/2)
        .text(t => t.name);
        
    },
    [gantt]
  );

  return (
    <div>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}


export default GanttChart;