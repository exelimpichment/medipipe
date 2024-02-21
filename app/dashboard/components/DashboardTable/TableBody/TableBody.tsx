import TableBodyRow from './TableBodyRow';

const tableBodyData = [
  {
    id: 0,
    taskNumber: 1000,
    Title: {
      tag: 'visit',
      text: 'Appointment with John Dou with respiratory disease',
    },
    status: 'pending',
    priority: 'medium',
  },
  {
    id: 1,
    taskNumber: 1001,
    Title: {
      tag: 'visit',
      text: 'Appointment with Johyun Woo with heart disease',
    },
    status: 'Todo',
    priority: 'High',
  },
  {
    id: 2,
    taskNumber: 1002,
    Title: {
      tag: 'visit',
      text: 'Appointment with Johyun Woo with heart disease',
    },
    status: 'Canceled',
    priority: 'Low',
  },
  {
    id: 3,
    taskNumber: 1003,
    Title: {
      tag: 'call',
      text: 'Follow-up call with Mary Smith for check-up',
    },
    status: 'completed',
    priority: 'high',
  },
  {
    id: 4,
    taskNumber: 1004,
    Title: {
      tag: 'visit',
      text: 'Appointment with Dr. Patel for vaccination',
    },
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: 5,
    taskNumber: 1005,
    Title: {
      tag: 'task',
      text: 'Prepare health report for patient evaluation',
    },
    status: 'Todo',
    priority: 'low',
  },
  {
    id: 6,
    taskNumber: 1006,
    Title: {
      tag: 'visit',
      text: 'Appointment with Dr. Rodriguez for diabetes check',
    },
    status: 'completed',
    priority: 'high',
  },
  {
    id: 7,
    taskNumber: 1007,
    Title: {
      tag: 'call',
      text: 'Follow-up call with Emily Davis for prescription renewal',
    },
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: 8,
    taskNumber: 1008,
    Title: {
      tag: 'task',
      text: 'Research new treatments for respiratory illnesses',
    },
    status: 'Todo',
    priority: 'low',
  },

  {
    id: 31,
    taskNumber: 1032,
    Title: {
      tag: 'visit',
      text: 'Appointment with Sarah Johnson for allergy test',
    },
    status: 'pending',
    priority: 'high',
  },
];

const TableBody = () => {
  return (
    <tbody className="">
      {tableBodyData.map((task) => (
        <TableBodyRow key={task.id} />
      ))}
    </tbody>
  );
};

export default TableBody;
