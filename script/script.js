let num = localStorage.getItem('barcode');
if(num === 'nodata' || num === null){
  document.getElementById('error').innerHTML = '学生証情報が登録されていません。<br>設定アイコンの新規登録から<br>番号を登録してください。';
  document.getElementById('error').style.display = 'flex';
  document.getElementById('barcode').style.display = 'none';
}else{
  JsBarcode("#barcode", num, {
    format: "codabar",
    lineColor: "#000",
    background: "transparent",
    width:3,
    height:50,
    displayValue: true,
  });
  document.getElementById('error').style.display = 'none';
  document.getElementById('barcode').style.display = 'flex';
}


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

function openCard(){
  let requestFullScreen = document.body.requestFullscreen || document.body.webkitRequestFullscreen;
  requestFullScreen();
  document.getElementById('card').style.display = 'flex';
}

function closeCard(){
  document.exitFullscreen();
  document.getElementById('card').style.display = 'none';
}

function openCardInfoInput(){
  document.getElementById('card_info_input').style.display = 'flex';
  document.getElementById('body').style.overflowY = 'hidden';
  closeSettings();
}

function register(){
  document.getElementById('card_info_input').style.display = 'none';
  document.getElementById('body').style.overflowY = 'auto';
  let studentNum = document.getElementById('studentNum').value;
  let index = document.getElementById('index').value;

  localStorage.setItem('barcode', studentNum + index);

  location.reload();
}

function deleteCardInfo(){
  localStorage.setItem('barcode', 'nodata');
  location.reload();
}

function openAbout(){
  document.getElementById('about').style.display = 'flex';
  document.getElementById('body').style.overflowY = 'hidden';
  closeSettings();
}

function closeAbout(){
  document.getElementById('about').style.display = 'none';
  document.getElementById('body').style.overflowY = 'auto';
}
