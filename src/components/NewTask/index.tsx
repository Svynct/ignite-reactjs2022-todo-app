import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import plus from '../../assets/plus.svg'

import styles from './index.module.css'

interface NewTaskProps {
  onCreateTask: (task: string) => void;
}

function NewTask({ onCreateTask }: NewTaskProps) {
  const [task, setTask] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(task);
    setTask('');
  }

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor, informe a tarefa que você deseja adicionar.')
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleCreateTask}
    >
      <input
        value={task}
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button className={styles.button}>
        Criar
        <img src={plus} alt="add" />
      </button>
    </form>
  );
}

export default NewTask;