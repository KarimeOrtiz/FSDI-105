//create the user constructor

/*function User(fname, lname, email, password, payment, color){
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.password = password;
    this.payment = payment;
    this.color = color;
}*/

class User {
    constructor(fname, lname, age, address, email, password, payment, color) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.address = address;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.color = color;
    }
}

//create the register function 

function register(){
    //get the values from the inputs
    let name = $("#txtFirstName").val();;
    let last = $("#txtLastName").val();
    let age = $("#txtAge").val();
    let add = $("#txtAddress").val();
    let email = $("#txtEmail").val();
    let pass = $("#txtPassword1").val();
    let pay = $("#txtPayment").val();
    let col = $("#txtColor").val();

    //create the obj
    let user = new User(name, last, age, add, email, pass, pay, col);

    //display the user on the console
    console.log(user);

}

function init(){
    //hook events
}

window.onload = init;

//jquery vs javascript
//document.getElementById("txtFirstName").value;
//$("#txtFirstName").val();

//document.getElementById("txtLastName").style.display="none";
//$("txtLastName").hide();


