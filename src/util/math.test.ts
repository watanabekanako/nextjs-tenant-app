import { power } from './math';

beforeAll(() => {
  console.log('全ての処理前に一度だけ実行');
  // 全テスト実行前に１度だけ実行されるセットアップメソッド.
  // 全てのテストに共通する前処理を行う際に使用する。
  // 例えば、全テストで利用するテストデータを作るための処理を実行するなど。
});

afterAll(() => {
  console.log('全ての処理後に一度だけ実行');
  // 全テスト実行後に１度だけ実行されるメソッド.
  // 例えば、使用したテストデータを削除し、初期化する処理など。
});
beforeEach(() => {
  console.log('各テストの前で実行');
});
afterEach(() => {
  console.log('各テストの後で実行');
});
test('TC1', () => {
  const actual = power(0, -2);
  expect(actual).toBe(Infinity);
});
// test('TC2', () => {
//   const actual = power(0, -1);
//   expect(actual).toBe(Infinity);
// });
test(`TC2`, () => {
  expect(power(0, -1)).toBe(Infinity);
});

// test(`TC3`, () => {
//   expect(power(101, -1)).toBe(Infinity);
// });

// test('TC22', () => {
//   expect(() => {
//     return power(0, 100);
//   }).toThrow;
//   ('100以上の値は不正です');
// });

// test('TC3', () => {
//   const actual = power(0, 1);
//   expect(actual).toBe(Infinity);
// });
// test('TC3', () => {
//   const actual = power(0, 1);
//   expect(actual).toBe(Infinity);
// });

// test('TC4', () => {
//   const actual = power(0, 1);
//   expect(actual).toBe(Infinity);
// });
