import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {
  data: object;
  width: number;
  height: number;
  margin: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
};

export const PartnersGraph: React.FC<Props> = ({ data, width, height, margin }) => {
  const svgRef = useRef(null);
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  useEffect(() => {
    // Create root container where we will append all other chart elements
    if (svgRef.current === null) {
        return;
    }

    const svgEl: d3.Selection<SVGSVGElement, any, any, any> = d3.select(svgRef.current);
    // Clear svg content before adding new elements
    svgEl.selectAll('*').remove();
    chart(svgEl, data, width, height);
  }, [data]);

  return <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>;
};

const pack = (data: any, width: number, height: number) =>
  d3.pack().size([width, height]).padding(3)(
    d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a: any, b: any) => b.value - a.value)
  );

const color = d3
  .scaleLinear<string>()
  .domain([0, 5])
  .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
  .interpolate(d3.interpolateHcl);

const chart = (svgEl: d3.Selection<SVGSVGElement, any, any, any>, data: any, width: number, height: number) => {
  const root = pack(data, width, height);
  let focus = root;
  let view: any;

  const svg = svgEl
    .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
    .style('display', 'block')
    .style('margin', '0 -14px')
    .style('background', color(0))
    .style('cursor', 'pointer')
    .on('click', (event) => zoom(event, root));

  const node = svg
    .append('g')
    .selectAll('circle')
    .data(root.descendants().slice(1))
    .join('circle')
    .attr('fill', (d) => (d.children ? color(d.depth) : 'white'))
    .attr('pointer-events', (d) => (!d.children ? 'none' : null))
    .on('mouseover', function () {
      d3.select(this).attr('stroke', '#000');
    })
    .on('mouseout', function () {
      d3.select(this).attr('stroke', null);
    })
    .on('click', (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

  const label = svg
    .append('g')
    .style('font', '10px sans-serif')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(root.descendants())
    .join('text')
    .style('fill-opacity', (d) => (d.parent === root ? 1 : 0))
    .style('display', (d) => (d.parent === root ? 'inline' : 'none'))
    .text((d: any) => d.data.name);

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v: any) {
    const k = width / v[2];

    view = v;

    label.attr('transform', (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr('transform', (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr('r', (d) => d.r * k);
  }

  function zoom(event: any, d: any) {
    focus = d;

    const transition: d3.Transition<SVGSVGElement, any, any, any> = svg
      .transition()
      .duration(event.altKey ? 7500 : 750)
      .tween('zoom', (_) => {
        const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
        return (t) => zoomTo(i(t));
      });

    label
      .filter(function (d) {
        const labelWrapper = this as HTMLElement | null;
        if (d.parent === focus) {
            return true;
        } else if (labelWrapper !== null) {
            return labelWrapper.style.display === 'inline';
        }
        return false;
      })
      .transition(transition)
      .style('fill-opacity', (d) => (d.parent === focus ? 1 : 0))
      .on('start', function (d) {
        const labelWrapper = this as HTMLElement | null;
        if (d.parent === focus && labelWrapper !== null) {
            labelWrapper.style.display = 'inline';
        }
      })
      .on('end', function (d) {
        const labelWrapper = this as HTMLElement | null;
        if (d.parent !== focus && labelWrapper !== null) {
            labelWrapper.style.display = 'none';
        }
      });
  }

  return svg.node();
};
