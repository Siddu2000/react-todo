import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todo";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo, DeleteAll } =
    useTodos();

  const [searchParams] = useSearchParams();
  let todos̥Data = searchParams.get("todos");
  // console.log("todos̥Data:", todos̥Data);

  let filterData = todos;

  if (todos̥Data === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todos̥Data === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul>
      {filterData.map((todo) => {
        return (
          <li
            key={todo.id}
            className="grid grid-cols-3 items-center w-96 min-h-24 border-b border-gray-300"
          >
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              className=" h-5 w-5 text-white checked:line-through checked:decoration-gray-800"
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className="checked:line-through  checked:decoration-red-600"
            >
              {" "}
              {todo.task}{" "}
            </label>

            {todo.completed && (
              <button
                type="button"
                className="px-4 my-2  text-[#FFF9F9] bg-[#D14D72] cursor-pointer inline-block justify-self-center"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
      <button
        type="button"
        className="px-2 my-2 bg-red-400 rounded-sm text-yellow-50 ml-80"
        onClick={() => DeleteAll()}
      >
        Delete All
      </button>
      <div className="max-w-lg mx-auto p-8">
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
          <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Why do they call it Ovaltine?
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
            <h1>Good Things </h1>
            <h2>Hurts</h2>
          </div>
        </details>
      </div>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Social Security Number
          </span>
          <input
            className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-cyan-300 "
            placeholder="000 000 000"
          />
          <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
            We need this to steal your identity.
          </p>
        </label>
      </form>
      <div className="group flex items-center 2xl:bg-slate-800 sm:bg-red-300 min-[320px]:text-center max-[600px]:bg-sky-300">
        <img
          className="shrink-0 h-12 w-12 rounded-full"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="ltr:ml-3 rtl:mr-3">
          <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
            johnyy
          </p>
          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
            depp
          </p>
        </div>
        {/* <p className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
">
  Well, let me tell you something, funny boy. Y'know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
  Well, let me tell you something, funny boy. Y'know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
  Well, let me tell you something, funny boy. Y'know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
</p> */}
      </div>
    </ul>
  );
};

export default Todos;
