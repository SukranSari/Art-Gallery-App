import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecesPreview key={piece.slug} piece={piece} />
      ))}
    </ul>
  );
}
