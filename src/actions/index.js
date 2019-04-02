import * as types from '../constants/ActionTypes'

let nextPeopleId = 0

export const addPeople = (people) => ({
  type: types.ADD_PEOPLE,
  id: nextPeopleId++,
  people
})

export const populatePeoplesList = peoples => ({
  type: types.PEOPLES_LIST,
  peoples
})
