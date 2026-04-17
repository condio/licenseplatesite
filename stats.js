fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        const seenCount = states.filter(state => state.seen).length;
        const remainingCount = states.length - seenCount;

        fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/other.json')
            .then(response => response.json())
            .then(otherData => {
                const otherCount = otherData.length;
                const totalCount = seenCount + otherCount;

                document.getElementById('stat-seen').textContent = seenCount;
                document.getElementById('stat-remaining').textContent = remainingCount;
                document.getElementById('stat-other').textContent = otherCount;
                document.getElementById('stat-total').textContent = totalCount;

                const pct = Math.round((seenCount / states.length) * 100);
                document.getElementById('progress-bar').style.width = pct + '%';
                document.getElementById('progress-label').textContent =
                    seenCount + ' of ' + states.length + ' states — ' + pct + '%';
            })
            .catch(error => console.error('Error fetching other data:', error));
    })
    .catch(error => console.error('Error fetching states data:', error));
