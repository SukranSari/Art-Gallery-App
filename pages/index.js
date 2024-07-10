import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((response) => response.json());
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  console.log(pieces);

  if (error) return <h1>Error, please try again!</h1>;
  if (isLoading) return <h1>Loading..</h1>;

  /*Random-Image*/
  const spotlightImage = pieces[Math.floor(Math.random() * pieces.length)];
  console.log("spotlightImage", spotlightImage);
  const artist = spotlightImage.artist;

  return (
    <>
      <h4>Spotlight-Image</h4>
      <Spotlight
        spotlightImage={spotlightImage}
        artist={spotlightImage.artist}
      />

      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
