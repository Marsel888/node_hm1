const { json } = require('express/lib/response')
const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'bd.json')
const { v4: uuidv4 } = require('uuid')

async function listContacts() {
  const list = await fs.readFile(contactsPath, 'utf-8')

  return JSON.parse(list)
}

async function getContactById(contactId) {
  const list = await fs.readFile(contactsPath, 'utf-8')

  const filter = await JSON.parse(list).find((item) => item.id === contactId)

  return filter
}

async function removeContact(contactId) {
  const list = await fs.readFile(contactsPath, 'utf-8')
  const listParse = JSON.parse(list)
  const idx = JSON.parse(list).findIndex((item) => item.id === contactId)

  const filter = listParse.filter((_, index) => index !== idx)

  await fs.writeFile(contactsPath, JSON.stringify(filter))

  return listParse[idx]
}

async function addContact(name, email, phone) {
  const id = uuidv4()
  const list = await fs.readFile(contactsPath, 'utf-8')

  const newListItem = { id, name, email, phone }
  const newBd = JSON.parse(list)

  newBd.push(newListItem)
  await fs.writeFile(contactsPath, JSON.stringify(newBd))

  return newBd
}

module.exports = { listContacts, getContactById, removeContact, addContact }
