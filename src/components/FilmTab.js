import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme/theme';
import arrowClose from '../assets/arrowClose.svg';
import arrowOpen from '../assets/arrowOpen.svg';
import Table from './Table';

const Title = styled.h2`
  color: ${theme.color.main};
  font-size: 2rem;
  font-weight: ${theme.fontWeight.bold};
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 0;
  }
`;
const Arrow = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Tab = styled.div`
  display: flex;
  border-radius: 5px;
  width: 90%;
  height: 60px;
  background-color: ${theme.color.white};
  padding: 20px;
  margin: 20px 10px;
  margin-bottom: 0;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &.opened {
    border-radius: 5px 5px 0 0;
  }
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 15px;
  }
`;

const FilmTab = ({ id, title }) => {
  const [open, isOpen] = useState(false);
  const toggleArrow = () => {
    isOpen(!open);
  };
  return (
    <>
      <Tab onClick={toggleArrow} className={open ? 'opened' : ''}>
        <Title>{title}</Title>
        <Arrow src={open ? arrowClose : arrowOpen} />
      </Tab>
      {open && <Table id={id} />}
    </>
  );
};

FilmTab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default FilmTab;
