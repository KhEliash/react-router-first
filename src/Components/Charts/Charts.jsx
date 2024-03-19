// import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <h1 className="text-5xl font-bold my-3">This is the chart</h1>

      <BarChart width={700} height={400} data={data}>
        <XAxis dataKey="name" />
        <Tooltip></Tooltip>
        <Bar dataKey="uv" fill="green" />
        <Bar dataKey="pv" fill="#8884d3" />
        <Bar dataKey="amt" fill="yellow" />
      </BarChart>
    </div>
  );
};

export default Charts;
