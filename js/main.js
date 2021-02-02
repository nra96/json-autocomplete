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

    //make INPUTBOX EMPTY RETURN EMPTY ARRAY 
    if (searchText.length === 0) {
        matches = [];
    }
    outputHtml(matches);
};

//SHOW RESULTS IN HTML USING MAP
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
                <div class="card card-body mb-1">
                    <h4>${match.name} (${match.abbr}) 
                    <span class="text-primary">${match.capital}
                    </span></h4>
                    <small>Lat: ${match.lat} / Long: ${match.long}</small>
                </div>
            `).join('');

        matchList.innerHTML = html;
    }
}


search.addEventListener('input', () => searchStates(search.value));