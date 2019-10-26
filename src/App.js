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
    try {
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
    } catch (error) {
      console.error(error.message);
    }
  };

  const addData = async () => {
    try {
      const savedData = await firebase
        .firestore()
        .collection("users")
        .add({
          name: "Nawaz-ud-din",
          class: "M.A"
        });
      getData();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>User Names</h1>
      <button onClick={addData}>Add Data</button>
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
