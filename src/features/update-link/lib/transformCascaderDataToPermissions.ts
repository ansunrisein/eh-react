import {EntityPermissions, Permission} from '@eh/shared/api'
import {isPermission} from './isPermission'

export const transformCascaderDataToPermissions = (
  availablePermissions: EntityPermissions[],
  cascaderPermissions: Array<number | string>,
): Permission[] =>
  cascaderPermissions.flatMap(perm => {
    const group = availablePermissions?.find(({name}) => name === perm)

    if (group) {
      return group.permissions
    }

    return isPermission(perm) ? perm : []
  })
