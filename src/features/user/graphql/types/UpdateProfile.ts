/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile {
  _id: string
  nickname: string
  name: string | null
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile
}

export interface UpdateProfileVariables {
  nickname: string
  name?: string | null
}
