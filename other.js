// Fetch and parse the other data from other.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/other.json')
    .then(response => response.json())
    .then(otherData => {
        // Create an ordered list
        const otherList = document.createElement('ol');

        // Populate the ordered list with the names of states from other.json
        otherData.forEach((state, index) => {
            const listItem = document.createElement('p');
            listItem.textContent = `${state.Name}`;
            otherList.appendChild(listItem);
        });

        // Display the ordered list inside the otherinfo div
        const otherInfo = document.getElementById('otherinfo');
        otherInfo.appendChild(otherList);
    })
    .catch(error => console.error('Error fetching other data:', error));
