# licenseplatesite
This is a pretty rough site I created with the help of ChatGPT 3.5 to share the different licenseplates I've seen. I may rework the code in the future to make it cleaner (less seperate javascript files and calls). I may also make it look better in the future.

Right now, my wife and I track plates we see in Apple Notes, but I will also manually update the two JSON files on github to align with our counts. This way our friends and family can see how far along we are.

The javascript basically just looks at the JSON file for states and then outputs styling for each individual state by their ID. This allows the map to update with green if we've seen the state.

The core HTML for generating an HTML map came from Vincent Van Goggles at https://codepen.io/Gogh/pen/bYwqrL.