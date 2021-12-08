import {sentenceCase} from 'change-case'
import {EntityPermissions} from '@eh/shared/api'

export const transformPermissionsToCascaderData = (permissions: EntityPermissions[]) =>
  permissions.map(entity => ({
    label: sentenceCase(entity.name),
    value: entity.name,
    children: entity.permissions.map(permission => ({
      label: sentenceCase(permission.name),
      value: permission.value,
    })),
  }))
