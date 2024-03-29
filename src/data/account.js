const LOAD = 'LOAD';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data });

export default reducer;
