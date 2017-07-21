export const before1 = {
    "1": {
        "childIds": [],
        "data": {
            "className": "container",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
            order: 1,
            width: '',
            backgroundColor: '#F5FCFF'
        }
    }
};

export const after1 = {
    "jsx": "<View style={styles.container}></View>",
    "style": {container: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',}},
    "dependencies": ["StyleSheet", "View"]
};

export const before2 = {
    "1": {
        "childIds": [2],
        "data": {
            "className": "container",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
            order: 1,
            width: '',
            backgroundColor: '#F5FCFF'
        }
    },
    "2": {
        "childIds": [],
        "data": {
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 2,
        "parent_id": 1,
        "style": {
            backgroundColor: '#333'
        }
    }
}


export const after2 = {
    "jsx": "<View style={styles.container}><View style={styles.view2}></View></View>",
    "style": {container: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',},view2: {backgroundColor: '#333',}},
    "dependencies": ["StyleSheet", "View"]
};


export const before3 = {
    "1": {
        "childIds": [2, 3],
        "data": {
            "className": "container",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
            order: 1,
            width: '',
            backgroundColor: '#F5FCFF'
        }
    },
    "2": {
        "childIds": [],
        "data": {
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 2,
        "parent_id": 1,
        "style": {
            backgroundColor: '#333'
        }
    },
    "3": {
        "childIds": [],
        "data": {
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 3,
        "parent_id": 1,
        "style": {
            backgroundColor: '#666'
        }
    }
}


export const after3 = {
    "jsx": "<View style={styles.container}><View style={styles.view2}></View><View style={styles.view3}></View></View>",
    "style": {container: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',},view2: {backgroundColor: '#333',},view3: {backgroundColor: '#666',}},
    "dependencies": ["StyleSheet", "View"]
};
export const before3a = {
    "1": {
        "childIds": [2, 3],
        "data": {
            "className": "container",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 1,
        "parent_id": 0,
        "style": {
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
            order: 1,
            width: '',
            backgroundColor: '#F5FCFF'
        }
    },
    "2": {
        "childIds": [],
        "data": {
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 2,
        "parent_id": 1,
        "style": {
            order:2,
            backgroundColor: '#333'
        }
    },
    "3": {
        "childIds": [],
        "data": {
            "modeId": 0,
            "tag": "",
        },
        "elementType": "VIEW",
        "id": 3,
        "parent_id": 1,
        "style": {
            order:1,
            backgroundColor: '#666'
        }
    }
}


export const after3a = {
    "jsx": "<View style={styles.container}><View style={styles.view3}></View><View style={styles.view2}></View></View>",
    "style": {container: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',},view2: {backgroundColor: '#333',},view3: {backgroundColor: '#666',}},
    "dependencies": ["StyleSheet","View"]
};


export const before4 = {
    "1": {
        "data": {
            "className": "",
            "content": "Small business owners.",
            "layer": "title",
            "modeId": 0,
        },
        "elementType": "TEXT",
        "id": 1,
        "parent_id": 0,
        "style": {
            order: 1,
            width: '',
            height: '',
            flex: '',
            fontSize: '20px',
            textAlign: 'center',
            margin: '10px'
        }
    }
};

export const after4 = {
    "jsx": "<Text style={styles.title}>Small business owners.</Text>",
    "style": {title: {fontSize: 20,textAlign: 'center',margin: 10,}},
    "dependencies": ["StyleSheet","Text"]
};

export const before5 = {
    "1": {
        "childIds": [],
        "data": {
            "content": "http://lorempixel.com/50/50",
            "className": "image",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "IMAGE",
        "id": 1,
        "parent_id": 0,
        "style": {
            width: '50px',
            height: '50px',
        }
    }
}

export const after5 = {
    "jsx": "<Image style={styles.image} source={{uri: 'http://lorempixel.com/50/50'}}></Image>",
    "style": {image: {width: 50,height: 50,}},
    "dependencies": ["StyleSheet","Image"]
};

export const before6 = {
    "1": {
        "childIds": [],
        "data": {
            "className": "image",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "IMAGE",
        "id": 1,
        "parent_id": 0,
        "style": {
            backgroundImage:'url(http://lorempixel.com/50/50)',
            width: '50px',
            height: '50px',
        }
    }
}

export const after6 = {
    "jsx": "<Image style={styles.image} source={{uri: 'http://lorempixel.com/50/50'}}></Image>",
    "style": {image: {width: 50,height: 50,}},
    "dependencies": ["StyleSheet","Image"]
};

export const before7 = {
    "1": {
        "childIds": [],
        "data": {
            "content": "http://lorempixel.com/60/60",
            "className": "image",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "IMAGE",
        "id": 1,
        "parent_id": 0,
        "style": {
            backgroundImage:'url(http://lorempixel.com/50/50)',
            width: '50px',
            height: '50px',
        }
    }
}

export const after7 = {
    "jsx": "<Image style={styles.image} source={{uri: 'http://lorempixel.com/60/60'}}></Image>",
    "style": {image: {width: 50,height: 50,}},
    "dependencies": ["StyleSheet","Image"]
};


export const before8 = {
    "1": {
        "childIds": [],
        "data": {
            "content": "http://lorempixel.com/60/60",
            "className": "image",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "IMAGE",
        "id": 1,
        "parent_id": 0,
        "style": {
            backgroundImage:'url(http://lorempixel.com/50/50)',
            backgroundSize: 'cover',
            width: '50px',
            height: '50px',
        }
    }
}

export const after8 = {
    "jsx": "<Image style={styles.image} source={{uri: 'http://lorempixel.com/60/60'}}></Image>",
    "style": {image: {width: 50,height: 50,resizeMode:'cover'}},
    "dependencies": ["StyleSheet","Image"]
};

export const before9 = {
    "1": {
        "childIds": [],
        "data": {
            "content": "http://lorempixel.com/60/60",
            "className": "image",
            "modeId": 0,
            "tag": "",
        },
        "elementType": "IMAGE",
        "id": 1,
        "parent_id": 0,
        "style": {
            backgroundImage:'url(http://lorempixel.com/50/50)',
            backgroundSize: '100% 100%',
            width: '50px',
            height: '50px',
        }
    }
}

export const after9 = {
    "jsx": "<Image style={styles.image} source={{uri: 'http://lorempixel.com/60/60'}}></Image>",
    "style": {image: {width: 50,height: 50}},
    "dependencies": ["StyleSheet","Image"]
};