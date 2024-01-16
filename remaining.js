// Fetch and parse the states data from states.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        // Filter out the states that have not been seen
        const remainingStates = states.filter(state => !state.seen);

        // Create a container div
        const containerDiv = document.createElement('div');

        // Populate the container with paragraphs and line breaks
        remainingStates.forEach((state, index) => {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${state.Name} (${state.ID})`;
            containerDiv.appendChild(paragraph);
        });

        // Display the container inside the stats-box div
        const statsBox = document.getElementById('remaining');
        statsBox.appendChild(containerDiv);
    })
    .catch(error => console.error('Error fetching states data:', error));
