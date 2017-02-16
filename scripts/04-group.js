var users = [
  { name: 'Niklas', age: 25, occupation: 'Front end dev' },
  { name: 'Barack', age: 53, occupation: 'President' },
  { name: 'Carl XVI Gustaf', age: 68, occupation: 'Knug' }
]

users.forEach(function (user, i) {
  console.group('User %d', i)
  console.log('name: %s', user.name)
  console.log('age: %d', user.age)
  console.log('occupation: %s', user.occupation)
  console.groupEnd()
})
