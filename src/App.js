import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
  addpeople,
  decrement,
  deletepeople,
  increment,
  updatepeople,
} from "./Actions/Actions";

function App() {
  const [name, setname] = useState("");
  const [edit, setedit] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState("");

  const counter = useSelector((e) => e.CounterReducer);
  const dispatch = useDispatch();
  const people = useSelector((e) => e.PeopleReducer.peoples);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    dispatch(updatepeople({ edit, idholder }));
  };
  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        ADD
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        SUBTRACT
      </button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}

      {people.map((e) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dispatch(deletepeople(e.id));
            }}>
            DELETE
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
