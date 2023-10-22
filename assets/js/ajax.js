function textAjax(){
    const request= new XMLHttpRequest();
    const url='./contenidosh.html';

    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            document.getElementById('container').innerHTML=this.responseText;
            
        }
    }

    request.open("GET", url);
    request.send();

}