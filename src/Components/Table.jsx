import React, { useContext } from 'react';
import Context from '../Providers/Context';

import PlanetsInfo from './PlanetsInfo';

function Table() {
  const { data, filterName } = useContext(Context);

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
          {data.filter((planet) => planet.name
            .toLowerCase().includes(filterName.name.toLowerCase()))
            .map((planet) => (
              <PlanetsInfo key={ planet.url } planet={ planet } />
            ))}
        </tbody>

      </table>

    </section>

  );
}

export default Table;
