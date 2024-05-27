VIRTUAL DOM
-> the create root method in react behind the scene creates a dom like structure just like in browser 
-> in browser on page reload the entire dom refreshes but in react only the values that are updated are changed in the dom
REACT FIBRE
-> React user fibre alogrithm to update the virtual dom
-> we can pause abort and give priority to the updates or "incremental rendering"
-> reconcilation is the algorith react used to differentiate between two trees virtual dom and the dom to determine which all changes to be made
-> when you use hook a new tree is created and then compared with the old tree and then the updated components are only changed 
-> with some components react does not diff the tree with the old one as they cause a lot of changes therefore a new tree is introduced
-> 