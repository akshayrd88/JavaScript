var users= [];

function usertable(){
    if(localStorage.allusers){
        users= JSON.parse(localStorage.allusers);
    }
    var table= '<table>';
    table += '<th>username</th><th>password</th><th>company</th><th>email</th><th>location</th><th>gender</th>';
    for(var i = 0; i<users.length; i++){
		table += '<tr><td>'+users[i].username+'</td><td>'+users[i].pword+'</td><td>'+users[i].email+'</td><td>'+users[i].location+'</td><td>'+users[i].company+'</td><td>'+users[i].gender+'</td></tr>';
    }
    table += '</table>';
	document.getElementById('finaltable').innerHTML = table;
}

function reset(){
    document.getElementById('input').reset();
}

function validateForm() {
    var x = document.forms["input"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById('emailerr').innerHTML= "Enter a valid Email, Try again!!";
        return false;
    }
}

document.getElementById('btn').addEventListener('click',function(){
    var user={
        'username': document.getElementById('UName').value,
        'password': document.getElementById('pwd').value,
        'company': document.getElementById('company').value,
        'email': document.getElementById('email').value,
        'location': document.getElementById('loc').value,
        'gender': document.querySelector('input[name="gender"]:checked')? document.querySelector('input[name="gender"]:checked').value: ''
    };
    if((user.username) && (user.password) && (user.email) && (user.company) && (user.location) && (user.gender)){
    users.push(user);
    localStorage.allusers= JSON.stringify(users);
    }
    if(user.username == ""){
        document.getElementById('unameerr').innerHTML= "Enter a Username, Try again!!"
    }
    if(user.password == ""){
        document.getElementById('pwderr').innerHTML= "Enter a Password, Try again!!"
    }
    if(user.company == ""){
        document.getElementById('comerr').innerHTML= "Enter a Company, Try again!!"
    }
    if(user.email == ""){
        document.getElementById('emailerr').innerHTML= "Enter a Email, Try again!!"
    }
    else{
        validateForm();
    }
    if(user.location == ""){
        document.getElementById('locerr').innerHTML= "Enter a Location, Try again!!"
    }

usertable();
reset();
    
});

