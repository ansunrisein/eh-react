import {fieldsToList, listToFields} from './helpers'

describe('useEventForm helpers', () => {
  describe('listToFields', () => {
    it('should return empty array if empty array is given', () => {
      const result = listToFields([])

      expect(result).toEqual([])
    })

    test.each<[unknown[]]>([[[{}, {}, {}]], [['', 'a', 'b']], [['123', '12345', 'Antonchik']]])(
      "should return array of objects with 'value' prop",
      list => {
        const result = listToFields(list)

        expect(result).toEqual(list.map(e => ({value: e})))
      },
    )
  })

  describe('fieldsToList', () => {
    it('should return empty array if empty array is given', () => {
      const result = fieldsToList([])

      expect(result).toEqual([])
    })

    test.each<[unknown[]]>([[[{}, {}, {}]], [['', 'a', 'b']], [['123', '12345', 'Antonchik']]])(
      'should return array of objects values',
      list => {
        const result = fieldsToList(list.map(e => ({value: e})))

        expect(result).toEqual(list)
      },
    )
  })
})
