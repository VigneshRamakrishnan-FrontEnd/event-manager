import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./api.css";
import axios from "axios";

export default function Axxios() {
  //sending value by dispatch to redux
  const dispatch = useDispatch();
  // getting value from redux by useselector
  const storeData = useSelector((store) => store.eventData);
  // const [data, setData] = useState([]);
  const [editOption, setEditOption] = useState(false);
  const [name, SetName] = useState("");
  const [gen, SetGen] = useState("");
  const [email, SetEmail] = useState("");
  const [id, SetId] = useState("");
  const [indexUpdate, setIndexUpdate] = useState(0);

  const fetchQuotes = async () => {
    try {
      const res = await axios.get("https://gorest.co.in/public/v2/users", {});
      dispatch({ type: "store", payload: res.data });
      console.log(res.data, "api info");
      console.log(res.data.slice(0, 1), "00");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchQuotes();

    return () => {};
  }, []);

  const onDelete = (index) => {
    let updatedValue = [...storeData];
    updatedValue.splice(index, 1);
    dispatch({ type: "delete", payload: updatedValue });
    console.log(storeData, "delete");
  };

  const onEdit = (index, dat) => {
    setEditOption(true);
    SetName(dat.name);
    SetGen(dat.gender);
    SetEmail(dat.email);
    SetId(dat.id);
    setIndexUpdate(index);

    console.log(dat.name, "name");
    console.log(dat.gender, "gender");
    console.log(dat.email, "email");
    console.log(dat.id, "roll no");
  };

  // function onChangeValue(event) {
  //   SetGen(event.target.value);
  //   console.log(gen, "gender bbbb");
  // }

  const onSave = () => {
    let updatedValue = [...storeData];
    if (editOption) {
      updatedValue[indexUpdate] = {
        name: name,
        gender: gen,
        email: email,
        id: id,
      };

      dispatch({ type: "edit", payload: updatedValue });
      console.log(updatedValue, "edit");
    } else {
      updatedValue.push({
        name: name,
        gender: gen,
        email: email,
        id: id,
      });
      console.log(updatedValue, "save");
    }
    setEditOption(false);

    dispatch({ type: "add", payload: updatedValue });
    console.log(updatedValue, "save dispatch");
  };

  return (
    <div className="whole">
      <div className="w1">
        <h3>ADMIN</h3>
        <h4> {editOption ? "Edit Event" : "Add Event"}</h4>
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        ></input>
        <form onChange={(e) => SetGen(e.target.value)}>
          <label>Gender</label>
          <br></br>
          <input type="radio" value="male" name="gender" /> Male
          <input type="radio" value="female" name="gender" /> Female
          <input type="radio" value="other" name="gender" /> Other
        </form>
        <input
          type="email"
          placeholder="Enter Email"
          email="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="number"
          placeholder="Enter Roll.No"
          id="id"
          value={id}
          onChange={(e) => SetId(e.target.value)}
        ></input>
        <br />
        <button onClick={() => onSave()}>
          {editOption ? "Update" : "Add"}
        </button>
      </div>
      <div className="map">
        {storeData.map((dat, index) => {
          return (
            <div className="box" key={index} index={index}>
              <p> Name: {dat.name}</p>
              <p>Gender: {dat.gender}</p>
              <p>Email: {dat.email}</p>
              <p> Roll.No:{dat.id}</p>
              <p> Roll.No:{dat.id}</p>

              <br></br>
              <button onClick={() => onEdit(index, dat)}>Edit</button>
              <button onClick={() => onDelete(index, dat)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
