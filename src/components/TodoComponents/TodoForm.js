import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
          };
      
          
        }
      
        handleChanges = e => {
        
          this.setState({
            newItem: e.target.value
          });
        };
      
        
        handleSubmit = e => {
          e.preventDefault();
      
         
          this.props.addItem(this.state.newItem);
          this.setState({ newItem: "" });
          console.log("it's working!");
        };
      
        render() {
          console.log("rendering form");
          return (
            <div>
        <form onSubmit={this.handleSubmit}>
          
          <label htmlFor="item">New Task: </label>
          <input
            type="text"
            placeholder="...todo task here"
            name="item"
            id="item"
            value={this.state.newItem}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
          <button className="clear" onClick={this.props.clearDone}>
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}
      
      export default TodoForm;