

function clearForm(){
  let form = document.getElementById('search_input');
  let v = form.value;
  window.open('https://www.uec.ac.jp/search/?q=' + v);
  form.value = '';
  return false;
}

function changeTheme(){
  let btn = document.getElementById('themeBtn');
  let theme = localStorage.getItem('theme');

  if(theme === 'dark'){
    localStorage.setItem('theme', 'light');
    btn.innerHTML = '<i class="bi bi-brightness-high"></i>';
  }else{
    localStorage.setItem('theme', 'dark');
    btn.innerHTML = '<i class="bi bi-moon"></i>';
  }

  location.reload();
}
