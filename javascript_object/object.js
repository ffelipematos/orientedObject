class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'acabou de fazer login');

        return this;
    }
    logout(){
        console.log(this.email, 'acabou de sair')

        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'a pontuação agora é: ', this.score);

        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('john@email.com', 'John');
var userTwo = new User('mark@email.com', 'Mark');
var admin = new Admin('admin@email.com', 'Felipe');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);

// userOne.login().updateScore().updateScore().logout(); Method Chaining ----------------- >