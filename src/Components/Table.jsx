import React, { useContext } from 'react';
import Context from '../Providers/Context';

import PlanetsInfo from './PlanetsInfo';

function Table() {
  const { data, filterName, filterNumber } = useContext(Context);

  const filterByNumber = () => {
    let filteredData = data;
    filterNumber.forEach((info) => {
      const { column, comparison, value } = info;
      filteredData = filteredData.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return filteredData;
      });
    });
    return filteredData;
  };

  return (

    <section>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {data ? filterByNumber().filter((planet) => planet.name
            .toLowerCase().includes(filterName.name.toLowerCase()))
            .map((planet) => (
              <PlanetsInfo key={ planet.name } planet={ planet } />
            )) : ''}
        </tbody>

      </table>

    </section>

  );
}

export default Table;
