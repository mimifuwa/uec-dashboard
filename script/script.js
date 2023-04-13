

function clearForm(){
  let form = document.getElementById('search_input');
  let v = form.value;
  window.open('https://www.uec.ac.jp/search/?q=' + v);
  form.value = '';
  return false;
}

function changeColor(str){
    localStorage.setItem('theme', str);
    location.reload();
}

function openSettings(){
  let settings = document.getElementById('settings');
  let openBtn = document.getElementById('openBtn');
  let closeBtn = document.getElementById('closeBtn');
  settings.style.display = 'flex';
  closeBtn.style.display = 'flex';
  openBtn.style.display = 'none';
}

function closeSettings(){
  let settings = document.getElementById('settings');
  let openBtn = document.getElementById('openBtn');
  let closeBtn = document.getElementById('closeBtn');
  settings.style.display = 'none';
  closeBtn.style.display = 'none';
  openBtn.style.display = 'flex';
}
