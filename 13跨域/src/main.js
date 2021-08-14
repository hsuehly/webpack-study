




const xhr = new XMLHttpRequest();

xhr.open('get','/api/users',true);

xhr.onload = function() {
  console.log(xhr.response)
}
xhr.send()