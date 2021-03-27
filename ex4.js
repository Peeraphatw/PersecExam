let L = 91;
let R = 100;

function CLINEAR(Lnum, Rnum) {
  let Total = (Rnum - Lnum) / 1 + 1;
  let Pair = Total / 2;
  let L2R = Lnum + Rnum;
  return L2R * Pair;
}
console.log(CLINEAR(L, R));
