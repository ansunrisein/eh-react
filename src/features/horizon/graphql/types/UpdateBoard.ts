/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBoard
// ====================================================

export interface UpdateBoard_updateBoard {
  _id: string
  title: string
  description: string | null
  pinned: boolean
  favorite: boolean
  private: boolean
}

export interface UpdateBoard {
  updateBoard: UpdateBoard_updateBoard
}

export interface UpdateBoardVariables {
  _id: string
  title: string
  description?: string | null
  private: boolean
  favorite: boolean
  pinned: boolean
}
