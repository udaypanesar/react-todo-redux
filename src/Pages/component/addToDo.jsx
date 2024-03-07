import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, clearAllTodo } from "../slice/todo.slice";

const AddToDo = () => {
  const [todo, setToDo] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setToDo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSaveClick = () => {
    const payload = {
      ...todo,
      id: uuidv4(),
      createdAt: Date.now(),
    };
    dispatch(addTodo(payload));
    
    setToDo({title: "",
    description: ""})
  };

  const onClearAllClick = () =>{
    dispatch(clearAllTodo())
  }
  
  return (
    <>
        <div className="container  py-8 bg-gray-100 max-w-md mx-auto rounded-md shadow-md">
          <h2 className="text-2xl mb-4">Todo App</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input
              type="text"
              name="description"
              value={todo.description}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              onClick={onSaveClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add Todo
            </button>
            <button
              onClick={onClearAllClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Clear All
            </button>
          </div>
        </div>
    </>
  );
};

export default AddToDo;
