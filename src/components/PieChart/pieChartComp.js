// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: 'TOTAL VOTES', num: '168,912,222', votes: '8,400,000', status: 'REJECTED VOTES', value: 200, color: '#E30325'},
  { name: "", num: "", votes: '160,512,222,', status: 'ACCEPTED VOTES', value: 800 , color: '#449352'},

];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    color,
    votes,
    status,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={1} textAnchor="middle" fill='#FFFFFF' fontSize={12}
       dangerouslySetInnerHTML={{
        __html: payload.name,
      }}
      > 
      </text>
      <text x={cx} y={cy} dy={20} textAnchor="middle" fill='#FFFFFF' fontSize={18}
       dangerouslySetInnerHTML={{
        __html: payload.num,
      }}
      > 
      </text>
     
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        color={color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius - 6}
        outerRadius={outerRadius - 10}
        fill={fill}
        color={color}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke='#A28888'
        fill="none"
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#FFFFFF"
        style={{fontWeight: '600', fontSize: '10px', width: '10px'}}
      >{`${status}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#FFFFFF"
        style={{fontWeight: '700', fontSize: '12px', color: 'rgba(252, 248, 248, 0.482)', width: '10px'}}
      >
        {`${votes}`}
      </text>
    </g>
  );
};

const PieChartComp = () => {
  const [, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div >
<PieChart width={400} height={300} style={{ margin: '-40px -25px'}}>
  <circle   stroke="#FFFFFF" />
      <Pie
        activeIndex={[0,1]}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill='#449352'
        dataKey="value"
        
      />
    </PieChart>
    </div>
    
  );
}

export default PieChartComp;