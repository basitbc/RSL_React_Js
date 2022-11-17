window.onload = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {
        let Container = document.createElement('div');
    Container.innerHTML = `<div
    style="border:1px solid grey; border-radius: 10px; display: flex; flex-direction: row; height:45px ; width:500px; background-color: purple;">
    <div style="display: flex; width: 7%; height:100%; align-items: center; justify-content: center;">
        <input style="height:20px ; width: 15px; align-items: center;" type="checkbox">
    </div>
    <input
        style=" font-size: 17px; padding:0; border:none ; background: transparent; height:100% ; width:86%; color: white;"
        value=${task} />
    <i style="font-size: 20px; color: rgb(14, 1, 21); display: flex; width: 7%; height:100%; align-items: center; justify-content: center;"
        class="fa fa-trash" aria-hidden="true"></i>

</div>
    `;
    document.getElementById('targetDiv').append(Container);
    });
    // TODO create new element
  };

function addlist(){
    event.preventDefault();
    event.stopPropagation();

    

    let task = document.getElementById('taskField').value;
    // /get and check from localStorage
    let tasksinfo = JSON.parse(localStorage.getItem('tasks'));
  
    if (tasksinfo) {
      // if tasks.includes(task) aslert('Tasks already exist);
      tasksinfo.push(task);
    } else {
      tasksinfo = [task];
    }
  
    localStorage.setItem('tasks', JSON.stringify(tasksinfo, task));


    let Container = document.createElement('div');
    Container.innerHTML = `<div
    style="border:1px solid grey; border-radius: 10px; display: flex; flex-direction: row; height:45px ; width:500px; background-color: purple;">
    <div style="display: flex; width: 7%; height:100%; align-items: center; justify-content: center;">
        <input style="height:20px ; width: 15px; align-items: center;" type="checkbox">
    </div>
    <input
        style=" font-size: 17px; padding:0; border:none ; background: transparent; height:100% ; width:86%; color: white;"
        value=${task} />
    <i style="font-size: 20px; color: rgb(14, 1, 21); display: flex; width: 7%; height:100%; align-items: center; justify-content: center;"
        class="fa fa-trash" aria-hidden="true"></i>

</div>
    `;
    document.getElementById('targetDiv').append(Container);

}
