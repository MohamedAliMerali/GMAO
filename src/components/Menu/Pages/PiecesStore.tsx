import { GrDocumentPdf } from "react-icons/gr";
import Container from "../../../UI/Container";
import pieces from "../../../Data/pieces";

const PiecesStore = () => {
  return (
    // Todo: add a form to add some pieces
    <Container pageTitle={"Liste des pièces de rechange:"}>
      <ul className="list-group hover:cursor-pointer">
        {pieces.map((piece, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start my-1 rounded-4 hover:bg-slate-200 transition-all"
          >
            <span>{piece.name}</span>
            <span className="flex items-center">
              <a href={"/src/Data/" + piece.fileName} download className="mr-4">
                <GrDocumentPdf />
              </a>
              <span className="badge text-bg-primary rounded-pill w-20">
                {/* make formated string where it leaves place for many numbers */}
                {piece.number}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PiecesStore;
