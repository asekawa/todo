import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Listitem from './Listitem';
import {library} from "@fortawesome/fontawesome-svg-core";
import{faTrash} from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
       items:[],
       currentitem:{
         text:'',
         key:''
       }
    }
    this.handleinput=this.handleinput.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteitem=this.deleteitem.bind(this);
    this.setupdate=this.setupdate.bind(this);
    this.setdone=this.setdone.bind(this);
  }

  handleinput(e)
  {
    this.setState(
      {
        currentitem:{
          text:e.target.value,
          key:Date.now()
        }

      }
    )
  }
  additem(e)
  {
    e.preventDefault();
    const newitem =this.state.currentitem;
    if(newitem.text!==""){
      const newitems=[...this.state.items,newitem];
    this.setState({
      items:newitems,
      currentitem:{
        text:'',
        key:''
                 }
                }) 
  
            }

    }
    setupdate(text,key){
      const items=this.state.items;
      items.map(item=>{
        if(item.key==key)
        {
          item.text=text;
        }
      })
      this.setState({
        items:items
      })
    }
    setdone(text,key){
      const items=this.state.items;
      items.map(item=>{
        if(item.key==key)
        {
          return <div style={{ textDecoration:"line-through"}}>{item.text=text} </div>
          
        }
      })
      this.setState({
        items:items
      })
    }
  
    deleteitem(key)
    {
      const filtereditems=this.state.items.filter(item =>
       item.key!==key);
        this.setState(
          {
            items:filtereditems
          }
        )
        
    }
  render(){
  return (
    <div className="app">
      <header>
      <form id="to-do" onSubmit={this.additem}>
        <input type="text" placeholder="enter-text"
        value={this.state.currentitem.text}
        onChange={this.handleinput}/>
        <button type="submit">Add</button>
        </form>
    </header>
    <Listitem items={this.state.items}
    deleteitem={this.deleteitem}
    setupdate={this.setupdate}
    setdone={this.setdone}
    />
      </div>

    )
  
 
}
}

export default App;

