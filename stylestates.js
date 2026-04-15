fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        const styleSection = document.createElement('style');
        states.forEach(state => {
            const fill = state.seen ? '#10b981' : '#374151';
            styleSection.appendChild(document.createTextNode(`#${state.ID} { fill: ${fill}; }`));
        });
        document.head.appendChild(styleSection);
    })
    .catch(error => console.error('Error fetching states data:', error));
