// // Remember the acronym UPS check

// write a function to determine if the 2nd string is an anagram of the first

// // Step One (Understand). We have to understand the problem.
// // 1. What is the unknown?

// return true if the small length array frequency counter pattern matches or is included in the larger

// // 2. What are the data inputs?
// 2 given strings
// // 3. Can you restate the problem in your own words?
// if we break down a string down to a frequency counter pattern in the first sting (made in arr1)
// does the 2nd string (broken into arr2) get included in the first string

// after turning into an array via split("").toLowerCase(), the array that has greater length for be in the for in loop

// // 4. Can the unknown be determined from the data inputs?

// yes

// // 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// sufficient
// // 6. How should I label important pieces of data input that are a part of the problem?
// str1, str2

// // 7. Draw a figure. Introduce suitable notation.
// // 8. Separate the various parts of the condition. Can you write them down?

// // Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// // 9.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// yes frequency counter pattern

// // 10.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// yes
// // 11.    Should you introduce some auxiliary element in order to make its use possible?
// // 12. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// // 13. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?

validAnagram("anagram", "nagaram"); // true

// // 14. Progress to more complex examples. What is your updated plan here to find a solution?

// // 15. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// // Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// // 16.  Can you see clearly that the step is correct?
// pseudo code below
// // IV. 	Step Four (Check). Examine the solution obtained and refactor.
// // 17.  Can you check your result?
// // 18.  Can you check the argument?
// // 19.  Can you derive the result differently?
// // 20.  Can you see it at a glance?
// // 21.  Can you make the code DRYer and refactor?
// // 22.  Can you improve the performance?
// // 23.   How have other people solved this problem?

function validAnagram(str1, str2) {
  let obj1 = {};
  // obj2 = {};
  let arr1 = str1.toLowerCase().split("");
  if (typeof arr1 === "string") {
    for (let val of arr1) {
      obj1[val] = (obj1[value] || 0) + 1;
      console.log(obj1);
    }
  }
}
