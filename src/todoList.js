import React from 'react'
import ReactDOM from 'react-dom'
import ListItems from './listItems'

class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.storedTasks = [];
        //Initialize our state object
        this.state = {
            tasks: [],
            currentTask: ''
        };
        //Create=ing variable for referencing the input box
        this.textInputValue = React.createRef();
    }

    //Function handles user input entered by user in input box
    //Function gets the current latest value in our input box
    handleUserInput = () => {
        //Get current value in the input box
        const itemText = this.textInputValue.current.value;
        
        //Set the state of the current value
        this.setState( ( state ) => {
            //Setting value in our state object
            state.currentTask = itemText;
            console.log(state.currentTask);
    
        }); 
    }

    //Function deletes a task that has been clicked by user, and re-render the page
    //@param - task - The task that has to be deleted
    deleteTask = ( task ) => {
       
        //Variables to represent the current state of the tasks at hand
        let tasks = this.state.tasks, storedTasks = this.storedTasks;
        
        //Get index of task to be removed from the task list
        const index = tasks.indexOf(task);

       //Filter the task that needs to be removed from the task list
        const filterdTask = tasks.filter(( taskInList ) => {
            return  taskInList !== task;
        });
        
        //Remove task from the task list stored in the array's
        tasks.splice(index, 1);
        storedTasks.splice(index, 1);

        //Use set state to change the state of the list of tasks in the array
        this.setState( ( state ) => {
            state.tasks = filterdTask;

            //Render the list of items to the DOM excluding the removed item
            ReactDOM.render( <ListItems listOfTasks={state.tasks} deleteTask={this.deleteTask}/>, document.getElementById('taskList') );
        });
    }

    //Function prevents the submit from reloading page @param: {e}
    addItem = ( e ) => {
        
        //Variables that holds the current task and the stored tasks
        let currentTask = this.state.currentTask, storedTasks = this.storedTasks;

        e.preventDefault();
        
        //Update the array of the stored task with the new task
        storedTasks = [...storedTasks, currentTask];
        const tasks = [...storedTasks]
        
        //Change the array state of the list of tasks
        this.setState( (state) => {
                
                state.tasks = tasks;
                
                //Render the list of tasks with the new task displaying aswell
                ReactDOM.render( <ListItems listOfTasks={state.tasks} deleteTask={this.deleteTask}/>, document.getElementById('taskList') );
        });
    
        //Set the input box to an empty box
       this.textInputValue.current.value = '';
      }

    //Render the to do list component
    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem} >
                        <input placeholder="Task" onInput={this.handleUserInput} ref={this.textInputValue}/>
                        <button id="submit-button" type="submit" onClick={this.addItem}>
                            Add Task
                        </button>
                    </form>
                </div>
                <div id="taskList"></div>
            </div>
        );
    }
}

export default TodoList;