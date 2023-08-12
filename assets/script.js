// In JS, we declare a variable using var. After var keyworkd, we give the variable a name that's unique
// === means strict equality to see if 2 values are equal and returns a boolean in result


var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {

    for (var x = 0; x < topics.length; x++) {

      console.log(topics[x]);
    }
  }



function selectTopic() {
    if (randomTopic === 'HTML') {

    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');

    }
}


// Calling Functions
listTopics()
console.log('Which topic should we study first?');
selectTopic()

