import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Listitem from './Listitem';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentitem: {
                text: '',
                key: '',
                done: false
            }
        }
        this.handleinput = this.handleinput.bind(this);
        this.additem = this.additem.bind(this);
        this.deleteitem = this.deleteitem.bind(this);
        this.setupdate = this.setupdate.bind(this);
        this.setdone = this.setdone.bind(this);
    }

    handleinput(e) {
        this.setState(
            {
                currentitem: {
                    text: e.target.value,
                    key: Date.now(),
                    done: false
                }

            }
        )
    }

    additem(e) {
        console.log(this.state.currentitem);
        e.preventDefault();
        const newitem = this.state.currentitem;
        if (newitem.text !== "") {
            const newitems = [...this.state.items, newitem];
            this.setState({
                items: newitems,
                currentitem: {
                    text: '',
                    key: '',
                    done: false
                }
            })

        }

    }

    setupdate(text, key) {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }

    setdone(done, key) {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.done = !(item.done);
            }
        })
        this.setState({
            items: items
        })
    }

    deleteitem(key) {
        const filtereditems = this.state.items.filter(item =>
            item.key !== key);
        this.setState(
            {
                items: filtereditems
            }
        )

    }

    render() {
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

