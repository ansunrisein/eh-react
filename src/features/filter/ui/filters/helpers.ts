export const mapFiltersConfigToObj = (filters: Array<{name: string}>): Record<string, number> =>
  filters.reduce(
    (acc, e) => ({
      ...acc,
      [e.name]: 0,
    }),
    {},
  )
