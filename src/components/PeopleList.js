import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass';
import { Root } from './styled';

const PeopleList = ({ peoples }) => (
  <section id="peoples-list"></section>
);

PeopleList.propTypes = {
  peoples: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    people: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PeopleList
