import Image from "next/image";
import styled from "styled-components";

const SectionSpotlight = styled.section``;

export default function Spotlight({ spotlightImage, artist }) {
  return (
    <SectionSpotlight>
      <Image
        src={spotlightImage.imageSource}
        width={300}
        height={300}
        alt={spotlightImage.slug}
      />
      <p>{artist}</p>
    </SectionSpotlight>
  );
}
