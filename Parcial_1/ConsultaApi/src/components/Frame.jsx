import { useEffect, useState } from "react";

export default function Frame() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://ghibliapi.vercel.app/films/?limit=12");
      setData(await data.json());
    };
    getData().catch(console.error);
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="grid grid-cols-4 gap-4">
        {data ? (
          data.map((movie) => (
            <div key={movie.id}>
              <div className="card w-96 bg-base-300 shadow-xl">
                <figure>
                  <img src={movie.image} alt="Movie Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {movie.title}
                    <div className="badge badge-primary">
                      {movie.release_date}
                    </div>
                  </h2>
                  <p>{movie.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span class="loading loading-spinner text-primary loading-lg"></span>
        )}
      </div>
    </div>
  );
}
