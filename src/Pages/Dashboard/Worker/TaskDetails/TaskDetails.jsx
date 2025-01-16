import SubmissionForm from '@/Components/Dashboard/Worker/TaskDetails/SubmissionForm';
import TaskInfo from '@/Components/Dashboard/Worker/TaskDetails/TaskInfo';
import React from 'react';

const TaskDetails = () => {
   return (
      <div className='flex justify-between item center w-11/12 mx-auto'>
         <TaskInfo></TaskInfo>
         <SubmissionForm></SubmissionForm>
      </div>
   );
};

export default TaskDetails;