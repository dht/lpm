export const before1 = {
    "1": {
        "childIds": [],
        "data": {
            "className": "container",
            "layer": "root",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"backgroundColor": "green", "height": 1033.9971313476562, "order": 1, "width": 640},
                "r2": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438},
                "r3": {"order": 1},
                "r4": {"height": 613.9971313476562, "order": 1, "width": 1270}
            }
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438}
    }
};

export const after1 = {
    "html": "<div class=\"root container\"></div>",
    "css": {
        "r1": " .root {background-color: green; height: 1033px; order: 1; width: 640px;}",
        "r2": " .root {height: 532px; width: 1019px;}",
        "r3": "",
        "r4": " .root {height: 613px; width: 1270px;}"
    }
};

export const before2 = {
    "1": {
        "childIds": [2],
        "data": {
            "className": "container",
            "layer": "root",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"height": 1033.9971313476562, "order": 1, "width": 640},
                "r2": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438},
                "r3": {"order": 1},
                "r4": {"height": 613.9971313476562, "order": 1, "width": 1270}
            }
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438}
    },
    "2": {
        "childIds": [],
        "data": {
            "className": "row",
            "layer": "section-hero",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"order": 1},
                "r2": {"height": "464px", "order": 1, "width": ""},
                "r3": {"order": 1},
                "r4": {"height": "551px", "order": 1, "width": 1228.0113525390625}
            }
        },
        "elementType": "VIEW",
        "id": 2,
        "parent_id": 1,
        "style": {"height": "464px", "order": 1, "width": ""}
    },
}


export const after2 = {
    "html": "<div class=\"root container\"><div class=\"section-hero row\"></div></div>",
    "css": {
        "r1": " .root {height: 1033px; order: 1; width: 640px;   .section-hero {order: 1;}}",
        "r2": " .root {height: 532px; width: 1019px;   .section-hero {height: 464px;}}",
        "r3": "",
        "r4": " .root {height: 613px; width: 1270px;   .section-hero {height: 551px; width: 1228px;}}"
    }
};


export const before3 = {
    "1": {
        "childIds": [2, 3],
        "data": {
            "className": "container",
            "layer": "root",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"height": 1033.9971313476562, "order": 1, "width": 640},
                "r2": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438},
                "r3": {"order": 1},
                "r4": {"height": 613.9971313476562, "order": 1, "width": 1270}
            }
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {"height": 532.9971313476562, "order": 1, "width": 1019.9999389648438}
    },
    "2": {
        "childIds": [],
        "data": {
            "className": "row",
            "layer": "section-hero",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"order": 1},
                "r2": {"height": "464px", "order": 1, "width": ""},
                "r3": {"order": 1},
                "r4": {"height": "551px", "order": 1, "width": 1228.0113525390625}
            }
        },
        "elementType": "VIEW",
        "id": 2,
        "parent_id": 1,
        "style": {"height": "464px", "order": 1, "width": ""}
    },
    "3": {
        "childIds": [],
        "data": {
            "className": "row",
            "layer": "new-row",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {"order": 1},
                "r2": {"height": "224px", "order": 2, "width": ""},
                "r3": {"order": 1},
                "r4": {"height": "451px", "order": 2, "width": 1128.0113525390625}
            }
        },
        "elementType": "VIEW",
        "id": 3,
        "parent_id": 1,
        "style": {"height": "464px", "order": 2, "width": ""}
    },
}


export const after3 = {
    "html": "<div class=\"root container\"><div class=\"section-hero row\"></div><div class=\"new-row row\"></div></div>",
    "css": {
        "r1": " .root {height: 1033px; order: 1; width: 640px;   .section-hero {order: 1;} .new-row {order: 1;}}",
        "r2": " .root {height: 532px; width: 1019px;   .section-hero {height: 464px;} .new-row {height: 224px; order: 2;}}",
        "r3": " .root {.new-row {order: 1;}}",
        "r4": " .root {height: 613px; width: 1270px;   .section-hero {height: 551px; width: 1228px;} .new-row {height: 451px; order: 2; width: 1128px;}}"
    }
};


