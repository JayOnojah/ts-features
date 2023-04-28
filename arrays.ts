const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// COMPUTED PROPERTIES
const role = 'host';
const person1 = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  [role]: person1,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen',
};

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj,
//   };
//   copy[k] = v;
//   return copy;
// }

// // const addProp = (obj, k, v) => ({
// //   ...obj,
// //   [k]: v,
// // });

// const res = addProp(team, 'happy', ':)');
