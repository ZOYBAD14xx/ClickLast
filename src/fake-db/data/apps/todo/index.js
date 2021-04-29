import mock from '@/fake-db/mock.js'

// Contact
const data = {
  tasks: [
    
    {
      'id': 23,
      'title': 'Meet Jane ❤️',
      'desc': 'Meet her to get customer requirement',
      'isImportant': true,
      'isStarred': true,
      'tags': ['Sale'],
      'isCompleted': true,
      'isTrashed': false
    },
    {
      'id': 20,
      'title': 'Quotation',
      'desc': 'Wait for finace create quotation and sale send to customer',
      'isImportant': true,
      'isStarred': true,
      'tags': ["Sale", 'Finance', 'Procurement'],
      'isCompleted': false,
      'isTrashed': false
    },
  
    
 
  ],
  taskTags: [
    {
      id: 5,
      text: 'Sale',
      value : 'Sale',
      color: 'primary'
    },
    {
      id: 7,
      text: 'Finance',
      value: 'Finance',
      color: 'warning'
    },
    {
      id: 8,
      text: 'Procurement',
      value: 'Procurement',
      color: 'success'
    },
    {
      id: 11,
      text: 'Design',
      value: 'Design',
      color: 'danger'
    }
  ]
}

// POST : Add new Tasks
mock.onPost('/api/apps/todo/tasks/').reply((request) => {

  // Get task from post data
  const task = JSON.parse(request.data).task

  const length = data.tasks.length
  let lastIndex = 0
  if (length) {
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, {id: task.id}]
})

// GET: Fetch Todos
mock.onGet('api/apps/todo/tasks').reply((request) => {

  const filter = request.params.filter

  const filteredTasks = data.tasks.filter((task) => {

    // If filter == all
    if (filter === 'all') return !task.isTrashed

    // If filter == starred
    if (filter === 'starred') return !task.isTrashed && task.isStarred

    // If filter == important
    if (filter === 'important') return !task.isTrashed && task.isImportant

    // If filter == completed
    if (filter === 'completed') return !task.isTrashed && task.isCompleted

    // If filter == trashed
    if (filter === 'trashed') return task.isTrashed

    else return task.tags.includes(filter)

  })


  return [200, JSON.parse(JSON.stringify(filteredTasks)).reverse()]
})

// GET: Fetch tags
mock.onGet('api/apps/todo/tags').reply(() => {
  return [200, JSON.parse(JSON.stringify(data.taskTags))]
})

// POST: Update Task
mock.onPost(/\/api\/apps\/todo\/task\/\d+/).reply((request) => {

  const taskId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const task = data.tasks.find((task) => task.id == taskId)
  // task.title = JSON.parse(request.data).task.title
  Object.assign(task, JSON.parse(request.data).task)

  return [200, task]
})
