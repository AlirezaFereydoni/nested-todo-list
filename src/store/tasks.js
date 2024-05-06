import { action, makeObservable, observable } from 'mobx';
import { v4 } from 'uuid';
class TasksStore {
  tasks = {
    1: {
      id: 1,
      parentId: null,
      text: '',
      subTasks: {},
      priority: 1,
    },
  };

  constructor() {
    makeObservable(this, {
      tasks: observable.deep,
      setAction: action,
      addTask: action,
      editText: action,
      editPriority: action,
      deleteTask: action,
    });
  }

  setAction(id, tasks, action) {
    if (tasks[id]) {
      action(tasks[id], tasks);
    }

    Object.values(tasks).forEach(task => {
      if (task.subTasks) {
        this.setAction(id, task.subTasks, action);
      }
    });
  }

  addTask(text, parentId) {
    const initialTask = {
      id: v4(),
      parentId: null,
      text,
      subTasks: {},
    };

    if (!parentId) {
      this.tasks[initialTask.id] = { ...initialTask, priority: Object.keys(this.tasks).length + 1 };
      return;
    }

    this.setAction(parentId, this.tasks, task => {
      return (task.subTasks[initialTask.id] = {
        ...initialTask,
        parentId,
        priority: Object.keys(task.subTasks).length + 1,
      });
    });
  }

  editText(editedText, id) {
    this.setAction(id, this.tasks, task => (task.text = editedText));
  }

  editPriority(editedPriority, id) {
    console.log({ editedPriority, id });
    this.setAction(id, this.tasks, task => (task.priority = editedPriority));
  }

  deleteTask(taskId) {
    this.setAction(taskId, this.tasks, (_, tasks) => {
      delete tasks[taskId];
    });
  }
}

export default new TasksStore();
