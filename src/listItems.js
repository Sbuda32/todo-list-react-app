import React from 'react'
import './App.css'

class  ListItems extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: this.props.listOfTasks
        };

        this.selectedTaskToDelete = React.createRef(); //Variable to reference a task to be deleted
    }

    //Callback function that creates new task with the list item html tag 
    //@{param: task} - The task to be converted to html list item
    createTasks = ( task ) => {
        //Get the delete function from the parent class, passed through as a property
        const deleteTaskFunc = this.props.deleteTask;
       
        //Return the list item html code with all the necessary attributes
        return <li id={task.toString()} key={task.toString()} onClick={ () => {
            console.log('the ' + task.toString() + ' task has been clicked');
            deleteTaskFunc(task.toString());
        } }> 
        {task} </li>;
    }

    //Render the list of task
    render () {

        //Get the list of tasks from the parent class, through the property value
        const listOfTasks = this.props.listOfTasks;

        //Convert all the items in the list to list item html element's using the Map function
        const itemOnList = listOfTasks.map(this.createTasks);

        //Return all the items convertred and render them to the DOM
        return (
            <ul className="theList" ref={this.selectedTaskToDelete}>{itemOnList}</ul>
        );
    }
}

export default ListItems;