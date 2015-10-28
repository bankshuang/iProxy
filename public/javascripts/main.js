window.onload = function () {
  var xhr;
  if (window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }else{
    xhr = new ActiveXObject('MicroSoft.XMLHttp');
  }
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
      if (xhr.status == 200){
        var el  = document.createElement('p');
        var tn = document.createTextNode(xhr.responseText);
        el.appendChild(tn);
        document.body.appendChild(el);
      }
    }
  }
  xhr.open('GET', 'http://127.0.0.1:8300/summary');
  xhr.setRequestHeader('X-User-Token', 'abc123');
  xhr.send();
}