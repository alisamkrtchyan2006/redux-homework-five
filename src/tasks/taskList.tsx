import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchTasks } from '../lib/api';
import { TaskItem } from './taskItem';

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks())
  }, []);

  return (
    <>
      <h3>Task List</h3>
      <div id="tasks">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
