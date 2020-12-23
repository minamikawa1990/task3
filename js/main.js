'use strict'

{
    const btn = document.getElementById('add');
    const ul = document.querySelector('ul');
    const input_task = document.getElementById('input');
    const test = document.getElementById('test');

    // function chenge(){
    //     if(test.classList.contains('complete'))
    // }
   
    
    
    btn.addEventListener('click', () => {
       
        const li = document.createElement('li');
        const working = document.createElement('button');
        const remove = document.createElement('button');

        li.textContent = input_task.value;
        working.textContent = "完了";
        remove.textContent = "削除"
        working.id = "dones";
        ul.appendChild(li);
        li.appendChild(working);
        li.appendChild(remove);
        
        input_task.value = "";
        
    })

    test.addEventListener('click', () => {
       test.textContent = "bbb";
        
        
    })

   
}