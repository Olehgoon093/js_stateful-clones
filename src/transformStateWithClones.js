'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let clone = {
    ...state,
  };
  const result = [];

  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        clone = {
          ...clone,
          ...extraData,
        };
        break;

      case 'removeProperties':
        clone = { ...clone };

        for (const key of keysToRemove) {
          delete clone[key];
        }
        break;

      case 'clear':
        clone = {};
        break;
    }
    result.push(clone);
  }

  return result;
}

module.exports = transformStateWithClones;
