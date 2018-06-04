var users= [];

document.getElementById('btn').addEventListener('click',function(){
    var user={
        'username': document.getElementById('fName').value,
        'lastname': document.getElementById('lName').value,
        'organisation': document.getElementById('org').value,
        'email': document.getElementById('email').value,
        'location': document.getElementById('loc').value,
        'gender': document.getElementById('female').value,
        'gender': document.getElementById('male').value
    };
    users.push(user);
    localStorage.allusers= JSON.stringify(users);
});

