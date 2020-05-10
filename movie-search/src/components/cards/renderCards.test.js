import renderCards from './renderCards';


test('render output exists', () => {
  expect(renderCards('film')).toBeTruthy();
});
