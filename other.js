// Fetch and parse the other data from other.json
fetch('https://raw.githubusercontent.com/condio/licenseplatesite/main/other.json')
    .then(response => response.json())
    .then(otherData => {
        // Create a container div
        const containerDiv = document.createElement('div');

        // Populate the container with paragraphs
        otherData.forEach((state, index) => {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${state.Name}`;
            containerDiv.appendChild(paragraph);
        });

        // Display the container inside the otherinfo div
        const otherInfo = document.getElementById('otherinfo');
        otherInfo.appendChild(containerDiv);
    })
    .catch(error => console.error('Error fetching other data:', error));
