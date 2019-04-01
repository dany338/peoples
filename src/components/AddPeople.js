import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass';
import { Root } from './styled';

const AddPeople = (props) => (
  <section id="new-message">
      <input
      onKeyPress={(e) => {
      if (e.key === 'Enter') {
        // eslint-disable-next-line no-undef
        props.dispatch(input.value, 'Me')
        // eslint-disable-next-line no-undef
        input.value = ''
      }
    }}
      type="text"
      ref={(node) => {
      // eslint-disable-next-line no-undef
      input = node
    }}
    />
  </section>
);

AddPeople.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddPeople
