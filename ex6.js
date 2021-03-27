const selectGoldCoin = (Array) => {
  let MaxCoin = Math.max(...Array);
  let RoundLimit = Array.length;
  let Posibility = [];
  let MostCoin = [];
  const BestGold = (F, T) => {
    let result = 0;
    for (let i = F; i < T; i++) {
      result += Array[i];
    }
    return result;
  };

  let From = 0;
  let To = 1;
  let Gold = 0;
  while (!(From == RoundLimit)) {
    if (To == RoundLimit) {
      From++;
      To = 0;
    }
    Gold = BestGold(From, To);
    if (Gold < MaxCoin) {
      To++;
    } else {
      Posibility.push({ form: From + 1, to: To, Gold: Gold });
      To++;
    }
  }
  //console.log(Posibility);

  for (let i = 0; i < Posibility.length; i++) {
    if (MostCoin == 0) {
      MostCoin = { ...Posibility[i] };
    } else {
      if (MostCoin.Gold < Posibility[i].Gold) {
        MostCoin = { ...Posibility[i] };
      }
    }
  }

  return MostCoin;
};

const GoldCoin = [2, 4, -6, -8, 10, -12];
let result = selectGoldCoin(GoldCoin);
console.log(result);
