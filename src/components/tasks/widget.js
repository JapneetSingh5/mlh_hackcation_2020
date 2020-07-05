import React, { useState } from 'react';
import './styles.css';

function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return <div style={{textDecoration: todo.isDone ? 'line-through' : ''}}className="todo">{todo.text}
  <div>
    <button onClick={() => toggleTodo(index)}>{todo.isDone ? 'Mark Incomplete' : 'Mark Completed'}</button>
    <button onClick={() => deleteTodo(index)}>X</button>
  </div>
  </div>;
}

function TodoForm({ addTodo } ) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Tasks" col="12" />
    </form>
  )
}

function Tasks() {
  const [todos, setTodos] = useState([  //Here, useState is a 'HOOK'. We call it inside a functional component, hooks cannot be used in a class component.
      {
        text: 'Water the plants',   //useState returns a pair: the 'current state value' and a 'function' that lets you update it. 
        isDone: false                               //the current state value is like 'this.state', the function is an event handler, like this.setState, but has subtle differences
      },                                            //=> useState can also be used multiple times in a function, no limit
      {                                             //=> the initial state does not have to be an object like this.state, it can be anything eg. const [count, addCount] = useState(0) that acts as the state for a counter
        text: 'Read a chapter from my book',    //=> the syntax is essentially an application of 'Array Destructuring'
        isDone: false                               //=> 2 rules to know before we dive in further :                                              
      },                                              //1.Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
      {                                               //2.Only call Hooks from React function components.
        text: 'Yoga session at 5:30 pm with Divya', 
        isDone: false
      },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const toggleTodo = index => {
    const newTodos =[...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
    
      <div className="todo-list">
      <h3 style={{padding: 5, fontSize:20}}>Tasks you wish to do &#9829;</h3>
      <TodoForm addTodo={addTodo} />
        {todos.map((text, index) => (
          <Todo key={index} index={index} todo={text} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </div>
    </div>
  );

}

export default Tasks;