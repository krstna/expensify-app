
// const person={
//     name: 'Andrew',
//     age: 32,
//     location: {
//         city: 'Melbourne',
//         temp: 73
//     }
// };

// const {name:firstName = 'Anonymous', age}= person;
// console.log(`${firstName} is ${age}` );

// const {city,temp: temperature} = person.location;
// if(city, temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'The Secret',
//     author: 'Rhonda Byrne',
//     publisher:{
//         name: 'Akarshan'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
//Array Destructuring
//

const address= ['16 Woodvale Grove', 'Essendon', 'VIC', 3040];

const [, city, state='New York'] = address;

console.log(`You are at ${city}, ${state}`);

const item= ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];

const[itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);