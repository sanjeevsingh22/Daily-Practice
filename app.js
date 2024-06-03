const Data="secret information";

class User{
    constructor(name, email){
        this.name= name;
        this.email=email;
    }
    viewData(){
        console.log("data=", Data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "some new value";
    }
}
let student1=new User("sanjeev", "abc@email.com");
let student2=new User("sanjay", "abcde@email.com");
let teacher1= new User("dean", "dean@gmail.com");

let admin1= new Admin("admin","admin@gmail.com");