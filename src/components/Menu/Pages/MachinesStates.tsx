import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import machines, { reports as importedReport } from "../../../Data/machines";
import { History } from "../../../Data/menuItems";
import Container from "../../../UI/Container";
interface Props {
  history: History[];
  setHistory: (history: History[]) => void;
}

const getTBF = (data: FieldValues, index: number): number => {
  return (
    parseInt(data["WorkHours_" + index]) -
    parseInt(data["breakDuration_" + index])
  );
};
const getMTBF = (
  data: FieldValues,
  newHistory: History[],
  index: number
): number => {
  return data["numPanne_" + index] === 0
    ? 0
    : newHistory[index]["TBF"] / data["numPanne_" + index];
};
const getMTTR = (
  data: FieldValues,
  newHistory: History[],
  index: number
): number => {
  return data["numPanne_" + index] === 0
    ? 0
    : newHistory[index]["breakDuration_"] / data["numPanne_" + index];
};
const getDISP = (
  data: FieldValues,
  newHistory: History[],
  index: number
): number => {
  return getMTTR(data, newHistory, index) + getMTBF(data, newHistory, index) ===
    0
    ? 100
    : (getMTBF(data, newHistory, index) /
        (getMTTR(data, newHistory, index) + getMTBF(data, newHistory, index))) *
        100;
};

const MachinesStates = ({ history, setHistory }: Props) => {
  const { register, handleSubmit } = useForm();
  const [valuesError, setValuesError] = useState(false);
  const [reports, setReports] = useState(importedReport);

  const onSubmit = (data: FieldValues) => {
    // parsing data from strings into integers
    Object.entries(data).forEach(([key, value]) => {
      data[key] = parseInt(value);
    });

    // check if all numbers are provied
    for (let index = 0; index < data.length; index++) {
      if (
        isNaN(parseInt(data[index]["WorkHours_" + index])) ||
        isNaN(parseInt(data[index]["numPanne_" + index])) ||
        isNaN(parseInt(data[index]["breakDuration_" + index]))
      ) {
        setValuesError(true);
        console.log("errro ayw");
        return;
      }
    }

    const newHistory: History[] = history.map((histItem, index) => {
      return {
        ...histItem,
        TBF: histItem.TBF + getTBF(data, index),
        breakDuration_:
          histItem.breakDuration_ + parseInt(data["breakDuration_" + index]),
        //  can't access 'newHistory' before initialization
        // DISPHist: [
        //   ...histItem.DISPHist,
        //   parseFloat(getDISP(data, newHistory, index).toFixed(2)),
        // ],
      };
    });

    // making the new report
    // we used a new var so we can use the new values in history
    const newReports = reports.map((_, index) => {
      const disp = parseFloat(getDISP(data, newHistory, index).toFixed(2));
      newHistory[index].DISPHist = [...newHistory[index].DISPHist, disp];
      return {
        TBF: parseFloat(getTBF(data, index).toFixed(2)),
        MTBF: parseFloat(getMTBF(data, newHistory, index).toFixed(2)),
        MTTR: parseFloat(getMTTR(data, newHistory, index).toFixed(2)),
        DISP: disp,
      };
    });

    setReports(newReports);
    setHistory(newHistory);
    localStorage.setItem("TBFhistory", JSON.stringify(newHistory));
  };

  return (
    <Container pageTitle={"Veuillez remplir les données d'aujourd'hui "}>
      {valuesError ? <p className="text-red-600">error</p> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-end">
          <button
            type="submit"
            className="outline-0 border-0 py-2 px-4 mb-4 bg-blue-600 text-white rounded-lg"
          >
            Calc
          </button>
        </div>
        <table className="table table-hover">
          <thead>
            <tr className="table-light">
              <th scope="col">Machine</th>
              <th scope="col">Les heures de travail</th>
              <th scope="col">Num de Panne(s)</th>
              <th scope="col">Durèe de(s) Panne(s)</th>
              <th scope="col">TBF</th>
              <th scope="col">MTBF</th>
              <th scope="col">MTTR</th>
              <th scope="col">DISP</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine, index) => (
              <tr key={index} className="table-secondary">
                <th scope="row">{machine.name}</th>
                <td>
                  <input
                    {...register("WorkHours_" + index)}
                    type="number"
                    placeholder="0"
                    // value={getRandomNumberBetween(5, 15)}
                    defaultValue={0}
                    min={0}
                    step={0.1}
                    name={"WorkHours_" + index}
                    id={"WorkHours_" + index}
                    className="rounded-2xl text-center"
                  />
                </td>
                <td>
                  <input
                    {...register("numPanne_" + index)}
                    type="number"
                    placeholder="0"
                    // value={getRandomNumberBetween(1, 5)}
                    defaultValue={0}
                    min={0}
                    step={0.1}
                    name={"numPanne_" + index}
                    id={"numPanne_" + index}
                    className="rounded-2xl text-center"
                  />
                </td>
                <td>
                  <input
                    {...register("breakDuration_" + index)}
                    type="number"
                    placeholder="0"
                    // value={getRandomNumberBetween(1, 5)}
                    defaultValue={0}
                    min={0}
                    step={0.1}
                    name={"breakDuration_" + index}
                    id={"breakDuration_" + index}
                    className="rounded-2xl text-center"
                  />
                </td>
                <td>{reports[index].TBF}</td>
                <td>{reports[index].MTBF}</td>
                <td>{reports[index].MTTR}</td>
                <td>{reports[index].DISP}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </Container>
  );
};

export default MachinesStates;
