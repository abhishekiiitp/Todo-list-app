import React, { useState } from 'react';
import Todolist from './Todolist';
const App=()=>
{
   const [inputlist,setinputList]=useState("");
   const [items,setitems]=useState([]);


  const itemEvent=(event)=>{
       setinputList(event.target.value);
  }
  const listOfitems=()=>{
      setitems((olditems)=>{
          return [...olditems,inputlist];
      });
      setinputList(" ");
  };
  const deleteitems=(id)=>{
    //   console.log("deleted");
      setitems((olditems)=>{
      return olditems.filter((arrEle,index1)=>{
          return index1!==id;
      });
      });
  };
    return(
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1> ToDo List </h1>
                <br />
                <input type="text" name="item" onChange={itemEvent} value={inputlist} placeholder="Add a item" />
                <button onClick={listOfitems}> + </button>
                <ol>
                    {/* <li> {inputlist} </li> */}
                    {
                    items.map((itemval,index)=>{
                        
                      return  <Todolist text={itemval} 
                          key={index}
                          id={index}
                          onSelect={deleteitems}
                      />
                    })
                    }
                </ol>
            </div>
        </div>
    )

};
export default App;