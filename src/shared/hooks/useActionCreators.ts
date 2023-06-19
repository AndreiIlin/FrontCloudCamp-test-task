import { useMemo } from 'react';

import { type ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from 'shared/hooks';

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions]);
};
