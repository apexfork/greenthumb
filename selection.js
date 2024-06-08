document.addEventListener('DOMContentLoaded', () => {
    // Function to get URL parameter
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the selected option from the URL
    const selectedPage = getParameterByName('option');
    console.log('Selected option from URL:', selectedPage); // Debug log

    const contentMap = {
        cucumbers: '<h2>You Picked Cucumbers</h2><img id="plantImage" src="images/cukes.png" alt="Cucumbers">',
        tomatoes: '<h2>You Picked Tomatoes</h2><img id="plantImage" src="images/tomatoes.png" alt="Tomatoes">',
        impatiens: '<h3>You Picked Impatiens</h3><img id="plantImage" src="images/impatiens.png" alt="Impatiens">',
    };

    // Populate the content div based on the selected option
    document.getElementById('choice').innerHTML = contentMap[selectedPage] || '<p>No option selected.</p>';
    // document.getElementById('choice').innerHTML = selectedPage || '<p>No option selected.</p>';

    // Add event listeners to the input fields
    const moistureInput = document.getElementById('moisture');
    const phInput = document.getElementById('ph');
    const temperatureInput = document.getElementById('temperature');
    const resultDiv = document.getElementById('result');

    moistureInput.addEventListener('input', calculateResult);
    phInput.addEventListener('input', calculateResult);
    temperatureInput.addEventListener('input', calculateResult);

    function calculateResult() {
        const moisture = parseFloat(moistureInput.value);
        const ph = parseFloat(phInput.value);
        const temperature = parseFloat(temperatureInput.value);

        // Check if all inputs have valid values
        if (isNaN(moisture) || isNaN(ph) || isNaN(temperature)) {
            resultDiv.style.display = 'none';
            return;
        }

        // Perform a calculation (e.g., a simple sum for demonstration purposes)
        const result = moisture + ph + temperature;
        // const result = "Based on your inputs, a decision can be made."
        // Display the result in the 'result' div
        resultDiv.innerHTML = `<p>Based on your inputs, a decision can be made: ${result}</p>`;

        // Show or hide the 'result' div based on the calculation
        if (result > 0) { // Example condition: show if the result is positive
            resultDiv.style.display = 'block';
        } else {
            resultDiv.style.display = 'none';
        }
    }
});
