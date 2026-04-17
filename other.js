fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/other.json')
    .then(response => response.json())
    .then(otherData => {
        const container = document.createElement('div');
        container.className = 'chips';
        otherData.forEach(item => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = item.Name;
            container.appendChild(chip);
        });
        document.getElementById('otherinfo').appendChild(container);
    })
    .catch(error => console.error('Error fetching other data:', error));
