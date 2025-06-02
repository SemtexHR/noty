import "../../Style.css";
import { useState,useEffect } from "react";
import Form from "./Form";
import { motion, AnimatePresence } from "motion/react";

function Item({ item, onRemove }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={item.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            onAnimationComplete={(definition) => {
              if (definition === "exit") {
                onRemove(item.id);
              }
            }}
            className="bg-white rad w-91 h-29.5 flex justify-between items-center"
          >
            <h1 className="text-lg">{item.title}</h1>
            <hr></hr>
            <button onClick={handleDelete} className="">
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-2" />
    </>
  );
}

function TODOList({ todos, setTodos }) {
  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    const updatedTodos = JSON.stringify(
        todos.filter((t) => t.id !== id)
    );
    localStorage.setItem("todos", updatedTodos);
  };

  return (
    <div className="overflow-y-auto h-122.5">
      {todos.map((item) => (
        <Item key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
}

function ToDo() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  console.log(todos);
  const [isFVisible, setIsFVisible] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="block absolute">
      <div className="flex flex-row">
        <motion.div
          className="bg-main rad h-151 w-101.25 flex flex-col drop z-10"
          animate={{
            x: isFVisible ? -150 : 125,
            transition: { type: "spring", stiffness: 100, duration: 0.1 },
          }}
        >
          <motion.button
            className="rad bg-secondary text-white p-2"
            onClick={() => setIsFVisible(!isFVisible)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Add todo
          </motion.button>
          <div className="h-11"/>
          <TODOList todos={todos} setTodos={setTodos} />
        </motion.div>
        <div>
          <AnimatePresence>
            {isFVisible && <Form setTodos={setTodos} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
