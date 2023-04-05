const addtoToDo = document.querySelector('.addToDo');
const button = document.querySelector('.addtoToDo');

// const task = addtoToDo.value;
const stickbutton = document.querySelector('.addtoStick');
stickbutton.addEventListener('click', function(e){
    e.preventDefault();
    const task = document.querySelector('.inputStyle');
    const newInput = document.createElement('input');
    newInput.setAttribute('type','text');
    newInput.setAttribute('class','domInputStyle');
    newInput.setAttribute('value',task.value);
    
    const newTask = document.querySelector('.newtasks');
    const sticktask = document.createElement('div');
    const deletetask = document.createElement('button');
    deletetask.setAttribute('class','delete');
    deletetask.addEventListener('click',function(){
        sticktask.remove();
    });
    deletetask.textContent = 'Delete';
    sticktask.appendChild(newInput);
    sticktask.appendChild(deletetask);
    newTask.appendChild(sticktask);
    localStorage.setItem('StickTask',newInput);
    // document.body.appendChild(newInput);
});
button.addEventListener('click',function(e){
    e.preventDefault();
    takeNote();
    finalNotes();
});
function takeNote(){
    const desc = document.createElement('input');
    const duetime = document.createElement('input');
    const sbutton = document.createElement('button');
    desc.setAttribute('type', 'text');
    desc.setAttribute('placeholder', 'Add a Description');
    duetime.setAttribute('type', 'time');
    sbutton.setAttribute('type', 'submit');
    sbutton.textContent = "Add it !!";

    desc.setAttribute('class', 'inputStyle');
    desc.setAttribute('id','finalans1');
    duetime.setAttribute('class', 'inputStyle');
    duetime.setAttribute('id','finalans2');
    sbutton.setAttribute('class', 'addtoStick');
    sbutton.setAttribute('id', 'addToDoButton')
    
    const addtoToDoDetails = document.querySelector('.todo');
    addtoToDoDetails.appendChild(desc);
    addtoToDoDetails.appendChild(duetime);
    addtoToDoDetails.appendChild(sbutton);
}

function finalNotes(){
    const fbutton = document.querySelector('#addToDoButton');
    
    fbutton.addEventListener('click', function(e){
        e.preventDefault();
        
        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const label3 = document.createElement('label');
        const task = document.querySelector('.inputStyle');
        label1.setAttribute('class','toDoStyle');
        label2.setAttribute('class','toDoStyle');
        label3.setAttribute('class','toDoStyle');
        label1.textContent = "Task";
        label2.textContent = "Due Time";
        label3.textContent = "Description";
        

        const ans1 = document.querySelector('#finalans1');
        const ans2 = document.querySelector('#finalans2');

        const newInput1 = document.createElement('h2');
        // newInput1.setAttribute('type','text');
        // newInput1.setAttribute('class','toDoStyle');
        newInput1.textContent = task.value;

        const newInput2 = document.createElement('h2');
        // newInput2.setAttribute('type','text');
        // newInput2.setAttribute('class','toDoStyle');
        // newInput2.setAttribute('value',ans1.value);
        newInput2.textContent = ans1.value;

        const newInput3 = document.createElement('h2');
        // newInput3.setAttribute('type','text');
        // newInput3.setAttribute('class','toDoStyle');
        newInput3.setAttribute('value',ans2.value);
        newInput3.textContent = ans2.value;

        const taskbox = document.createElement('div');
        taskbox.setAttribute('class','todoStyle');

        const deletetask = document.createElement('button');
        deletetask.setAttribute('class','delete');
        deletetask.textContent = 'Delete';
        deletetask.addEventListener('click',function(){
            taskbox.remove();
        })
        const addtoToDoDetail = document.querySelector('.ToDoDetails');
        taskbox.appendChild(label1);
        taskbox.appendChild(newInput1);
        taskbox.appendChild(label3);
        taskbox.appendChild(newInput2);
        taskbox.appendChild(label2);
        taskbox.appendChild(newInput3);
        taskbox.appendChild(deletetask);
        addtoToDoDetail.appendChild(taskbox);
        localStorage.setItem('TodoTask',taskbox);
    });
}
const storedTask = document.querySelector('.storedTask');
window.onload = function(){
    localStorage.getItem('TodoTask');
    localStorage.getItem('StickTask');
};
