import { LineChart } from "@mui/x-charts";
import { History } from "../../../Data/menuItems";
import { LastDays } from "../../../util/dates";

interface Props {
  history: History[];
}

const Dashboard = ({ history }: Props) => {
  const DAYS = 10;
  const xaxis = [];
  for (let index = 0; index < DAYS; index++) {
    xaxis.push(index);
  }
  console.log(LastDays(DAYS));

  return (
    <div>
      {/* you can add two disp, last one and average disp */}
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            dataKey: "day",
            data: LastDays(DAYS),
            valueFormatter: (day, context) =>
              context.location === "tick" ? `${day.slice(0, 6)}` : `${day}`,
          },
        ]}
        series={history.map((histItem) => {
          return {
            curve: "monotoneX",
            data: histItem.DISPHist.slice(-DAYS),
            label: histItem.machineName,
          };
        })}
        height={500}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
      {/* // series={[
        //   { curve: "monotoneX", data: [0, 5, 2, 6, 3, 9.3], label: "Series 1" },
        //   { curve: "monotoneX", data: [2, 4, 2, 3, 5, 9.3], label: "Series 2" },
        //   { curve: "monotoneX", data: [6, 3, 7, 9.5, 4, 2], label: "Series 3" },
        // ]} */}
      {/* <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "s-A" },
              { id: 1, value: 15, label: "s-B" },
              { id: 2, value: 20, label: "s-C" },
            ],
            innerRadius: 40,
            outerRadius: 150,
            paddingAngle: 2,
            cornerRadius: 9,
            startAngle: -90,
            endAngle: 90,
            cx: 144,
            cy: 150,
          },
        ]}
        width={400}
        height={200}
      />
      <Gauge width={100} height={100} value={60} />
      <Gauge
        width={100}
        height={100}
        value={60}
        startAngle={-90}
        endAngle={90}
      />

      <GaugeContainer
        width={200}
        height={200}
        startAngle={-110}
        endAngle={110}
        value={30}
      >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer> */}
    </div>
  );
};

export default Dashboard;

// function GaugePointer() {
//   const { valueAngle, outerRadius, cx, cy } = useGaugeState();

//   if (valueAngle === null) {
//     // No value to display
// return null;
//   }

//   const target = {
//     x: cx + outerRadius * Math.sin(valueAngle),
//     y: cy - outerRadius * Math.cos(valueAngle),
//   };
//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={5} fill="red" />
//       <path
//         d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
//         stroke="red"
//         strokeWidth={3}
//       />
//     </g>
//   );
// }

// todo: make a check box to select the machine that you want to show
