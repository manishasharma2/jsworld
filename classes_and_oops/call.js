function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log('Called');

}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    //current execution context kisi aur fucntion ko pass karta h
    //Also used to store reference
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@google.com', 'ch@i')
console.log(chai);
