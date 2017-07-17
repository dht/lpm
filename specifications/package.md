# Layout package
 
## Structure

 ```js
let structure = {
  "identifier": "com.github.titlebar",   // unique reverse DNS
  "workingCopy" : {                      // state object
     "A1" : {"id": 1},                   // element object 
     "A2" : {},
     "A3" : {}
  },
  "latest" : {                          // state object
    "A1" : {"id": 1},                   // element object 
    "A2" : {},
    "A3" : {}
  },
  "versions" : {
    "v1" : {
      "id" : 1,                         // version id
      "whatsNew" : "base",              // version name
      "state" : {}                      // state object
    },
    "v2": {}                            // ...more version
  },
  "overlays" : {                        // see overlays
    "r1" : {                            // overlay object
      "width" : "640px",                // width of overlay
      "height" : "1028px",              // height of overlay
      "resolution" : 1,                 // resolution id
      "url" : "http://l...."            // overlay URL
    },
    "r2" : {},                          // overlay object
    "r3" : {},                          // overlay object
    "r4" : {}                           // overlay object
  }
}
 ```
 
 ## Overlays
 Overlays are screenshots of the final design. They serve two purposes:
 - They are used while you are building a new layout as guidance.
 - They offer a thumbnail to preview this layout when browsing through layouts. 