import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TodaysDate } from "../../../../util/dates";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const TasksForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();
  const [minDate] = useState(TodaysDate());

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div>
        <label htmlFor="tasks">Tâches</label>
        <input
          type="text"
          id="tasks"
          {...register("tasks")}
          placeholder="Nouveau Tâche..."
          className="rounded-lg border-none outline-none py-2 px-4 w-full"
        />
      </div>
      <div>
        {/* // Todo: responsable can be choosed from a list */}
        <label htmlFor="responsable">responsable</label>
        <input
          type="text"
          id="responsable"
          {...register("responsable")}
          placeholder="responsable..."
          className="rounded-lg border-none outline-none py-2 px-4 w-full"
        />
      </div>
      <div>
        <label htmlFor="delay">Dernier delais</label>
        <input
          type="date"
          id="delay"
          {...register("delay")}
          min={minDate}
          defaultValue={minDate}
          className="rounded-lg border-none outline-none py-2 px-4 w-full"
        />
      </div>
      <div>
        <label className="me-4">Validation: </label>
        <input
          type="radio"
          id="v1"
          value="fait"
          checked
          {...register("validation")}
          className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="v1" className="ms-1 me-4 text-gray-900">
          Fait
        </label>

        <input
          type="radio"
          id="v0"
          value="en-cours"
          {...register("validation")}
          className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
        />
        <label htmlFor="v0" className="ms-1 me-4 text-gray-900">
          En Cours
        </label>

        <input
          type="radio"
          checked
          id="v-1"
          value="pas-encore"
          {...register("validation")}
          className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
        />
        <label htmlFor="v-1" className="ms-1 me-4 text-gray-900">
          Pas Encore
        </label>
      </div>
      <div>
        <label htmlFor="note">Remarque</label>
        <input
          type="text"
          id="note"
          {...register("note")}
          placeholder="Remarque?..."
          className="rounded-lg border-none outline-none py-2 px-4 w-full"
        />
      </div>
      <button
        type="submit"
        className="outline-0 border-0 py-2 px-4 rounded-lg text-white bg-blue-600"
      >
        Ajouter..
      </button>
    </form>
  );
};

export default TasksForm;
