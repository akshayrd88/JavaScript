//forward
document.getElementById('reflect').addEventListener('click', function(){
    var str= document.getElementById('myText').value;
    
        window.a=setInterval(function(){  
            if(str.length==0){
                clearInterval(window.a);
                console.log('cleared');
            }
            document.getElementById('myFeed').value += str.slice(0, 1);
            document.getElementById('myText').value=str.replace(str.slice(0, 1), "");
            str = str.replace(str.slice(0, 1), "");
            console.log(str);        
        }, 1000);
                
    //}
});

//backward

document.getElementById('revert').addEventListener('click', function(){
    var str2= document.getElementById('myFeed').value;
     window.b=setInterval(function(){
        if(str2.length==0){
            clearInterval(window.b);
            console.log('cleared');
        }      
        document.getElementById('myText').value += str2.slice(0, 1);
        document.getElementById('myFeed').value=str2.replace(str2.slice(0, 1), "");
        str2 = str2.replace(str2.slice(0, 1), "");
        console.log(str2);
    }, 1000);
});

document.getElementById('pause').addEventListener('click', function(){
    clearTimeout(window.b);
    clearTimeout(window.a);
});

