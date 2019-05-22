import React from 'react'

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: 'hey'
        };
        this.textInputValue = React.createRef();
    }

    handleUserInput = () => {
        const itemText = this.textInputValue.current.value;
        this.setState( ( state ) => {
            state.currentItem = itemText;
            console.log(state.currentItem);
        });
    }

    //Function prevents the submit from reloading page @param: {e}
    addItem = function (e) {
        e.preventDefault();

        //Get item from input box
        const newItem = this.state.currentItem;
        console.log('new item: ' + newItem);

        //Get items in array
        var storedItems = this.state.items;
        console.log(storedItems);

        //Check if the value from the input box is not empty
        if(newItem !== '') {
            //Add new item to list of items
            const newArray = [...storedItems, newItem];
            this.setState( (state) => {
                //Change the state of the array of items
                state.items = newArray;
                console.log(state.items);

                //Clear input box after capturing value from input box
                this.textInputValue.current.value = "";
                console.log(this.textInputValue.current.value);
            });
        }
        
      }.bind(this); //Bind this function, so that "this" can be recognized

    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem} >
                        <input placeholder="Task" onInput={this.handleUserInput} ref={this.textInputValue}/>
                        <button type="submit" onClick={this.addItem}>
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;