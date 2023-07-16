export const boardData = {
  name: 'Developers',
  columns: [
    {
      name: 'Backlog', 
      tasks: [ // columns[columnIdx].tasks[teskIdx].name
        {
          name: 'Update dependencies',
        },
        {
          name: 'Add review feature',
        },
      ],
    },
    {
      name: 'Todo',
      tasks: [
        {
          name: 'Fix modal transition',
        },
      ],
    },
    {
      name: 'In progress',
      tasks: [
        {
          name: 'Create task board',
        },
      ],
    },
    {
      name: 'Complete',
      tasks: [],
    },
  ],
}
