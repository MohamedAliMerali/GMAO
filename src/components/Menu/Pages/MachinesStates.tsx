import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Container from "../../../UI/Container";
import machines, { reports as importedReport } from "../../../Data/machines";

const MachinesStates = () => {
  const { register, handleSubmit } = useForm();
  const [valuesError, setValuesError] = useState(false);
  const [reports, setReports] = useState(importedReport);
  const [history, setHistory] = useState(
    machines.map(() => ({ TBF: 0, breakDuration_: 0 }))
  );

  // Todo add history section down below
  const onSubmit = (data: FieldValues) => {
    console.log("Submitted!");
    console.log(data);

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

    const newReports = reports.map((item, index) => {
      const tbf =
        parseInt(data["WorkHours_" + index]) -
        parseInt(data["breakDuration_" + index]);

      const mtbf = 0;
      const mttr = 0;
      const disp = 0;
      return {
        TBF: tbf,
        MTBF: mtbf,
        MTTR: mttr,
        DISP: disp,
      };
    });
    const newHistory = history.map((item, index) => ({
      TBF: item.TBF + newReports[index].TBF,
      breakDuration_:
        item.breakDuration_ + parseInt(data["breakDuration_" + index]),
    }));

    setReports(newReports);
    setHistory(newHistory);

    // debug
    console.log(">> newReports:", newReports);
    console.log(">> newHistory:", newHistory);
  };

  {
    /* 
  "WorkHours_" + index
  "numPanne_" + index
  "breakDuration_" + index 
  */
  }

  return (
    <Container pageTitle={"Veuillez remplir les données d'aujourd'hui "}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="submit"
          className="outline-0 border-0 py-2 px-4 mb-4 bg-blue-600 text-white rounded-lg"
        >
          Calc
        </button>
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
                    min={0}
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
                    min={0}
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
                    min={0}
                    name={"breakDuration_" + index}
                    id={"breakDuration_" + index}
                    className="rounded-2xl text-center"
                  />
                </td>
                <td>{reports[index].TBF}</td>
                <td>{reports[index].MTBF}</td>
                <td>{reports[index].MTTR}</td>
                <td>{reports[index].DISP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </Container>
  );
};

export default MachinesStates;
