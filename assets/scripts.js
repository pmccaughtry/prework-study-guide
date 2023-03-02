var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

function selectTopic(topic) {
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here we list the topics:');

listTopics();

console.log('Here we select a topic at random from topics:');

selectTopic(randomTopic);