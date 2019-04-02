import React, { useState } from 'react';
import PropTypes from 'prop-types'
import AddPeople from './AddPeople';
import People from './People';
import {
  PeopleMain,
  PeopleContainer,
  PeopleContent,
  PeopleHeader,
  Content,
  ImgLogo,
} from './styled';

const PeopleList = ({logo}) => {
  const [people, setPeople] = useState('');
  const [peoples, setPeoples] = useState([{name: 'chris bolton'}]);

  const createNewPeopleItem = () => {
    setPeople('');
    setPeoples([
      ...peoples,
      {
        name: people
      }
    ]);
  };

  const handleKeyPress = e => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        createNewPeopleItem();
      }
    }
  };

  const handleInput = e => {
    setPeople(e.target.value);
  };

  // this is now being emitted back to the parent from the child component
  const deletePeople = indexToDelete => {
    setPeoples(peoples.filter((people, index) => index !== indexToDelete));
  };

  return (
    <PeopleMain>
      <ImgLogo src={logo} title="React Logo - App Peoples"/>
      <PeopleHeader>
        <Content width={1}>
          React Peoples
        </Content>
      </PeopleHeader>
      <PeopleContainer>
        <PeopleContent
          width={1}
          p={5}
          bg='#f6f6ff'
          borderRadius={8}
          boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
        >
          {peoples.map((item, key) => (
            <People
              key={key}
              name={item.name}
              deletePeople={() => deletePeople(key)}
            />
          ))}
        </PeopleContent>
        <AddPeople
          value={people}
          change={handleInput}
          press={handleKeyPress}
          createPeople={createNewPeopleItem}
        />
      </PeopleContainer>
    </PeopleMain>
  );
};

PeopleList.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

PeopleList.defaultProps = {
  logo: './logo.svg',
};

export default PeopleList;
