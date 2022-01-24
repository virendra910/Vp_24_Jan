


function myfun(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let branch = document.getElementById('branch').value;
 
    if(fname.length <= 2){
        alert("First name Invalid");
        return;
    }
    if(lname.length <= 2){
        alert("Last name Invalid");
        return;
    }
    if(branch.length <= 1){
        alert("Branch is Invalid");
        return;
    }

    if(email.length <= 2){
        alert("Email is Invalid");
        return;
    }
   
    document.getElementById('f').innerText =  fname;
    document.getElementById('s').innerText = lname;
    document.getElementById('th').innerText = email,
    document.getElementById('fo').innerText = branch;
}   