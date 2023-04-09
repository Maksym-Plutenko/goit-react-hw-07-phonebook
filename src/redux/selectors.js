const getContacts = state => state.contacts.items;
const getIsLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;

const getFilter = state => state.filter;

export { getContacts, getFilter, getIsLoading, getError };
