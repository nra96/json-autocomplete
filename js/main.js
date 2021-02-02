const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//SEARCH STATES.JSON AND FILTER IT WITH FETCH API
const searchStates = async searchText => {
    const res = await fetch('../data/state.json');
    const states = await res.json();

    //GET MATCHES TO CURRENT TEXT INPUT
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

}

search.addEventListener('input', () => searchStates(search.value));