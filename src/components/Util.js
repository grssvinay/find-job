export const processFiltersData = (data) => {
  let expOptions = new Set();
  let locOptions = new Set();
  let skOptions = new Set();
  data.forEach((post, ind) => {
    if (post.experience) {
      expOptions.add(post.experience);
    }
    if (post.location) {
      let locationsFormatted = post.location.split(",").map(location => location.trim());
      locationsFormatted.forEach(location => locOptions.add(location));
    }
    if (post.skills) {
      let skillsFormatted = post.skills.split(",").map(skill => skill.trim());
      skillsFormatted.forEach(skill => skOptions.add(skill));
    }
  });
  return {
    experienceOptions: formatToOptions(expOptions),
    locationOptions: formatToOptions(locOptions),
    skillsOptions: formatToOptions(skOptions)
  };
};

const formatToOptions = options => [...options].map((v, ind) => {
  return {label: v, value: ind + 1}
});
