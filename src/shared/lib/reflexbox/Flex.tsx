import React from 'react'

type DefaultType = 'initial' | 'inherit'

export type FlexType = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | DefaultType
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | DefaultType
  order?: number
  flex?: number | 'auto' | 'none' | DefaultType
  flexGrow?: number | DefaultType
  flexShrink?: number | DefaultType
  flexBasis?: 'auto' | 'content' | string | number | DefaultType
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | DefaultType
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | DefaultType
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | DefaultType
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
    | DefaultType
  gap?: number | string | DefaultType
}

export type CommonType = {
  width?: string | number
  height?: string | number
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | DefaultType
}

export const Flex: React.FC<FlexType & CommonType & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  flexDirection,
  flexWrap,
  order,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  gap,
  height,
  width,
  overflow,
  style = {},
  ...props
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection,
      flexWrap,
      order,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      justifyContent,
      alignItems,
      alignSelf,
      alignContent,
      gap,
      height,
      width,
      overflow,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)
