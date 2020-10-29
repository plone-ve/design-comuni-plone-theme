/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { addonReducers } from '~/config';
import { searchFiltersReducer } from './searchFiltersReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { scadenziarioSearchReducer } from './scadenziarioSearchReducer';
import { scadenziarioDaySearchReducer } from './scadenziarioDaySearchReducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  ...addonReducers,
  searchFilters: searchFiltersReducer,
  searchResults: searchResultsReducer,
  scadenziarioSearch: scadenziarioSearchReducer,
  scadenziarioDaySearch: scadenziarioDaySearchReducer,
};

export default reducers;
