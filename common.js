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
    fetch('https://api.github.com/users').then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        let output = '';
        data.forEach(function (user) {
            output += `<li>${user.url}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(function (err) {
        console.log(err);
    });
}