import {EntityName, EntityPermissions, Permission} from '@eh/shared/api'

export const transformPermissionsToCascaderData = ({
  permissions,
  transformEntityName,
  transformPermissionName,
}: {
  permissions: EntityPermissions[]
  transformEntityName: (name: EntityName) => string
  transformPermissionName: (name: Permission) => string
}) =>
  permissions.map(entity => ({
    label: transformEntityName(entity.name),
    value: entity.name,
    children: entity.permissions.map(permission => ({
      label: transformPermissionName(permission),
      value: permission,
    })),
  }))
