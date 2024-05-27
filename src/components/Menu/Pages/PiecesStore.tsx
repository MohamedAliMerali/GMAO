import { User } from "../../../Data/users";
import pieces from "../../../Data/pieces";
import Container from "../../../UI/Container";

interface Props {
  user: User;
}

const PiecesStore = ({ user }: Props) => {
  return (
    // Todo: add a form to add some pieces
    <Container pageTitle={"Liste des pièces de rechange:"}>
      <ul>
        {pieces.map((piece) => (
          <li className="m-4 py-2.5 px-4 bg-gray-400 rounded-full flex justify-between font-medium hover:cursor-pointer">
            <span>{piece.name}</span>
            <span className="bg-slate-300 px-12 rounded-full">
              {piece.number}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PiecesStore;
