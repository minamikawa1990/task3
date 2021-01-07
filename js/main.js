'use strict'

{
    // const radio_all = document.getElementById('radio_all');
    // const radio_working = document.getElementById('radio_working');
    // const radio_complete = document.getElementById('radio_complete');
    // const add = document.getElementById('add');
    // const ul = document.querySelector('ul');
    // const input_task = document.getElementById('input');

    // const li = document.createElement('li');
    // const btn_working = document.createElement('button');
    // const btn_remove = document.createElement('button');

    // function change(){
    //     if(btn_working.textContent === '完了'){
    //         btn_working.textContent = '作業中';
    //     }else if(btn_working.textContent === '作業中'){
    //        btn_working.textContent = "完了";
    //    }
    // }


    // // radioボタンの仕分け関数
    // function complete() {
    //     radio_complete.addEventListener('click', () => {
            
    //     })
    //     if(li.classList.contains('complete') === true) {

    //     }
    // }
    // function working() {
    //     if(li.classList.contains('working') === true) {

    //     }
    // }

    // function all() {
    //     if(li.classList.contains('all') === true) {

    //     }
    // }
    // // ここまで
   
    // add.addEventListener('click', () => {

    //     const li = document.createElement('li');
    //     const btn_working = document.createElement('button');
    //     const btn_remove = document.createElement('button');
    
    //     li.textContent = input_task.value;
    //     btn_working.textContent = "完了";
    //     btn_remove.textContent = "削除"
    //     btn_working.classList.add("working");
    //     ul.appendChild(li);
    //     li.appendChild(btn_working);
    //     li.appendChild(btn_remove);
        
    //     input_task.value = "";
    // })

    // const working = document.getElementsByClassName('working');
    
    // working.addEventListener('click', () => {
    //     change();
    // })

    const ul = document.querySelector('ul');
    const btn = document.getElementById('btn');
    const input = document.getElementById('input')
    const radio_input = document.getElementById('radio_input');
    const li_list = document.querySelector('li');
    const test = document.getElementsByClassName('working');
    const li = document.createElement('li');


    btn.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        li.classList.add('working');
        console.log(test[0]);
    });

    radio_input.addEventListener('click', () => {
        if(li.classList.contains('working') === true) {
            li.textContent = "うんこ";
        }
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        li.classList.add('working');
        
    });





}