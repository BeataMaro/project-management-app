import { createReducer, on } from '@ngrx/store';
import { Icolumn } from 'src/app/shared/models/column.model';
import * as ColumnsActions from './column-actions';
 

export interface ColumnsStateInterface {
  isLoading: boolean;
  columns: Icolumn[];
  error: string | null;
  column_id?: string,
  board_id: string
}

const initialState: ColumnsStateInterface = {
  isLoading: false,
  columns: [],
  error: null,
  board_id: ''
};

export const columnsReducers = createReducer(initialState, on(ColumnsActions.getColumns, (state) => ({
    ...state,
    isLoading: true
}) ),
on(ColumnsActions.getColumnsSuccess, (state, action) => ({
  ...state,
  isLoading: false,
  columns: action.columns,
  board_id: action.boardId,
}) ),
on(ColumnsActions.getColumnsFailure, (state, action) => ({
  ...state,
  isLoading: false,
  error: action.error
}) ),
on(ColumnsActions.deleteColumn, (state) => ({
  ...state,
  isLoading: false,
  // column_id: action.string
}) ),
);
