  function generateEmojiText() {
  	// Load the emoji map from the JSON file
  	fetch('emojiMap.json')
  		.then(response => response.json())
  		.then(data => {
  			const emojiMap = data;

  			const inputField = document.getElementById("emojiInput");
  			const emojiOutputField = document.getElementById("emojiOutput");
  			const inputText = inputField.value;

  			const words = inputText.split(" ");
  			let emojiText = "";

  			words.forEach(word => {
  				let emojiAdded = false; // Flag to check if an emoji has been added

  				// Check if the word is not empty or just spaces
  				if (word.trim() === "") {
  					emojiText += " "; // Add spaces as-is
  				} else {
  					for (const emoji in emojiMap) {
  						if (emojiMap[emoji].includes(word.toLowerCase())) {
  							emojiText += ` ${word} ${emoji}`;
  							emojiAdded = true; // Set the flag
  							break;
  						}
  					}

  					if (!emojiAdded) {
  						emojiText += ` ${word}`;
  					}
  				}
  			});

  			emojiOutputField.value = emojiText.trim(); // Remove leading space
  		})
  		.catch(error => {
  			console.error('Error loading emojiMap.json: ' + error);
  		});
  }
