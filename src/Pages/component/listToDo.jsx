import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../slice/todo.slice";
import { useState } from "react";

const ListToDo = () => {
  const todos = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState({
    id: "",
    canEdit: false,
  });

  const [todo, setToDo] = useState();

  const onDeleteClick = (item) => {
    dispatch(removeTodo(item.id));
  };

  const onEditClick = (item) => {
    console.log("Inside Edit click");
    setIsEdit({ id: item.id, canEdit: true });
    const todo = {
        id:item.id,
        title:item.title,
        description:item.description
    }
    setToDo(todo)
  };

  console.log("isEdit",isEdit);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setToDo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSaveClick = () => {
    console.log("Inside Edit",todo);
    dispatch(editTodo(todo));
    
    setIsEdit({
        id:'',
        canEdit:false
    })
  };
  return (
    <>
      <div className="container max-w-md mx-auto py-8 bg-gray-100">
        <ul className="space-y-4">
          {todos.map((item) => {
            return (
              <li key={item.id} className="flex justify-between items-center">
                {item.id === isEdit?.id ? (
                  <div>
                    <input type="text" name="title" value={todo.title} onChange={onInputChange} />
                    <input type="text" name="description" value={todo.description} onChange={onInputChange} />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                )}

                <div>
                  {item.id === isEdit?.id && isEdit.canEdit ? (
                    <button onClick={onSaveClick} className="px-3 py-1 bg-green-500 text-white rounded-md mr-2">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => onEditClick(item)} className="px-3 py-1 bg-yellow-500 text-white rounded-md mr-2">
                      Edit
                    </button>
                  )}
                  <button onClick={() => onDeleteClick(item)} className="px-3 py-1 bg-red-500 text-white rounded-md">
                    Delete
                  </button>
                </div>
                <p></p>
                <p></p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListToDo;
