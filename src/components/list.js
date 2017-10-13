/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1;
  let all = [];
  return class List {
    constructor(title) {
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
      this.title = title;
      this.id = id++;
      all.push(this);
    }
    addTask(taskDesc, taskPri) {
      let listObject = document.getElementById(`list-${this.id}`);
      let task = new Task(taskDesc, taskPri, this);
      let taskObject = document.createElement("p");
      taskObject.innerText = `Description: ${taskDesc}, Priority: ${taskPri}`;
      listObject.appendChild(taskObject);
      console.log("listObject", listObject);
    }

    static find(id) {
      return all.find(list => list.id === parseInt(id));
    }

    static all() {
      return all;
    }
  };
})();

document.getElementById("lists").appendChild(listNode);
listNode.innerHTML = `<h3>${list.title}</h3>`;
