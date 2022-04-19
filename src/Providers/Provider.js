import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../Services/api';

import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState({ name: '' });

  async function planetsApi() {
    const { results } = await fetchAPI();
    setData(results);
  }

  useEffect(() => {
    planetsApi();
  }, []);

  const value = {
    data,
    filterName,
    setFilterName,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
