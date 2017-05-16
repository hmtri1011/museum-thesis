import fetch from 'isomorphic-fetch'
import config from '../config'

async function fetchAllCategory() {
  try {
    return await fetch(`${config.hostAPI}/api/categories`).then(list =>
      list.json()
    )
  } catch (err) {
    throw err
  }
}

export function getAllCategory() {
  return dispatch => {
    fetchAllCategory().then(listItem => {
      dispatch({ type: 'GET_ALL_CATEGORY_SUCCESS', listItem })
    })
  }
}

async function addNewCategory(data) {
  try {
    return await fetch(`${config.hostAPI}/api/categories`, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(newItem => newItem.json())
  } catch (err) {
    throw err
  }
}

export function addCategory(data) {
  return dispatch => {
    addNewCategory({ ...data }).then(newItem => {
      dispatch({ type: 'ADD_CATEGORY_SUCCESS', item: newItem })
    })
  }
}
