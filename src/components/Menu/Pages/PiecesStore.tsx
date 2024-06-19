import { useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import PieceForm from "./PagesComponent/PieceForm";
import { User } from "../../../Data/users";
import piecesData from "../../../Data/pieces";
import Container from "../../../UI/Container";

interface Props {
  user: User;
}

const PiecesStore = ({ user }: Props) => {
  const [pieces, setPieces] = useState(piecesData);
  return (
    <Container pageTitle={"Liste des pièces de rechange:"}>
      {user.authorizations.includes("addPiece") ? (
        <PieceForm pieces={pieces} setPieces={setPieces} />
      ) : null}
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
