import { connect } from 'react-redux'
import AddPeopleComponent from '../components/AddPeople'
import { addPeople } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (people) => {
    dispatch(addPeople(people))
  }
})

export const AddPeople = connect(() => ({}), mapDispatchToProps)(AddPeopleComponent)
