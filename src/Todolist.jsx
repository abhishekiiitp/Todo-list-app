import React from "react";

const Todolist=(props)=>{
    // const deleteitems=(id)=>{
    //     console.log("deleted");
    // }

    return(
        <React.Fragment>
           <div className="todo_style"  >
               <i className="fa fa-times" onClick={()=>
               {
                   props.onSelect(props.id)
               }} aria-hidden="true" />
               <li>{props.text }</li>
               
           </div>
          
        </React.Fragment>
        );

}
export default Todolist;