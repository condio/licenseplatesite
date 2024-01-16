// Fetch and parse the states data from states.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        // Filter out the states that have not been seen
        const remainingStates = states.filter(state => !state.seen);

        // Create an ordered list
        const remainingList = document.createElement('ol');

        // Populate the ordered list with the remaining states
        remainingStates.forEach((state, index) => {
            const listItem = document.createElement('p');
            listItem.textContent = `${state.Name} (${state.ID})`;
            remainingList.appendChild(listItem);
        });

        // Display the ordered list inside the stats-box div
        const statsBox = document.getElementById('remaining');
        statsBox.appendChild(remainingList);
    })
    .catch(error => console.error('Error fetching states data:', error));
