// const { read } = require('fs')
// const fs = require('fs/promises')

// fs.readFile('./files/files.txt', 'utf-8')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => console.log(error))

// const fileOperation = async (filePath, action = 'read', data = '') => {
//   switch (action) {
//     case 'read':
//       const text = await fs.readFile(filePath, 'utf-8')
//       console.log(text)
//       break

//     case 'add':
//       const add = await fs.appendFile(filePath, data)

//       break
//   }
// }

// fileOperation('./files/files.txt', 'add', '\n катя')
console.log(__dirname)
