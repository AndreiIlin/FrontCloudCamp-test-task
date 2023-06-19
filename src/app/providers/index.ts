import compose from 'compose-function';

import { withStore } from 'app/providers/with-store';

import { withRouter } from './with-router';

export const withProviders = compose(withStore, withRouter);
