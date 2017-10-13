/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1;
  return class Task {
    constructor(description, priority, list) {
      this.description = description;
      this.priority = priority;
      this.list = list;
      this.id = id++;
      //your code here
    }
  };
})();
