const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//SEARCH STATES.JSON AND FILTER IT WITH FETCH API
const searchStates = async searchText => {
    const res = await fetch('../data/state.json');
    const states = await res.json();

}

search.addEventListener('input', () => searchStates(search.value));