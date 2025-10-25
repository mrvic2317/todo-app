function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('請輸入待辦事項！');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '刪除';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);
    
    input.value = '';
}