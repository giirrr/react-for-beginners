import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    // id를 알고 있으니까 API로부터 정보를 fetch 해올 수 있다
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return <h1>Detail</h1>;
}
export default Detail;
