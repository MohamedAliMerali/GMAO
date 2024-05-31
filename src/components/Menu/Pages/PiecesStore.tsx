import Container from "../../../UI/Container";
import pieces from "../../../Data/pieces";

const PiecesStore = () => {
  return (
    // Todo: add a form to add some pieces
    <Container pageTitle={"Liste des pièces de rechange:"}>
      {/* <ul>
        {pieces.map((piece) => (
          <li className="m-4 py-2.5 px-4 bg-gray-400 rounded-full flex justify-between font-medium hover:cursor-pointer">
            <span>{piece.name}</span>
            <span className="bg-slate-300 px-12 rounded-full">
              {piece.number}
            </span>
          </li>
        ))}
      </ul> */}

      <ul className="list-group hover:cursor-pointer">
        {pieces.map((piece, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start my-1 rounded-3 hover:bg-slate-200 transition-all"
          >
            <span>{piece.name}</span>
            <span className="badge text-bg-primary rounded-pill">
              {piece.number}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PiecesStore;
