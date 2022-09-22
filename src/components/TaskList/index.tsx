import Task from '../Task'

import clipboard from '../../assets/clipboard.svg'

import styles from './index.module.css'

interface TaskProps {
  tasks: Array<Task>,
  onCompleteTask: (id: number) => void,
  onDeleteTask: (id: number) => void
}

interface Task {
  id: number;
  completed: boolean;
  task: string;
}

function TaskList({ tasks, onCompleteTask, onDeleteTask }: TaskProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  function handleCompleteTask(id: number) {
    onCompleteTask(id);
  }

  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <div className={styles.container}>
      <header>
        <p>Tarefas criadas <span className={styles.badge}>{totalTasks}</span></p>
        <p>Concluídas <span className={styles.badge}>{completedTasks} de {totalTasks}</span></p>
      </header>


      {tasks && (
        <ul>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              completed={task.completed}
              task={task.task}
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </ul>
      )}

      {tasks.length === 0 && (
        <div className={styles.empty}>
          <img src={clipboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

    </div>
  );
}

export default TaskList;