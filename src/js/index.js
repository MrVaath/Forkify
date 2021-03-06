import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
// Global state of the app
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
const state = {};

const controlState = async () => {
  // Get query from view
  const query = searchView.getInput(); // todo in the next lection

  if (query) {
    // New search object and add to state
    state.search = new Search(query);

    // Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlState();
});
