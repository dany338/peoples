import React from 'react'
import PropTypes from 'prop-types'
import { PeopleAdd, Input } from './styled';

const AddPeople = ({ value, change, press, createPeople }) => (
  <div>
    <Input
      type="text"
      value={value}
      onChange={change}
      onKeyPress={press}
    />
    <PeopleAdd
      onClick={createPeople}
    >
      +
    </PeopleAdd>
  </div>
);

AddPeople.propTypes = {
  change: PropTypes.func.isRequired,
  press: PropTypes.func.isRequired,
  createPeople: PropTypes.func.isRequired
}

export default AddPeople
