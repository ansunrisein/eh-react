/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBoard
// ====================================================

export interface CreateBoard_createBoard {
  _id: string
  title: string
  description: string | null
  pinned: boolean
  favorite: boolean
}

export interface CreateBoard {
  createBoard: CreateBoard_createBoard
}

export interface CreateBoardVariables {
  title: string
  description?: string | null
}
