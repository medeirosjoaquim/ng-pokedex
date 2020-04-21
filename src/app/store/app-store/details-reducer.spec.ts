import { detailsReducer, initialState } from './details-reducer';

describe('detailsReducer', () => {
  describe('Default behaviour', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result =  detailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('Default behaviour', () => {
    it('should return a new state with details', () => {
      const action = { type: '[API] Get Paginated result success' } as any;

      const result =  detailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
