export type Filter = 'all' | 'active' | 'completed';

export type FilterSlice = {
  filterStatus: Filter;
  filters: Filter[];
};
