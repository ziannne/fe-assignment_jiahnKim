let todos = [], filter = 'all', idCounter = 0;

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  todos.unshift({ id: ++idCounter, text, done: false });
  input.value = ''; input.focus(); render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

function toggleTodo(id) {
  const t = todos.find(t => t.id === id);
  if (t) t.done = !t.done; render();
}

function setFilter(f) {
  filter = f;
  ['all', 'active', 'done'].forEach(k => {
    document.getElementById('f-' + k).classList.toggle('active', k === f);
  });
  render();
}

function render() {
  const list  = document.getElementById('todo-list');
  const stats = document.getElementById('stats');
  const doneCount = todos.filter(t => t.done).length;
  stats.textContent = todos.length ? doneCount + ' / ' + todos.length + ' 완료' : '';

  const visible = todos.filter(t =>
    filter === 'all'  ? true :
    filter === 'done' ? t.done : !t.done
  );

  if (!visible.length) {
    const msgs = {
      all:    '할 일을 추가해 보세요!',
      active: '미완료 항목이 없습니다..',
      done:   '완료된 항목이 없습니다..'
    };
    list.innerHTML = `<div class="empty">${msgs[filter]}</div>`;
    return;
  }

  list.innerHTML = visible.map(t => `
    <div class="item${t.done ? ' done' : ''}">
      <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTodo(${t.id})" />
      <span class="item-text">${escHtml(t.text)}</span>
      <button class="delete-btn" onclick="deleteTodo(${t.id})">삭제</button>
    </div>
  `).join('');
}

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('add-btn');

todoInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTodo();
});

todoButton.addEventListener('click', addTodo);

render();