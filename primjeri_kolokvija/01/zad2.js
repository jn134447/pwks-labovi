function max_bodovi(max_points) {
  const half_max = max_points * 0.5;

  return (bodovi) => {
    return bodovi >= half_max;
  };
}

const je_prosao = max_bodovi(100);
console.log(`je_prosao(50): ${je_prosao(50)}  (true)`);
console.log(`je_prosao(49): ${je_prosao(49)}  (false)`);

