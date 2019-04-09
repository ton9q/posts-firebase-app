export const createProject = project => (dispatch, getState, { getFirbase, getFirestore }) => {
  // make async call to database
  const firestore = getFirestore();

  firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: 'Anton',
      authorLastName: 'Kuchma',
      authorId: 123,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });
};
