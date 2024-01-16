// Fetch and parse the states data from states.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/states.json')
    .then(response => response.json())
    .then(states => {
        // Count the number of seen and remaining states
        const seenStatesCount = states.filter(state => state.seen).length;
        const remainingStatesCount = states.length - seenStatesCount;

        // Fetch and parse the "Other" data from other.json
        fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/other.json')
            .then(response => response.json())
            .then(otherData => {
                // Count the number of items in the "Other" JSON
                const otherItemCount = otherData.length;

                // Calculate the total sum of seen states and other items
                const totalSum = seenStatesCount + otherItemCount;

                // Get the existing table row by ID
                const statsTableRow = document.getElementById('statstable');

                // Create and append cells for seen states, remaining states, other items count, and total sum
                const seenCell = document.createElement('td');
                seenCell.textContent = seenStatesCount;
                statsTableRow.appendChild(seenCell);

                const remainingCell = document.createElement('td');
                remainingCell.textContent = remainingStatesCount;
                statsTableRow.appendChild(remainingCell);

                const otherCell = document.createElement('td');
                otherCell.textContent = otherItemCount;
                statsTableRow.appendChild(otherCell);

                const totalCell = document.createElement('td');
                totalCell.textContent = totalSum;
                statsTableRow.appendChild(totalCell);
            })
            .catch(error => console.error('Error fetching Other data:', error));
    })
    .catch(error => console.error('Error fetching states data:', error));
