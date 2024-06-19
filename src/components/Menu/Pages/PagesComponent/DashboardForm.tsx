import { ChangeEvent } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { SerieData } from "./Dashboard";

interface Props {
  data: SerieData[];
  setData: (data: SerieData[]) => void;
}

const DashboardForm = ({ data, setData }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    setData(
      data.map((item) =>
        name === item.machineName ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <FormGroup className="flex flex-row justify-around">
      {data.map((dataItem, index) => (
        <span key={index}>
          <FormControlLabel
            control={
              <Checkbox
                size="large"
                name={dataItem.machineName}
                checked={dataItem.show}
                onChange={handleChange}
              />
            }
            label={dataItem.machineName}
          />
        </span>
      ))}
    </FormGroup>
  );
};

export default DashboardForm;
// {/* <FormControlLabel
//   control={
//     <Checkbox
//       name="defaultChecked"
//       checked={checkboxes.defaultChecked}
//       onChange={handleChange}
//     />
//   }
//   label="Label"
// />
// <FormControlLabel
//   required
//   control={
//     <Checkbox
//       name="required"
//       checked={checkboxes.required}
//       onChange={handleChange}
//     />
//   }
//   label="Required"
// />
// <FormControlLabel
//   disabled
//   control={
//     <Checkbox
//       name="disabled"
//       checked={checkboxes.disabled}
//       onChange={handleChange}
//     />
//   }
//   label="Disabled"
// /> */}
