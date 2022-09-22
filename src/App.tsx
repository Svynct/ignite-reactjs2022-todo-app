import { useState } from 'react'

import Header from './components/Header'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'

import styles from './App.module.css'

interface Task {
  id: number;
  completed: boolean;
  task: string;
}

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const orderedTasks = tasks.sort((a, _) => {
    if (!a.completed) {
      return -1;
    }
    return 1;
  })

  function handleCreateTask(task: string) {
    const newTask = {
      id: tasks.length + 1,
      task: task,
      completed: false
    }
    setTasks(prevState => [...prevState, newTask]);
  }

  function handleCompleteTask(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onCreateTask={handleCreateTask} />
      </div>

      <div className={`${styles.wrapper} ${styles.taskList}`}>
        <TaskList
          tasks={orderedTasks}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  )
}

export default App
