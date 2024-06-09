import { useTodo } from '../hooks/useTodo';
import { Filter } from '../ts/enums/Filter';

const Filters = () => {
  const { changeFilter } = useTodo();

  return (
    <div data-testid="filter-section">
      <button type="button" onClick={() => changeFilter(Filter.ALL)}>
        All
      </button>
      <button type="button" onClick={() => changeFilter(Filter.ACTIVE)}>
        Active
      </button>
      <button type="button" onClick={() => changeFilter(Filter.COMPLETED)}>
        Completed
      </button>
    </div>
  );
};
export default Filters;
