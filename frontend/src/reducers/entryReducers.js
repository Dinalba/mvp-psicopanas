import {
  ENTRY_UPDATE_REQUEST,
  ENTRY_UPDATE_SUCCESS,
  ENTRY_UPDATE_FAIL,
  ENTRY_CREATE_FAIL,
  ENTRY_CREATE_REQUEST,
  ENTRY_CREATE_SUCCESS,
  ENTRY_LIST_FAIL,
  ENTRY_LIST_REQUEST,
  ENTRY_LIST_SUCCESS,
  // LAST_ENTRY_FAIL,
  // LAST_ENTRY_SUCCESS,
  // LAST_ENTRY_REQUEST,
  STATS_REQUEST,
  STATS_SUCCESS,
  STATS_FAIL,
  TAGS_STATS_REQUEST,
  TAGS_STATS_SUCCESS,
  TAGS_STATS_FAIL,
  MONTH_STATS_REQUEST,
  MONTH_STATS_SUCCESS,
  MONTH_STATS_FAIL,
} from "../constants/entriesConstants";

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de la lista de entradas
 */
export const entryListReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case ENTRY_LIST_REQUEST:
      return { loading: true };
    case ENTRY_LIST_SUCCESS:
      return { loading: false, entries: action.payload };
    case ENTRY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de crear una entrada
 */
export const entryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTRY_CREATE_REQUEST:
      return { loading: true };
    case ENTRY_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ENTRY_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de editar una entrada
 */
export const entryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTRY_UPDATE_REQUEST:
      return { loading: true };
    case ENTRY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ENTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

// export const lastEntryReducer = (state = { lastEntry: [] }, action) => {
//   switch (action.type) {
//     case LAST_ENTRY_REQUEST:
//       return { loading: true };
//     case LAST_ENTRY_SUCCESS:
//       return { loading: false, lastOne: action.payload };
//     case LAST_ENTRY_FAIL:
//     default:
//       return state;
//   }
// };

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de la lista de estadisticas del diario
 */
export const getStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATS_REQUEST:
      return { loading: true };
    case STATS_SUCCESS:
      return { loading: false, data: action.payload };
    case STATS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de la lista de estadisticas mensuales del diario
 */
export const getMonthStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case MONTH_STATS_REQUEST:
      return { loading: true };
    case MONTH_STATS_SUCCESS:
      return { loading: false, data: action.payload };
    case MONTH_STATS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/**
 * @desc Indica al redux el tipo de cambio de estado 
 * de la lista de estadisticas de las etiquetas del diario
 */
export const getTagStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case TAGS_STATS_REQUEST:
      return { loading: true };
    case TAGS_STATS_SUCCESS:
      return { loading: false, data: action.payload };
    case TAGS_STATS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
