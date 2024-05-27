import { FieldValues, useForm } from "react-hook-form";
import Container from "../../../UI/Container";
import machines from "../../../Data/machines";
import { useState } from "react";

const MachinesStates = () => {
  const { register, handleSubmit } = useForm();
  const [report, setReport] = useState({
    TBF: 0,
    MTBF: 0,
    MTTR: 0,
    DISP: 0,
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted!");
    console.log(data);
  };

  {
    /* 
  "WorkHours_" + index
  "numPanne_" + index
  "breakDuration_" + index 
  */
  }
  const getTBF = () => {
    return 0;
  };

  const getMTBF = () => {
    return 0;
  };
  const getMTTR = () => {
    return 0;
  };
  const getDISP = () => {
    return 0;
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
              </tr>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="text-5xl">Report</h2>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>TBF:</th>
            <th>MTBF:</th>
            <th>MTTR:</th>
            <th>DISP:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getTBF()}</td>
            <td>{getMTBF()}</td>
            <td>{getMTTR()}</td>
            <td>{getDISP()}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default MachinesStates;
