import DATA from "./data.json";

const answerTwo = () => {

  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = []
    return result;
  }, {});

  Object.keys(groupNames).forEach(group => {
    let findStudents = DATA.filter(student => student.group === group);
    groupNames[group] = findStudents;
  });

return groupNames
};

export default answerTwo;

