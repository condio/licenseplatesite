// Fetch and parse the states data from states.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        // Count the number of seen and remaining states
        const seenStatesCount = states.filter(state => state.seen).length;
        const remainingStatesCount = states.length - seenStatesCount;

        // Display the count inside the stats-box div
        const statsBox = document.getElementById('stats-box');
        const countDisplay = document.createElement('div');
        countDisplay.innerHTML = `Seen: ${seenStatesCount} <br> Missing: ${remainingStatesCount}`;
        statsBox.appendChild(countDisplay);
    })
    .catch(error => console.error('Error fetching states data:', error));
