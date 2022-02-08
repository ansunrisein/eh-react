export const mapFilterStateToState = (state: number): number =>
  state === 0 ? 0 : state === -1 ? 2 : state === 1 ? 1 : NaN

export const mapStateToFilterState = (state: number): number =>
  state === 1 ? 1 : state === 2 ? -1 : 0
