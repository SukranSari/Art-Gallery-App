// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>
//     </div>
//   );
// }
import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((response) => response.json);

  function Character() {
    const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

    // render data
    return <div>Hello {data.artist}!</div>; // Hello Steve Johnson!
  }
}
