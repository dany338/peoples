import * as types from '../constants/ActionTypes'

const nextPeopleId = 0

export const addMessage = (people) => ({
  type: types.ADD_PEOPLE,
  id: nextPeopleId++,
  people
})

export const populatePeoplesList = peoples => ({
  type: types.PEOPLES_LIST,
  peoples
})
