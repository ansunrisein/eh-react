import React, {forwardRef, useCallback, useMemo} from 'react'
import {Loader, MultiCascader, MultiCascaderProps} from 'rsuite'
import {Permission} from '@eh/shared/api'
import {useAvailablePermissions} from '@eh/entities/board-link'
import {transformCascaderDataToPermissions, transformPermissionsToCascaderData} from '../../lib'

export type PermissionsInputProps = {
  onChange?: (permissions: Permission[]) => void
} & Omit<MultiCascaderProps, 'inline' | 'data' | 'onChange'>

type RefValue = React.ComponentProps<typeof MultiCascader>['ref'] extends React.Ref<infer T>
  ? T
  : never

export const PermissionsInput: React.FC<PermissionsInputProps> = forwardRef<
  RefValue,
  PermissionsInputProps
>(({onChange, ...props}, ref) => {
  const {permissions, loading} = useAvailablePermissions()

  const permissionsCascaderData = useMemo(
    () => permissions && transformPermissionsToCascaderData(permissions),
    [permissions],
  )

  const handleChange = useCallback(
    (data: Array<number | string>) => {
      if (onChange && permissions) {
        onChange(transformCascaderDataToPermissions(permissions, data))
      }
    },
    [onChange, permissions],
  )

  return (
    <div className="relative">
      {permissionsCascaderData && (
        <MultiCascader
          ref={ref}
          onChange={handleChange}
          data={permissionsCascaderData}
          inline
          menuWidth={200}
          {...props}
        />
      )}
      {loading && <Loader backdrop center size="md" />}
    </div>
  )
})
