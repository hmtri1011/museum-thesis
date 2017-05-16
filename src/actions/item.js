import fetch from 'isomorphic-fetch'
import config from '../config'

async function getAllItem() {
  try {
    return await fetch(`${config.hostAPI}/api/items`).then(res => res.json())
  } catch (err) {
    throw err
  }
}

async function upload(file) {
  try {
    const data = new FormData()
    data.append('file', file)
    return await fetch(`${config.hostAPI}/api/upload/local`, {
      method: 'POST',
      body: data
    }).then(response => response.json())
  } catch (err) {
    throw err
  }
}

async function addItem(item) {
  try {
    return await fetch(`${config.hostAPI}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(response => response.json())
  } catch (err) {
    throw err
  }
}

export function addNewItem(item) {
  return async dispatch => {
    const image = await upload(item.image)
    const itemInfo = { ...item, image }
    console.log(itemInfo)
    addItem(itemInfo).then(newItem => {
      dispatch({ type: 'ADD_ITEM_SUCCESS', item: newItem })
    })
  }
}

export function getAllItemSuccess() {
  return dispatch => {
    getAllItem().then(items => {
      console.log(items)
      dispatch({ type: 'GET_ALL_ITEMS_SUCCESS', items })
    })
  }
}
