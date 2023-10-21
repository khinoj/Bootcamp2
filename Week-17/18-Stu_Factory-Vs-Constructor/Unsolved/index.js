// TODO: Refactor the class to a factory function.
const getInformation = (state) => ({
  information: () => console.log(state.title, state.description),
});

const lesson = function () { 
  const state = {
    title: 'Module 17 - Computer Sciense',
    description: 'CS for JS',
  };

return { ...getInformation(state) };

 }

const csForJS = lesson();
csForJS.information();
