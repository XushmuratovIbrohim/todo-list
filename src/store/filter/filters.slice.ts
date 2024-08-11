import { createSlice } from '@reduxjs/toolkit';
import { FilterSlice } from '../../types/store';

const initialState: FilterSlice = {
  filters: ['all', 'active', 'completed'],
  filterStatus: 'all',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterTodos: (state, { payload: filter }) => {
      state.filterStatus = filter;
    },
  },
});

export const { filterTodos } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
