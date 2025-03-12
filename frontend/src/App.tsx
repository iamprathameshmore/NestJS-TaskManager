import { useEffect, useState } from "react";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<any[]>([]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const postRequestPayload = {
      task: task,
      author: author,
      due_date: date,
    };

    try {
      const response = await fetch("http://localhost:3000/task/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postRequestPayload),
      });

      const result = await response.json();
    
      if (result.success == true) {
        alert("Task Added Successfully");
        fetchTasks();
      } else {
        alert("Failed to add task");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setTask("");
      setAuthor("");
      setDate("");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/task/");
      const data = await response.json();

      if (data.success) {
        setTaskList(data.data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center p-5">
        Hello, Iamprathameshmore
      </div>

      <div className="w-full flex justify-center items-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg border border-gray-200 p-6 justify-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Task</h2>
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Task</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task name"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">End Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      </div>



      <div className="p-5">
        {taskList.length === 0 ? (
          <>No tasks available</>
        ) : (
          <ul className="space-y-4">
            {taskList.map((item) => (
              <li
                key={item.id}
                className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.task.task}</h3>
                <p className="text-gray-600">
                  <span className="font-medium">Author:</span> {item.task.author}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Due Date:</span>{" "}
                  {new Date(item.task.due_date).toDateString()}
                </p>
              </li>
            ))}
          </ul>

        )}
      </div>
    </>
  );
}
