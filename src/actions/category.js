import fetch from 'isomorphic-fetch'

export async function getAllCategory() {
  try {
    return await fetch('http://localhost:6060/api/categories').then(list =>
      list.json()
    )
  } catch (err) {
    throw err
  }
}

export async function addNewCategory(data) {
  try {
    return await fetch('http://localhost:6060/api/categories', {
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
