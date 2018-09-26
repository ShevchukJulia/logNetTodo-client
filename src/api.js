export const createTask = (task) =>
  fetch("http://localhost:8080/todo/task", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(response => response.json())
    .catch(error => console.log('Request failed', error));


export const fetchAllTasks = () =>
  fetch("http://localhost:8080/todo/task")
    .then(response => response.json())
    .catch(error => console.log('Request failed', error));

export const changeTask = task =>
  fetch("http://localhost:8080/todo/task", {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(response => response.json())
    .catch(error => console.log('Request failed', error));


export const deleteTask = id =>
  fetch("http://localhost:8080/todo/task/" + id, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => console.log('Request failed', error));
