import * as types from '../constants/ActionTypes'

const peoples = (state = [], action) => {
  switch (action.type) {
    case types.PEOPLES_LIST:
      return action.peoples
    case types.ADD_PEOPLE:
        return state.concat([
          {
            people: action.people,
            id: action.id
          }
        ])
    default:
      return state
  }
}

export default peoples
