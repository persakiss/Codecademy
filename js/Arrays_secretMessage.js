let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // remove last entry
secretMessage.push('to', 'program'); // add to the end of the entry
secretMessage[secretMessage.indexOf('easily')] = 'right'; // find the index of the word 'easily' and replace it with 'right'
secretMessage.shift(); // remove first entry
secretMessage.unshift("Programming"); // add to beginning
secretMessage.splice(6, 5, 'know'); // where to start, how many following indices to remove, what to replace with

console.log(secretMessage.join(" ")); // Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to program

