import React from 'react';
import './listitem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Listitem(props)
{
    const items =props.items;
    const listitem =items.map(
        item => 
        {
            return<div className ="list" key={item.key}>
                <p>
                    <input type="text" 
                    id={item.key} 
                    value={item.text}
                onChange={
                    (e)=>{props.setupdate(e.target.value,item.key)}
                }
                />
                <span>
                    <FontAwesomeIcon className ="faicons" icon="trash"
                    onClick={()=> props.deleteitem(item.key)}/>
                    <input type="checkbox"
                    id={item.key} 

                     onChange={
                        (e)=>{
                            console.log("change")
                            props.setdone(e.target.value,item.key)}
                     }
                    />
                    
                </span>
                </p>
                </div>
        }
    )
    return(
    <div> {listitem}</div>
       
    )
}



export default Listitem
