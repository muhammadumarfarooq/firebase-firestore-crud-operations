import React, { useState } from "react";
import "./App.css";
import firebase from "./firebase";
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getData = async () => {
    setShowLoader(true);
    setData([]);
    const snapshot = await firebase
      .firestore()
      .collection("users")
      .get();

    const dbData = [];
    snapshot.docs.map(doc => {
      const object = doc.data();
      object.id = doc.id;
      dbData.push(object);
    });
    setData(dbData);
    setShowLoader(false);
    console.log(dbData);
  };

  return (
    <div>
      <h1>App...</h1>
      <button onClick={getData}>Get Data</button>

      {data.length > 1 ? (
        data.map(name => <h1 key={name.name}>{name.name}</h1>)
      ) : (
        <div>{showLoader && <Spinner />}</div>
      )}
    </div>
  );
}

export default App;
