import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((response) => response.json());
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  console.log(pieces);

  if (error) return <h1>Error, please try again!</h1>;
  if (isLoading) return <h1>Loading..</h1>;

  return (
    <>
      <h1>Art Gallery</h1>
      {<ArtPieces pieces={pieces} />}
    </>
  );
}
