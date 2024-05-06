import { observer } from 'mobx-react';
import { Task } from './components/task';
import TaskStore from './store/tasks';
import Styles from './app.module.css';

const renderTasks = tasks => {
  return (
    <>
      {Object.values(tasks)
        .sort((a, b) => a.priority - b.priority)
        .map(item => (
          <Task
            key={item.id}
            value={item.text}
            onChange={e => TaskStore.editText(e.target.value, item.id)}
            onAddSubTask={() => TaskStore.addTask('', item.id)}
            onDelete={() => TaskStore.deleteTask(item.id)}
            onHighPriority={() => TaskStore.editPriority(item.priority - 2, item.id)}
            onLowPriority={() => TaskStore.editPriority(item.priority + 2, item.id)}
          >
            {renderTasks(item.subTasks)}
          </Task>
        ))}
    </>
  );
};

const App = observer(() => {
  console.log(TaskStore.tasks);
  return (
    <div className={Styles.container}>
      <h1>DigiExpress Nested TodoList</h1>
      <button className={Styles['add-new']} onClick={() => TaskStore.addTask('')}>
        Add New Task
      </button>
      {renderTasks(TaskStore.tasks)}
    </div>
  );
});

export default App;
