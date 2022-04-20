import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../Services/api';

import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState({ name: '' });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterNumber, setFilterNumber] = useState([]);

  async function planetsApi() {
    const { results } = await fetchAPI();
    setData(results);
  }

  useEffect(() => {
    planetsApi();
  }, []);

  const valueContext = {
    data,
    filterName,
    setFilterName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterNumber,
    setFilterNumber,
  };

  return (
    <Context.Provider value={ valueContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
