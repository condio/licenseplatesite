fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        const remaining = states.filter(state => !state.seen);
        const container = document.createElement('div');
        container.className = 'chips';
        remaining.forEach(state => {
            const chip = document.createElement('span');
            chip.className = 'chip chip--remaining';
            chip.textContent = `${state.Name} (${state.ID})`;
            container.appendChild(chip);
        });
        document.getElementById('remaining').appendChild(container);
    })
    .catch(error => console.error('Error fetching states data:', error));
