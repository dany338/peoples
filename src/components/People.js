import React from 'react'
import PropTypes from 'prop-types'
import {
  PeopleItem,
  PeopleItemText,
  PeopleItemDelete,
} from './styled';

const People = ({ name, deletePeople }) => (
  <PeopleItem>
    <PeopleItemText>
      {name}
    </PeopleItemText>
    <PeopleItemDelete
      onClick={deletePeople}
    >
      -
    </PeopleItemDelete>
  </PeopleItem>
);

People.propTypes = {
  name: PropTypes.string.isRequired,
  deletePeople: PropTypes.func.isRequired
}

export default People
