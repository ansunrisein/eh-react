import css from '@emotion/css'

export const header = css({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const board = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: 10,
})
