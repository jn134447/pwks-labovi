function ogranicenje(max) {
  const tolerated = max + 10;
  return function (speed) {
    return speed > tolerated;
  };
}

const preko_ogranicenja = ogranicenje(50);
console.log(`${preko_ogranicenja(61)} (true)`);
console.log(`${preko_ogranicenja(60)} (false)`);
