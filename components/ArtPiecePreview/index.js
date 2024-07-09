import Image from "next/image";
import styled from "styled-components";

const StyledContainer = styled.li`
  align-items: center;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const StyledP = styled.p`
  font-size: 18px;
  color: black;
  margin-top: 0;
  margin-bottom: 30px;
`;

const StyledTitle = styled.h2`
  font-size: 15px;
`;

export default function ArtPiecePreview({ piece }) {
  const { imageSource: image, artist: artist, name: title } = piece;
  return (
    <StyledContainer>
      <Image
        src={image}
        width={400}
        height={0}
        style={{ width: "auto", height: "auto" }}
        alt={title}
      />
      <StyledTitle>
        <StyledP>
          "{title}" by {artist}
        </StyledP>
      </StyledTitle>
    </StyledContainer>
  );
}
