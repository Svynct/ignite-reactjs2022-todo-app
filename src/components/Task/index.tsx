import check from '../../assets/check.svg'
import checked from '../../assets/checked.svg'
import trash from '../../assets/trash.svg'

import styles from './index.module.css'

interface TaskProps {
  id: number;
  completed: boolean;
  task: string;
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function Task({ id, completed, task, onCompleteTask, onDeleteTask }: TaskProps) {
  if (completed) {
    return (
      <div className={styles.container}>
        <span className={styles.checkedIcon}>
          <img src={checked} alt="checked" />
        </span>
        <p className={styles.checked}>{task}</p>
        <span
          className={styles.delete}
          onClick={() => onDeleteTask(id)}
        >
          <img src={trash} alt="delete" />
        </span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <span onClick={() => onCompleteTask(id)}>
        <img src={check} alt="check" />
      </span>
      <p>{task}</p>
      <span
        className={styles.delete}
        onClick={() => onDeleteTask(id)}
      >
        <img src={trash} alt="delete" />
      </span>
    </div>
  );
}

export default Task;