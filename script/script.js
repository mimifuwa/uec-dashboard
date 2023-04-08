function clearForm(){
  let form = document.getElementById('search_input');
  let v = form.value;
  window.open('https://www.uec.ac.jp/search/?q=' + v);
  form.value = '';
  return false;
}
