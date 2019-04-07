const initState = {
  projects: [
    { id: '1', title: 'title-1', content: 'some text' },
    { id: '2', title: 'title-2', content: 'some text' },
    { id: '3', title: 'title-3', content: 'some text' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('crate project error', action.err);
      return state;

    default:
      console.log('default');
  }

  return state;
};

export default projectReducer;
