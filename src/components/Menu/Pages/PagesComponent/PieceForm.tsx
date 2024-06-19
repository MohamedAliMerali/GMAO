import { FieldValues, useForm } from "react-hook-form";
import { PiecesInterface } from "../../../../Data/pieces";

interface Props {
  pieces: PiecesInterface[];
  setPieces: (pieces: PiecesInterface[]) => void;
}

const PieceForm = ({ pieces, setPieces }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setPieces([
      ...pieces,
      {
        name: data.name,
        number: data.number,
        fileName: data.fileName,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex items-center">
        <label htmlFor="name" className="w-28">
          Piece:
        </label>
        <input
          type="text"
          id="name"
          required
          minLength={3}
          placeholder="Nom de piece"
          {...register("name")}
          className="rounded-lg border-none outline-none ml-2 py-2 px-4 w-full"
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="number" className="w-28">
          Nombre:
        </label>
        <input
          type="number"
          required
          id="number"
          min={0}
          {...register("number")}
          className="rounded-lg border-none outline-none ml-2 py-2 px-4 w-full"
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="fileName" className="w-28">
          Fichier:
        </label>
        <input
          type="text"
          required
          id="fileName"
          minLength={5}
          placeholder="***.pdf"
          {...register("fileName")}
          className="rounded-lg border-none outline-none ml-2 py-2 px-4 w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="outline-0 border-0 mt-4 py-2 px-4 rounded-lg text-white bg-blue-600"
        >
          Ajoute piece
        </button>
      </div>
    </form>
  );
};

export default PieceForm;
