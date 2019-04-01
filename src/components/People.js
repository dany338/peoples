import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass';
import { Root } from './styled';

const People = ({ people }) => (
  <div className="ToDoItem">
    <p className="ToDoItem-Text">{people}</p>
    <button className="ToDoItem-Delete">-</button>
  </div>
);

People.propTypes = {
  people: PropTypes.string.isRequired
}

export default People
