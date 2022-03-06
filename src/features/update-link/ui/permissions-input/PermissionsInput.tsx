import React, {forwardRef, useCallback, useMemo} from 'react'
import {useIntl} from 'react-intl'
import {Loader, MultiCascader, MultiCascaderProps} from 'rsuite'
import {Permission} from '@eh/shared/api'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {useAvailablePermissions} from '@eh/entities/board-link'
import {transformCascaderDataToPermissions, transformPermissionsToCascaderData} from '../../lib'
import {entitiesTexts, permissionsTexts, texts} from './texts'

export type PermissionsInputProps = {
  onChange?: (permissions: Permission[]) => void
} & Omit<MultiCascaderProps, 'inline' | 'data' | 'onChange'>

type RefValue = React.ComponentProps<typeof MultiCascader>['ref'] extends React.Ref<infer T>
  ? T
  : never

export const PermissionsInput = withModuleLocalization('update-link-feature')(
  forwardRef<RefValue, PermissionsInputProps>(({onChange, ...props}, ref) => {
    const {formatMessage} = useIntl()

    const {permissions, loading} = useAvailablePermissions()

    const permissionsCascaderData = useMemo(
      () =>
        permissions &&
        transformPermissionsToCascaderData({
          permissions,
          transformPermissionName: name => formatMessage(permissionsTexts[name]),
          transformEntityName: name => formatMessage(entitiesTexts[name]),
        }),
      [formatMessage, permissions],
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
            placeholder={formatMessage(texts.search)}
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
  }),
)
