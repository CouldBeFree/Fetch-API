document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button3').addEventListener('click', getJson);

function getText() {
    fetch('test.txt').then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    })
}

function getJson() {
    fetch('https://api.github.com/users').then( res => res.json()
    ).then(data => {
        console.log(data);
        let output = '';
        data.forEach(function (user) {
            output += `<li>${user.url}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err));
}

/*const sayHello = function () {
    console.log('Hello');
};*/

/*
const hello = () => {
  console.log('Hello');
};

const sayHello = (name, secondName) => console.log(`Hello ${name} ${secondName}`);

sayHello('Sasha', 'Zoria');*/

const users = ['Nathan', 'John', 'Brad'];

/*const nameLength = users.map((name)=>{
   return name.length;
});*/

const nameLength = users.map(name => name.length);

console.log(nameLength);