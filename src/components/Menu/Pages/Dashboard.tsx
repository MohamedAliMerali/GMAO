import { useState } from "react";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  LineChart,
  useGaugeState,
} from "@mui/x-charts";
import MyFormGroup from "./MyFormGroup";
import Container from "../../../UI/Container";
import { History } from "../../../Data/menuItems";
import { LastDays } from "../../../util/dates";

interface Props {
  history: History[];
}

export interface SerieData {
  machineName: string;
  DISPHist: number[];
  show: boolean;
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
  const DAYS = 10;
  const xaxis = [];
  for (let index = 0; index < DAYS; index++) {
    xaxis.push(index);
  }

  const [serieData, setSerieData] = useState(
    history.map((histItem) => {
      return {
        machineName: histItem.machineName,
        DISPHist: histItem.DISPHist,
        show: true,
      };
    })
  );

  return (
    <Container pageTitle={"Graph de Disponibilité"}>
      <MyFormGroup data={serieData} setData={setSerieData} />

      <div className="flex">
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
          series={serieData
            .filter((serieItem) => serieItem.show)
            .map((serieItem) => {
              return {
                curve: "monotoneX",
                data: serieItem.DISPHist.slice(-DAYS),
                label: serieItem.machineName,
              };
            })}
          height={500}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-center">Dernière Disponibilité</p>
            <GaugeContainer
              width={200}
              height={200}
              startAngle={-110}
              endAngle={110}
              value={serieData
                .filter((item) => item.show)
                .reduce((acc, item) => {
                  return (
                    acc +
                    item.DISPHist[item.DISPHist.length - 1] / serieData.length
                  );
                }, 0)}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
              <GaugePointer />
            </GaugeContainer>
          </div>

          <div>
            <p className="text-center">Moyenne des Disponibilités</p>
            <GaugeContainer
              width={200}
              height={200}
              startAngle={-110}
              endAngle={110}
              value={serieData
                .filter((item) => item.show)
                .reduce((acc, item) => {
                  return (
                    acc +
                    item.DISPHist.slice(-DAYS).reduce((acc, index) => {
                      return acc + index / DAYS;
                    }, 0) /
                      serieData.length
                  );
                }, 0)}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
              <GaugePointer />
            </GaugeContainer>
          </div>
        </div>
      </div>

      {/* 
       {/* <PieChart
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
      <Gauge width={100} height={100} value={60} />
      <Gauge
        width={100}
        height={100}
        value={60}
        startAngle={-90}
        endAngle={90}
      />

      */}
    </Container>
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
