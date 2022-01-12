import * as allActions from "./actions";
import * as allConstants from "./constants";

import * as allSelectors from "./selectors";
export * from "./interfaces";

export { photosReducer } from "./reducers";
export { photosSaga } from "./sagas";

export const actions = allActions;
export const constants = allConstants;
export const selectors = allSelectors;
