 // Simulated data for demonstration
    const simulatedData = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
    ];

    const content = document.getElementById('content');

    //Function to add more items to the content
     function addMoreItems() {
        for (let i = 0; i < 5; i++) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.textContent = `Item ${simulatedData.length + 1}`;
            content.appendChild(newItem);
            simulatedData.push(`Item ${simulatedData.length + 1}`);
        }
    }
    


    // Function to check if the user has scrolled to the bottom
    function isScrolledToBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    // Event listener for scroll events
    window.addEventListener('scroll', () => {
        if (isScrolledToBottom()) {
            addMoreItems();
        }
    });

    // Initial content
addMoreItems(); // Load initial items
    

console.log("test")