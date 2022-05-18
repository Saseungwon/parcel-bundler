console.log('hello parcel')

// async 비동기 함수
async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise)    // await 기다림
}
test(); 