import Counter from "./components/counter/Counter";
import CounterBetter from "./components/counter/CounterBetter";
import TodoApp from "./components/todos/TodoApp";


export default function App() {
  console.log('App susikure');
  return (
    <div className='App container mx-auto'>
      <h1 className="text-3xl mb-10">Use Reduce</h1>
      <div className="flex gap-2">
    {/* <Counter /> */}
    {/* <CounterBetter /> */}
    <TodoApp />
    </div>
    </div>
  );
}
