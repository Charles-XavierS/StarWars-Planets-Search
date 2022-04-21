import React, { useContext } from 'react';
import Context from '../Providers/Context';

function InputsFilters() {
  const { filterName, setFilterName, column, setColumn,
    comparison, setComparison, value, setValue,
    filterNumber, setFilterNumber } = useContext(Context);
  const optionsColumn = ['population', 'diameter',
    'rotation_period', 'orbital_period', 'surface_water'];
  const optionsOperator = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => {
    const filter = {
      column,
      comparison,
      value,
    };
    const newNumberFilter = [...filterNumber, filter];
    setFilterNumber(newNumberFilter);
  };

  const filterForColumn = () => {
    let columnOptions = optionsColumn;
    filterNumber.forEach((filter) => {
      columnOptions = columnOptions
        .filter((planet) => planet !== filter.column);
      return columnOptions;
    });
    return columnOptions;
  };

  return (
    <section className="inputs-filters">

      <input
        type="text"
        placeholder="Search by name"
        value={ filterName.name }
        onChange={ (e) => setFilterName({ name: e.target.value }) }
        data-testid="name-filter"
      />

      <div>
        <form>

          <label htmlFor="column-filter">
            <select
              data-testid="column-filter"
              value={ column }
              onChange={ ({ target }) => setColumn(target.value) }
            >
              {filterForColumn().map((option) => (
                <option key={ option } value={ option }>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="comparison-filter">
            <select
              data-testid="comparison-filter"
              value={ comparison }
              onChange={ ({ target }) => setComparison(target.value) }
            >
              {optionsOperator.map((operator) => (
                <option key={ operator } value={ operator }>
                  {operator}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="value-filter">
            <input
              data-testid="value-filter"
              type="number"
              value={ value }
              onChange={ ({ target }) => setValue(target.value) }
            />
          </label>

          <button
            data-testid="button-filter"
            type="button"
            onClick={ handleClick }
          >
            Filter
          </button>

        </form>
      </div>

    </section>
  );
}

export default InputsFilters;
