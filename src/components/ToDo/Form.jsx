import { motion, AnimatePresence } from "motion/react"
import todos from "../../Pages/Todos.jsx";

export default function Form({ setTodos }){
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.target.todo.value;
        console.log(value);
        const newTodo = { title: value, id: self.crypto.randomUUID(), is_completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo,]);
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);
        evt.target.reset();
    }

    return (
        <motion.div 
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: -550, transition: { type: "spring", stiffness: 100, duration: 0.1 }}}
        exit={{ opacity: 0, x: -600 }}
        className="bg-sec rad h-151 w-261.75 drop">
            
            <form onSubmit={handleSubmit} className="grid grid-cols-14 grid-rows-12 ">
                <div className="w-17"/>
                <input type="text" name="todo" placeholder="Title" className="text-text/25 text-5xl font-bold col-start-7 col-span-full row-start-2 focus:outline-none " required={true} />
                <div className="flex flex-row col-start-7 col-span-full row-start-4 gap-y-2">
                    <label className="text-2xl font-JetBrains"> Due Date:
                    </label>
                    <input type="date" className="bg-acc rad p-4 text-hover" required={true} />
                </div>
                <div className="flex flex-col col-start-7 col-span-full row-start-5 gap-y-2">
                    <label className="text-2xl font-JetBrains"> Category:
                    </label>
                    <select aria-placeholder='category'>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                        <option value="school">School</option>
                        <option value="">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="bg-acc rad h-10 w-50.75 text-hover font-JetBrains col-start-11 row-end-10 hover:bg-hover hover:text-text transition-all">Submit</button>
            </form>
        </motion.div>
    )
}

