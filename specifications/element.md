# Layout JSON
 
## Structure

 ```js
 let structure = {
   "2": {
     "id": 2,                     // unique id
     "elementType": "TEXT",       // VIEW, IMAGE, TEXT, PLACEHOLDER
     "parent_id": 1,              // parent's id
     "childIds": [ 2 ],           // children ids
      "style": {                  // style object
           "height": 1028,
           "order": 1
         },
     "data": {       
       "layer": "main-title",     // element's name      (optional)
       "content": "lorem ipsum",  // text or image url   (optional)
       "dataField": "title",      // a content variable  (optional)
       "dataFieldType": "TEXT",   // TEXT, IMAGE, HTML   (optional)
       "role": "button",          // the element's role  (optional)
       "tag": "header-1",         // set specific tag    (optional)
       "vars": {
         "r1": {},                // style object for resolution 1
         "r2": {},                // style object for resolution 2
         "r3": {},                // style object for resolution 3
         "r4": {}                 // style object for resolution 4
       },
       "styleField": {            // style variables     (optional)
         "color": "color1"
       }     
     }
   },
   "3" : { // next element...
   }
 }
 
 ```
 
 ## Style
 //TODO: add all css properties
 ```js
  let style = {
    "backgroundColor": "#fff",   // HEX, rgb or rgba
    "color": "#00ff00",          // HEX, rgb or rgba 
  }
  
 ```
 