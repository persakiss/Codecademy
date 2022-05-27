let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let count = 0;

// Iterate through storyWords array with a invocation of forEach() method, given a callback function with parameter 'word'
storyWords.forEach((word) => {
  count++;
});

// console.log(count);

// Iterate through storyWords array with a invocation of filter() method, given a callback function with parameter 'word'
storyWords.filter((word) => {
  /*
  if(word !== unnecessaryWord) {
    return word;
  }
  */ // Cleaner way:
  return word !== unnecessaryWord;
});

// Iterate through storyWords array with a invocation of map() method, given a callback function with parameter 'word'
storyWords.map((word) => {
  /* if(word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  } 
  */ // Cleaner way:
  (word === misspelledWord) ? 'beautiful' : word;
});

// Declare badWordIndex variable the result of iterate through storyWords array with a invocation of findIndex() method, given a callback function with parameter 'word'
let badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});


// Change the word using the callback function 
storyWords[badWordIndex] = 'really'

// Returns true if all words are under length
let lengthCheck = storyWords.every((word) => {
    (word.length < 10) ? true : false;
  })


  // Locate the index of the word longer than specified length, return it
let longWordIndex = storyWords.findIndex((word) => {
    return word.length > 10;
})

// Replace the value
storyWords[longWordIndex] = 'dazzling';


console.log(storyWords.join(' '))