class App {
  //your code here!
  constructor() {
    this.formSubmit = document.getElementById("create-list-form");
    this.listItem = document.getElementById("new-list-title");
    this.formSubmit.addEventListener("submit", e => this.createNewList(e));
    this.taskForm = document.getElementById("create-task-form");
    this.taskForm.addEventListener("submit", e => this.findList(e));
    this.listNodeId = 0;
  }

  createNewList(e) {
    e.preventDefault();
    const listName = e.target[0].value;
    const list = new List(listName);
    let listNode = document.createElement("div");
    listNode.setAttribute("data-id", `${list.id}`);
    e.target[0].value = "";
    document.getElementById("lists").appendChild(listNode);
    listNode.innerHTML = `<h1>${list.title}</h1>`;
    listNode.id = `list-${list.id}`;
    let newSelect = document.createElement("option");

    newSelect.addEventListener("change", e => {
      console.log(e.target);
    });
    document.getElementById("parent-list").appendChild(newSelect);
    newSelect.value = `${list.id}`;
    newSelect.innerText = listName;
  }

  findList(e) {
    e.preventDefault();
    let foundList = List.find(e.target.children[1].value);
    console.log(foundList);
    let taskDesc = e.target.children[3].value;
    let taskPri = e.target.children[5].value;
    foundList.addTask(taskDesc, taskPri);
  }

  render() {
    //your code here as well
  }
}

// formSubmit.addEventListener("submit", () => {
//   console.log(e.target[0].value);
// });
