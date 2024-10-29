import React from 'react';
import { ITask, IStatus } from "./types";
import { useAppDispatch } from '../app/hooks';
import { updateTaskStatus } from '../lib/api';

interface TaskItemProps {
  task: ITask;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <div key={task.id}>
      <p>{task.content}</p>
      <img
        src={
          task.status === IStatus.unstarted
            ? "https://cdn4.iconfinder.com/data/icons/date-and-time-3/32/109-01-512.png"
            : task.status === IStatus.onProcerss
            ? "https://cdn4.iconfinder.com/data/icons/motorcycle-5/48/recycle-loop-start-cycle-refresh-restart-replay-512.png"
            : "https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-512.png"
        }
      />
      <br />
      <select
        value={task.status}
        onChange={e => dispatch(updateTaskStatus({ id: task.id, status: Number(e.target.value) }))}
      >
        <option value={IStatus.unstarted}>unstarted</option>
        <option value={IStatus.onProcerss}>on process</option>
        <option value={IStatus.completed}>completed</option>
      </select>
    </div>
  );
};
