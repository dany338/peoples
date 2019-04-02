import { connect } from 'react-redux'
import PeopleListComponent from '../components/PeopleList'

export const PeopleList = connect(state => ({
  peoples: state.peoples
}), {})(PeopleListComponent)
