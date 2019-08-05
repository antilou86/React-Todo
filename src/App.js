import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = [{
      task: '',
      id: Date.now(),
      completed: false
    },
  ]
  }

  render() {
    return (
      <div>
        <h2>ToDo List: MVP</h2>
        <Todo />
        <TodoForm />
      </div>
    );
  }
}

export default App;
