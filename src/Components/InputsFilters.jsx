import React, { useContext } from 'react';
import Context from '../Providers/Context';

function InputsFilters() {
  const { filterName, setFilterName } = useContext(Context);

  return (
    <section>
      <input
        type="text"
        placeholder="Search by name"
        value={ filterName.name }
        onChange={ (e) => setFilterName({ name: e.target.value }) }
        data-testid="name-filter"
      />
    </section>
  );
}

export default InputsFilters;
