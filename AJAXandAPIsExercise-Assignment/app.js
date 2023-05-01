console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(oneAJSON);
console.log(jokeJS1);

p1.innerText = jokeJS1.setup

p2.innerText = jokeJS1.punchline

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

const activity = get('https://www.boredapi.com/api/activity')

    .then((result) => {
        console.log('Question 2 was successful');
        activityjs2 = result.data
        p3.innerText = activityjs2.type
        p4.innerText = activityjs2.activity
    })
    .catch((err) => {
        console.log('Question 2 Failed to GET');
        console.log(err);
    })

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
async function activityFunc() {
    try {
        const activityjs3 = await axios.get('https://www.boredapi.com/api/activity')
        p5.innerText = activityjs3.data.activity
        p6.innerText = activityjs3.data.type
    } catch (err) {
        console.log('Question 3 failed to get');
        console.log(err);
    }
}
activityFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// https://www.tvmaze.com/api
async function tvMazeFunc() {
    try {
        const finalEp = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes')
        p7.innerText = finalEp.data.embedded.episodes[15].name
        console.log('Question 4 was successful');
    } catch (err) {
        console.log('Question 4 failed to GET');
        console.log(err);
    }
}
tvMazeFunc()
