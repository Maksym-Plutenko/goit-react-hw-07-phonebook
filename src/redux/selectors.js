const selectContacts = state => state.contacts.items;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

const selectFilter = state => state.filter;

export { selectContacts, selectFilter, selectIsLoading, selectError };
