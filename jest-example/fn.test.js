const fn = require('./fn');

test('"fn.add(2, 3)을 실행시키면 5를 리턴할 것"이라고 예상된다.', () => {
  expect(fn.add(2, 3)).toBe(5);
})

test('"fn.add(2, 3)을 실행시키면 5를 리턴할 것"이라고 예상된다.', () => {
  expect(fn.add(2, 3)).toEqual(5);
})


test('"fn.add(3, 3)을 실행시키면 5를 리턴하지 않을 것"이라고 예상된다.', () => {
  expect(fn.add(3, 3)).not.toBe(5);
})


//* 깊은 비교를 위해서 toBe 보다 toEqual을 사용한다.
test("fn.makeUser('Mike', 30)을 실행시키면 name이 Mike이고, age가 30인 속성을 반환할 것이라고 예상된다.", () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: "Mike",
    age: 30
  })
})

//* 견고한 깊은 비교를 위해서 toEqual보다 toStrictEqual을 사용한다.
// test("fn.makeUser('Mike', 30)을 실행시키면 name이 Mike이고, age가 30인 속성을 반환할 것이라고 예상된다.", () => {
//   expect(fn.makeUser('Mike', 30)).toStrictEqual({
//     name: "Mike",
//     age: 30
//   })
// })

test("null은 null이다.", () => {
  expect(null).toBeNull();
});


test("0은 false이다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});