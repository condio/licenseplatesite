// Fetch and parse the states data from states.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        // Generate the style section dynamically based on the "seen" property
        const styleSection = document.createElement('style');
        states.forEach(state => {
            const stateStyle = `#${state.ID} { fill: ${state.seen ? 'rgb(30, 30, 30)' : 'rgba(30, 30, 30, 0.3)'}; }`;
            styleSection.appendChild(document.createTextNode(stateStyle));
        });

        // Append the generated style section to the head of the document
        document.head.appendChild(styleSection);
    })
    .catch(error => console.error('Error fetching states data:', error));
