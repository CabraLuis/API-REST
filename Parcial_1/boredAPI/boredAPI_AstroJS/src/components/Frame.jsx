import { useState } from "react";

export default function Frame() {
  const [activity, setActivity] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");
  const [price, setPrice] = useState("");

  const getActivity = async () => {
    const data = await fetch("http://www.boredapi.com/api/activity/");
    const dataJSON = await data.json();
    setActivity(dataJSON.activity);
    setAccessibility(dataJSON.accessibility);
    setType(dataJSON.type);
    setParticipants(dataJSON.participants);
    setPrice(dataJSON.price);
  };

  return (
    <>
      <h1>{activity}</h1>
      <h1>{accessibility}</h1>
      <h1>{type}</h1>
      <h1>{participants}</h1>
      <h1>{price}</h1>
      <button onClick={getActivity} className="btn btn-primary">
        Obtener Actividad Aleatoria
      </button>
    </>
  );
}
