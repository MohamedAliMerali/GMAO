import { PieChart } from "@mui/x-charts/PieChart";
import { History } from "../../../Data/menuItems";
import {
  Gauge,
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts";

interface Props {
  history: History[];
}
function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}
const Dashboard = ({ history }: Props) => {
  console.log(history);
  return (
    <div>
      <PieChart
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
      </GaugeContainer>
    </div>
  );
};

export default Dashboard;