export const before4 = {
    "1": {
        "data": {
            "className": "",
            "data": "<strong>Small business owners.</strong><br/>Just like you.",
            "layer": "title",
            "modeId": 0,
            "tag": "h1",
            "vars": {
                "r1": {
                    "backgroundSize": "cover",
                    "color": "#2C3E50",
                    "flex": "none",
                    "fontFamily": "Tisa Pro",
                    "fontSize": "65px",
                    "fontWeight": "700",
                    "lineHeight": "75px",
                    "marginTop": "67px",
                    "order": 1
                },
                "r2": {
                    "flex": "",
                    "fontSize": "64px",
                    "height": "214px",
                    "lineHeight": "64px",
                    "marginLeft": "",
                    "marginTop": "85px",
                    "order": 1,
                    "width": "523px"
                },
                "r3": {"marginTop": "97px", "order": 1},
                "r4": {"fontSize": "72px", "lineHeight": "72px", "marginTop": "109px", "order": 1}
            }
        },
        "elementType": "TEXT",
        "id": 7,
        "parent_id": 4,
        "style": {
            "flex": "",
            "fontSize": "64px",
            "height": "214px",
            "lineHeight": "64px",
            "marginLeft": "",
            "marginTop": "85px",
            "order": 1,
            "width": "523px"
        }
    }
};

export const after4 = {
    "html": "<h1 class=\"title\"><strong>Small business owners.</strong><br/>Just like you.</h1>",
    "css": {
        "r1": " .title {background-size: cover; color: #2C3E50; flex: none; font-family: Tisa Pro; font-size: 65px; font-weight: 700; line-height: 75px; margin-top: 67px; order: 1;}",
        "r2": " .title {font-size: 64px; height: 214px; line-height: 64px; margin-top: 85px; width: 523px;}",
        "r3": " .title {margin-top: 97px;}",
        "r4": " .title {font-size: 72px; line-height: 72px; margin-top: 109px;}"
    }
};

export const before5 = {
    "1": {
        "data": {
            "className": "",
            "data": "http://res.cloudinary.com/dkwks4r8b/image/upload/x_137,y_516,w_378,h_469,c_crop/v1494004006/rnh800zzghqxlfbfijse.jpg",
            "layer": "image",
            "modeId": 0,
            "tag": "",
            "vars": {
                "r1": {
                    "backgroundImage": "",
                    "backgroundSize": "cover",
                    "flex": "",
                    "height": "477px",
                    "margin": "auto",
                    "marginTop": "12px",
                    "order": 1,
                    "width": "367px"
                },
                "r2": {
                    "flex": "",
                    "height": "414px",
                    "marginLeft": "78px",
                    "marginTop": "45px",
                    "order": 1,
                    "width": "334px"
                },
                "r3": {"height": "446px", "marginLeft": "92px", "order": 1, "width": "366px"},
                "r4": {"height": "498px", "marginLeft": "122px", "order": 1, "width": "418px"}
            }
        },
        "elementType": "IMAGE",
        "id": 6,
        "parent_id": 5,
        "style": {
            "flex": "",
            "height": "414px",
            "marginLeft": "78px",
            "marginTop": "45px",
            "order": 1,
            "width": "334px"
        }
    }
}

export const after5 = {
    "html": "<img class=\"image display-1x\" src=\"http://res.cloudinary.com/dkwks4r8b/image/upload/x_137,y_516,w_378,h_469,c_crop/v1494004006/rnh800zzghqxlfbfijse.jpg\" alt=\"\" /><img class=\"image display-2x\" src=\"http://res.cloudinary.com/dkwks4r8b/image/upload/x_137,y_516,w_378,h_469,c_crop/v1494004006/rnh800zzghqxlfbfijse.jpg\" srcset=\"http://res.cloudinary.com/dkwks4r8b/image/upload/x_137,y_516,w_378,h_469,c_crop/v1494004006/rnh800zzghqxlfbfijse.jpg\" alt=\"\" />",
    "css": {
        "r1": " .image {background-size: cover; margin: auto; margin-top: 12px; order: 1; max-width: 367px; max-height: 477px;}",
        "r2": " .image {margin-left: 78px; margin-top: 45px; max-width: 334px; max-height: 414px;}",
        "r3": " .image {margin-left: 92px; max-width: 366px; max-height: 446px;}",
        "r4": " .image {margin-left: 122px; max-width: 418px; max-height: 498px;}"
    }
};