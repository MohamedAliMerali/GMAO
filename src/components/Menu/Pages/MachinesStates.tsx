import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Container from "../../../UI/Container";
import machines, { report as importedReport } from "../../../Data/machines";

const MachinesStates = () => {
  const { register, handleSubmit } = useForm();
  const [report, setReport] = useState(importedReport);

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted!");
    console.log(data);
  };

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
              <th scope="col">NUM.Panne(s)</th>
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
                    value={0}
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
                    value={0}
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
                    value={0}
                    min={0}
                    name={"breakDuration_" + index}
                    id={"breakDuration_" + index}
                    className="rounded-2xl text-center"
                  />
                </td>
                <td>{report[index].TBF}</td>
                <td>{report[index].MTBF}</td>
                <td>{report[index].MTTR}</td>
                <td>{report[index].DISP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </Container>
  );
};

export default MachinesStates;

{
  /* 
"WorkHours_" + index
"numPanne_" + index
"breakDuration_" + index 
*/
}
