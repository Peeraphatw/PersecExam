const taslaModle = [
  {
    model: "a",
    sell: 120,
  },
  {
    model: "b",
    sell: 90,
  },
  {
    model: "c",
    sell: 40,
  },
];

const salesCal = (data) => {
  let totalSales = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    totalSales += data[i].sell;
  }
  console.log(
    `modle ${data[0].model} is ${(data[0].sell / totalSales) * 100} Percent`
  );
  console.log(
    `modle ${data[1].model} is ${(data[1].sell / totalSales) * 100} Percent`
  );
  console.log(
    `modle ${data[2].model} is ${(data[2].sell / totalSales) * 100} Percent`
  );
};

salesCal(taslaModle);
