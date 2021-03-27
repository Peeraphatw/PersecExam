const getCountry = async () => {
  return [
    { name: "Thailand", abbr: "th", remark: "", regionId: 1 },
    { name: "Singapore&quot", abbr: "sg", remark: "", regionId: 1 },
    { name: "Unite State", abbr: "US", remark: "", regionId: 7 },
  ];
};

const getRegion = async () => {
  return [
    { id: 1, name: "Asia" },
    { id: 2, name: "South America" },
    { id: 7, name: "North America" },
  ];
};

const Combine = async (getCountry, getRegion) => {
  let result = {};
  const countrySet = await getCountry();
  const regionSet = await getRegion();

  const CTname = (id, data) => {
    return data.find((data) => data.id == id);
  };

  countrySet.forEach((country) => {
    result[country.abbr.toUpperCase()] = CTname(
      country.regionId,
      regionSet
    ).name;
  });
  return result;
};

(async () => {
  console.log(await Combine(getCountry, getRegion));
})();
