import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Form from './Components/Form.js';
import List from './Components/List.js';

function App() {

  const [arrays, setArrays] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const addToDo = (value) => { // 3
    // arrays.push(value); arrays = [1,2]
    // let copy =  [...arrays]; ...arrays= 1,2 
    //  copy.push(value)
    setArrays([...arrays, value]) // [    1,2   , 3 ] 
  }
  localStorage.setItem('arrayValue', JSON.stringify(arrays));
  //input Add panna localstorage application la show agum

  const handleDelete = (deleteIndex) => {
    const newArray1 = arrays.filter((data, index) => index !== deleteIndex)
    //filter condtion true eruntha "data" return pannum.
    setArrays(newArray1);
  }

  const handleEdit = (editValue, index) => {
    setInput([editValue]);
    setIsEditing(true);
    setEditIndex(index);
  }

  const handleChange = () => {
    if (isEditing === true) {
      const newArray2 = arrays.map((value, index) => {

        if (index === editIndex) {
          return { text: input, isCompleted: false };
        }
        else {
          return value;
        }
      })
      console.log(newArray2);
      setArrays(newArray2);
      setInput("");
      setIsEditing(false);
      setEditIndex(null);
    }
    else if (input !== "") {
      addToDo({ text: input, isCompleted: false });
      //console.log(props.input+console);
      setInput("");
    }
  }

  const handleCheck = (checkValue, checkIndex) => { //checkvalue = etha tic pandromo antha value(obj)
    //debugger
    const newArray3 = arrays.map((value, index) => {
      if (index === checkIndex) {
        return { text: checkValue.text, isCompleted: !checkValue.isCompleted };
        // !checkvalue.isCompleted(false)=true.
      }
      else {
        return value;
      }
    })
    setArrays(newArray3);

    const data = JSON.parse(localStorage.getItem('arrayValue'));
    console.log(data);
    //checkbox click panna localstorage la data console la retrieve pannalam

    //console.log(newArray3, "check");
  }

  return (
    <div className="container">
      <div className="todo_box">
        <div>
          <Header />
        </div>
        <div>
          <Form arrays={arrays}
            addToDo={addToDo}
            input={input} setInput={setInput}
            handleChange={handleChange}
          />
        </div>

        <div> <List arrays={arrays} setArrays={setArrays}
          input={input} setInput={setInput}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCheck={handleCheck} />
        </div>

      </div>
    </div>
  );
}

export default App;
