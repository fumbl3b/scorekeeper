import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players'

Meteor.startup(() => {
  
})

let user = {
  name: 'Harry',
  location: 'Philadelphia'
}

let person = {
  ...user,
  age: 30
}

// console.log(person);

let bike = 'Cannondale'

let stuff = {
  bike,
  laptop: 'mac'
}

// console.log(stuff)

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
}

let yearBuilt = 1920

let newHouse = {
  ...house,
  bedrooms: 3,
  yearBuilt,
  flooring: 'Carpet'
}

console.log(newHouse)