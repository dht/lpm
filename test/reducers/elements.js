import expect from 'expect'
import {element as reducer, elements as reducerMany, ActionTypes as types} from '../../src/reducers/elements/elements';
import deepFreeze from 'deep-freeze';

describe('element reducer', function () {
    it('should return null for undefined', function () {
        expect(
            reducer(undefined, {})
        ).toEqual(null)
    })

    it('should handle ADD_ELEMENT', function () {

        let state = undefined;

        expect(
            reducer(state, {
                type: types.ADD_ELEMENT,
                id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                data: {
                    "vars": {
                        "r1": {
                            "color": "green"
                        },
                        "r2": {
                            "order": 1
                        },
                        "r3": {
                            "order": 1
                        },
                        "r4": {
                            "order": 1
                        }
                    }
                },
                style: {color: 'green'},
            })
        ).toEqual(
            {
                id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [],
                "data": {
                    "vars": {
                        "r1": {
                            "color": "green"
                        },
                        "r2": {
                            "order": 1
                        },
                        "r3": {
                            "order": 1
                        },
                        "r4": {
                            "order": 1
                        }
                    }
                }
            }
        )

    })

    it('should invoke APPLY_STYLE for multiple attributes', function () {

        let state = {
            id: 2,
            parent_id: 1,
            elementType: 'VIEW',
            style: {color: 'green'},
            data: {
                vars: {
                    r1: {color: 'green', order: 1},
                    r2: {order: 1},
                    r3: {color: 'white', order: 1},
                    r4: {color: 'brown', order: 1},
                }
            },
            childIds: []
        };

        deepFreeze(state);

        expect(
            reducer(state,
                {
                    id: 2,
                    type: types.APPLY_STYLE,
                    style: {color: 'red', padding: '15px'},
                    resolution: 1,
                })
        ).toEqual(
            {
                id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                style: {color: 'red', padding: '15px'},
                childIds: [],
                data: {
                    vars: {
                        r1: {color: 'red', order: 1, padding: '15px'},
                        r2: {color: 'red', order: 1, padding: '15px'},
                        r3: {color: 'white', order: 1, padding: '15px'},
                        r4: {color: 'brown', order: 1, padding: '15px'},
                    }
                }
            }
        )

    })

    it('should invoke APPLY_STYLE with proper resolution propagation #1', function () {

        let state = {
            id: 2,
            parent_id: 1,
            elementType: 'VIEW',
            style: {color: 'green'},
            data: {
                vars: {
                    r1: {color: 'green', order: 1},
                    r2: {order: 1, padding: '15px'},
                    r3: {color: 'white', padding: '15px'},
                    r4: {color: 'brown', order: 1},
                }
            },
            childIds: []
        };

        deepFreeze(state);

        expect(
            reducer(state,
                {
                    id: 2,
                    type: types.APPLY_STYLE,
                    style: {margin: '10px', padding: '10px'},
                    resolution: 2,
                })
        ).toEqual(
            {
                id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                style: {color: 'green', margin: '10px', padding: '10px'},
                childIds: [],
                data: {
                    vars: {
                        r1: {color: 'green', order: 1},
                        r2: {order: 1, margin: '10px', padding: '10px'},
                        r3: {color: 'white', margin: '10px', padding: '15px'},
                        r4: {color: 'brown', order: 1, margin: '10px', padding: '10px'},
                    }
                }
            }
        )

    })

    it('should invoke APPLY_STYLE with proper resolution propagation #2', function () {

        let state = {
            id: 2,
            parent_id: 1,
            elementType: 'VIEW',
            style: {fontSize: '10px'},
            data: {
                vars: {
                    r1: {fontSize: '10px',},
                    r2: {fontSize: '11px', padding: '15px'},
                    r3: {fontSize: '12px', margin: '20px'},
                    r4: {fontSize: '13px', padding: '20px', margin: '20px'},
                }
            },
            childIds: []
        };

        deepFreeze(state);

        expect(
            reducer(state,
                {
                    id: 2,
                    type: types.APPLY_STYLE,
                    style: {margin: '10px', padding: '10px'},
                    resolution: 1,
                })
        ).toEqual(
            {
                id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                style: {fontSize: '10px', margin: '10px', padding: '10px'},
                childIds: [],
                data: {
                    vars: {
                        r1: {fontSize: '10px', margin: '10px', padding: '10px'},
                        r2: {fontSize: '11px', margin: '10px', padding: '15px'},
                        r3: {fontSize: '12px', margin: '20px', padding: '10px'},
                        r4: {fontSize: '13px', margin: '20px', padding: '20px',},
                    }
                }
            }
        )

    })

})

describe('elements (many) reducer', function () {
    it('should return {} for undefined', function () {
        expect(
            reducerMany(undefined, {})
        ).toEqual({})
    })

    it('should handle ADD_ELEMENT first', function () {

        let state = undefined;

        expect(
            reducerMany(state, {
                type: types.ADD_ELEMENT,
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {}
            })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'green', order: 1},
                            r2: {color: 'green', order: 1},
                            r3: {color: 'green', order: 1},
                            r4: {color: 'green', order: 1},
                        }
                    }
                }
            }
        )

    })
    it('should handle ADD_ELEMENT second', function () {

        let state = {
            1: {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [],
                data: {}
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.ADD_ELEMENT,
                id: 2,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
            })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 0,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'green', order: 1},
                            r2: {color: 'green', order: 1},
                            r3: {color: 'green', order: 1},
                            r4: {color: 'green', order: 1}
                        }
                    }
                }
            }
        )

    })

    it('should handle ADD_ELEMENT child', function () {

        let state = {
            1: {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.ADD_ELEMENT,
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
            })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [2],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 1,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'green', order: 1},
                            r2: {color: 'green', order: 1},
                            r3: {color: 'green', order: 1},
                            r4: {color: 'green', order: 1}
                        }
                    }
                }
            }
        )

    })

    it('should handle ADD_ELEMENT parent does not exist', function () {

        let state = {
            1: {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.ADD_ELEMENT,
                id: 4,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
            })
        ).toEqual(
            {
                1: {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {},
                }
            }
        )

    })


    it('should handle DELETE_ELEMENT', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 6,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 6,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: []
            },
            '3': {
                id: 3,
                parent_id: 6,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 3
            })
        ).toEqual({
            '1': {
                id: 1,
                parent_id: 6,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [2],
                data: {}
            },
            '2': {
                id: 2,
                parent_id: 6,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [],
                data: {}
            },
        })

    })

    it('should handle DELETE_ELEMENT and clean childIds array', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 2
            })
        ).toEqual({
            '1': {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [],
                data: {}
            }
        })

    })

    it('should handle DELETE_ELEMENT and remove children', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: -1,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 1
            })
        ).toEqual({})

    })


    it('should handle DELETE_ELEMENT and remove grandchildren', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: -1,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [3]
            },
            '3': {
                id: 3,
                parent_id: 2,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 1
            })
        ).toEqual({})

    })

    it('should handle DELETE_ELEMENT and remove grand-grandchildren', function () {

        let state = {
            '4': {
                id: 4,
                parent_id: 3,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: []
            },
            '3': {
                id: 3,
                parent_id: 2,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [4]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [3]
            },
            '1': {
                id: 1,
                parent_id: -1,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 1
            })
        ).toEqual({})

    })


    it('should handle DELETE_ELEMENT on a non existing child', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [3]
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 5
            })
        ).toEqual({
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                data: {},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
                data: {},
                childIds: [3]
            }
        })

    })

    it('should handle DELETE_ELEMENT on complex structures', function () {

        let state = {
            "0": {
                "id": 0,
                "parent_id": -1,
                "elementType": "VIEW",
                "style": {
                    "display": "flex",
                    "order": 1,
                    "flex": 1,
                    "flexDirection": "column",
                    "width": "360px",
                    "alignItems": "stretch",
                    "justifyContent": "flex-start"
                },

                "data": {},
                "childIds": [
                    1,
                    2
                ]
            },
            "1": {
                "id": 1,
                "parent_id": -1,
                "elementType": "TEXT",
                "style": {
                    "order": 1,
                    "fontSize": "20px",
                    "textAlign": "center",
                    "padding": "10",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo",
                    "backgroundColor": "#e6665d",
                    "color": "#fff"
                },

                "data": {
                    "text": "ספר המתכונים של משפחת לוי"
                },
                "childIds": []
            },
            "2": {
                "id": 2,
                "parent_id": -1,
                "elementType": "TEXT",
                "style": {
                    "order": 2,
                    "textAlign": "center",
                    "color": "#333333",
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "backgroundColor": "#fff",
                    "height": "100px",
                    "alignItems": "center",
                    "display": "flex"
                },
                "data": {},
                "childIds": [
                    3,
                    4,
                    5
                ]
            },
            "3": {
                "id": 3,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 3,
                    "backgroundImage": "url(http://files.parsetfss.com/00da6fd8-205f-48f9-9641-bf1a19eb8070/tfss-a5d021bf-a90a-42e9-838b-579ad8b81296-image.png)",
                    "backgroundSize": "cover",
                    "width": "38px",
                    "height": "38px",
                    "marginLeft": "10px"
                },
                "data": {},
                "childIds": []
            },
            "4": {
                "id": 4,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 1,
                    "backgroundImage": "url(http://meatlessmonday.co.il/wp-content/uploads/2013/05/%D7%A1%D7%9C%D7%98-%…A8%D7%A4%D7%AA%D7%99-%D7%9C%D7%9C%D7%90-%D7%9E%D7%99%D7%95%D7%A0%D7%96.jpg)",
                    "backgroundSize": "cover",
                    "width": "80px",
                    "height": "80px",
                    "marginRight": "5px"
                },
                "data": {},
                "childIds": []
            },
            "5": {
                "id": 5,
                "parent_id": 2,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "flex": 1,
                    "flexDirection": "column",
                    "textAlign": "right",
                    "color": "#333333",
                    "paddingRight": "10px"
                },
                "data": {},
                "childIds": [
                    6,
                    7
                ]
            },
            "6": {
                "id": 6,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 1,
                    "textAlign": "right",
                    "color": "#333333",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo"
                },
                "data": {
                    "text": "סלט תפו״א של סבתא רבקה"
                },
                "childIds": []
            },
            "7": {
                "id": 7,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "fontSize": "18px",
                    "textAlign": "right",
                    "color": "#333333",
                    "fontFamily": "Heebo"
                },

                "data": {
                    "text": "35 דקות הכנה | רמת קושי בינונית"
                },
                "childIds": []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 2
            })
        ).toEqual({
            "0": {
                "id": 0,
                "parent_id": -1,
                "elementType": "VIEW",
                "style": {
                    "display": "flex",
                    "order": 1,
                    "flex": 1,
                    "flexDirection": "column",
                    "width": "360px",
                    "alignItems": "stretch",
                    "justifyContent": "flex-start"
                },

                "data": {},
                "childIds": [
                    1
                ]
            },
            "1": {
                "id": 1,
                "parent_id": -1,
                "elementType": "TEXT",
                "style": {
                    "order": 1,
                    "fontSize": "20px",
                    "textAlign": "center",
                    "padding": "10",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo",
                    "backgroundColor": "#e6665d",
                    "color": "#fff"
                },

                "data": {
                    "text": "ספר המתכונים של משפחת לוי"
                },
                "childIds": []
            }
        })

    })

    it('should handle SWITCH_ELEMENT on complex structures', function () {

        let state = {
            "0": {
                "id": 0,
                "parent_id": 0,
                "elementType": "VIEW",
                "style": {
                    "display": "flex",
                    "order": 1,
                    "flex": 1,
                    "flexDirection": "column",
                    "width": "360px",
                    "alignItems": "stretch",
                    "justifyContent": "flex-start"
                },

                "data": {},
                "childIds": [
                    1,
                    2
                ]
            },
            "1": {
                "id": 1,
                "parent_id": 0,
                "elementType": "TEXT",
                "style": {
                    "order": 1,
                    "fontSize": "20px",
                    "textAlign": "center",
                    "padding": "10",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo",
                    "backgroundColor": "#e6665d",
                    "color": "#fff"
                },

                "data": {
                    "text": "ספר המתכונים של משפחת לוי"
                },
                "childIds": []
            },
            "2": {
                "id": 2,
                "parent_id": 0,
                "elementType": "TEXT",
                "style": {
                    "order": 2,
                    "textAlign": "center",
                    "color": "#333333",
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "backgroundColor": "#fff",
                    "height": "100px",
                    "alignItems": "center",
                    "display": "flex"
                },

                "data": {},
                "childIds": [
                    3,
                    4,
                    5
                ]
            },
            "3": {
                "id": 3,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 3,
                    "backgroundImage": "url(http://files.parsetfss.com/00da6fd8-205f-48f9-9641-bf1a19eb8070/tfss-a5d021bf-a90a-42e9-838b-579ad8b81296-image.png)",
                    "backgroundSize": "cover",
                    "width": "38px",
                    "height": "38px",
                    "marginLeft": "10px"
                },

                "data": {},
                "childIds": []
            },
            "4": {
                "id": 4,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 1,
                    "backgroundImage": "url(http://meatlessmonday.co.il/wp-content/uploads/2013/05/%D7%A1%D7%9C%D7%98-%…A8%D7%A4%D7%AA%D7%99-%D7%9C%D7%9C%D7%90-%D7%9E%D7%99%D7%95%D7%A0%D7%96.jpg)",
                    "backgroundSize": "cover",
                    "width": "80px",
                    "height": "80px",
                    "marginRight": "5px"
                },

                "data": {},
                "childIds": []
            },
            "5": {
                "id": 5,
                "parent_id": 2,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "flex": 1,
                    "flexDirection": "column",
                    "textAlign": "right",
                    "color": "#333333",
                    "paddingRight": "10px"
                },

                "data": {},
                "childIds": [
                    6,
                    7
                ]
            },
            "6": {
                "id": 6,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 1,
                    "textAlign": "right",
                    "color": "#333333",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo"
                },

                "data": {
                    "text": "סלט תפו״א של סבתא רבקה"
                },
                "childIds": []
            },
            "7": {
                "id": 7,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "fontSize": "18px",
                    "textAlign": "right",
                    "color": "#333333",
                    "fontFamily": "Heebo"
                },

                "data": {
                    "text": "35 דקות הכנה | רמת קושי בינונית"
                },
                "childIds": []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.SWITCH_ELEMENTS_ORDER,
                id1: 6,
                id2: 7
            })
        ).toEqual({
            "0": {
                "id": 0,
                "parent_id": 0,
                "elementType": "VIEW",
                "style": {
                    "display": "flex",
                    "order": 1,
                    "flex": 1,
                    "flexDirection": "column",
                    "width": "360px",
                    "alignItems": "stretch",
                    "justifyContent": "flex-start"
                },

                "data": {},
                "childIds": [
                    1,
                    2
                ]
            },
            "1": {
                "id": 1,
                "parent_id": 0,
                "elementType": "TEXT",
                "style": {
                    "order": 1,
                    "fontSize": "20px",
                    "textAlign": "center",
                    "padding": "10",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo",
                    "backgroundColor": "#e6665d",
                    "color": "#fff"
                },

                "data": {
                    "text": "ספר המתכונים של משפחת לוי"
                },
                "childIds": []
            },
            "2": {
                "id": 2,
                "parent_id": 0,
                "elementType": "TEXT",
                "style": {
                    "order": 2,
                    "textAlign": "center",
                    "color": "#333333",
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "backgroundColor": "#fff",
                    "height": "100px",
                    "alignItems": "center",
                    "display": "flex"
                },

                "data": {},
                "childIds": [
                    3,
                    4,
                    5
                ]
            },
            "3": {
                "id": 3,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 3,
                    "backgroundImage": "url(http://files.parsetfss.com/00da6fd8-205f-48f9-9641-bf1a19eb8070/tfss-a5d021bf-a90a-42e9-838b-579ad8b81296-image.png)",
                    "backgroundSize": "cover",
                    "width": "38px",
                    "height": "38px",
                    "marginLeft": "10px"
                },

                "data": {},
                "childIds": []
            },
            "4": {
                "id": 4,
                "parent_id": 2,
                "elementType": "IMAGE",
                "style": {
                    "order": 1,
                    "backgroundImage": "url(http://meatlessmonday.co.il/wp-content/uploads/2013/05/%D7%A1%D7%9C%D7%98-%…A8%D7%A4%D7%AA%D7%99-%D7%9C%D7%9C%D7%90-%D7%9E%D7%99%D7%95%D7%A0%D7%96.jpg)",
                    "backgroundSize": "cover",
                    "width": "80px",
                    "height": "80px",
                    "marginRight": "5px"
                },

                "data": {},
                "childIds": []
            },
            "5": {
                "id": 5,
                "parent_id": 2,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "flex": 1,
                    "flexDirection": "column",
                    "textAlign": "right",
                    "color": "#333333",
                    "paddingRight": "10px"
                },

                "data": {},
                "childIds": [
                    6,
                    7
                ]
            },
            "6": {
                "id": 6,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 2,
                    "textAlign": "right",
                    "color": "#333333",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Heebo"
                },

                "data": {
                    "text": "סלט תפו״א של סבתא רבקה"
                },
                "childIds": []
            },
            "7": {
                "id": 7,
                "parent_id": 5,
                "elementType": "VIEW",
                "style": {
                    "order": 1,
                    "fontSize": "18px",
                    "textAlign": "right",
                    "color": "#333333",
                    "fontFamily": "Heebo"
                },

                "data": {
                    "text": "35 דקות הכנה | רמת קושי בינונית"
                },
                "childIds": []
            }
        })

    })

    it('should not DELETE_ELEMENT on root', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: []
            }
        }

        deepFreeze(state);

        expect(
            reducerMany(state, {
                type: types.DELETE_ELEMENT,
                id: 1
            })
        ).toEqual({
            '1': {
                id: 1,
                parent_id: 0,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: [2]
            },
            '2': {
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: []
            }
        })

    })

    it('should handle APPLY_STYLE for multiple attributes', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [3]
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 4,
                    type: types.APPLY_STYLE,
                    style: {color: 'red', padding: '15px'}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'TEXT',
                    style: {color: 'red', padding: '15px'},
                    childIds: [3],
                    data: {
                        vars: {}
                    }
                }
            }
        )

    })


    it('should handle APPLY_DATA for multiple attributes', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [3],
                data: {content: 'before', dataId: 'name'}
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 4,
                    type: types.APPLY_DATA,
                    data: {content: 'Yes!'}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [3],
                    data: {content: 'Yes!', dataId: 'name'}
                }
            }
        )

    })

    it('should handle PREVIEW_STYLE for multiple attributes', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [3]
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 4,
                    type: types.PREVIEW_STYLE,
                    style: {color: 'red', padding: '15px'}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'TEXT',
                    style: {color: 'red', padding: '15px'},
                    childIds: [3],
                    data: {}
                }
            }
        )

    })

    it('should handle REPLACE_ELEMENT', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green'},
                childIds: []
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'TEXT',
                style: {color: 'green'},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 3},
                data: {
                    vars: {
                        r1: {color: 'green', order: 3},
                        r2: {color: 'blue', order: 3, padding: '10px'},
                        r3: {color: 'white', order: 3, padding: '15px'},
                        r4: {color: 'green', order: 3, padding: '10px'},
                    }
                },
                childIds: [3]
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 4,
                    type: types.REPLACE_ELEMENT,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'white', order: 7},
                    data: {}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green'},
                    childIds: [],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'TEXT',
                    style: {color: 'green'},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {color: 'white', order: 3, padding: '10px'},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'white', order: 3},
                            r2: {color: 'white', order: 3, padding: '10px'},
                            r3: {color: 'white', order: 3, padding: '15px'},
                            r4: {color: 'white', order: 3, padding: '10px'},
                        }
                    }
                }
            }
        )

    })

    it('should handle REPLACE_ELEMENT with Order', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green', order: 1},
                childIds: [5, 6]
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [3]
            },
            '5': {
                id: 5,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 1},
                childIds: [],
                data: {
                    vars: {
                        r1: {color: 'green', padding: '10px', order: 1},
                        r2: {color: 'green', padding: '10px', order: 1},
                        r3: {color: 'green', padding: '10px', order: 1},
                        r4: {color: 'green', padding: '10px', order: 1},
                    }
                }
            },
            '6': {
                id: 6,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 2},
                childIds: []
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 5,
                    type: types.REPLACE_ELEMENT,
                    parent_id: 1,
                    elementType: 'VIEW',
                    style: {color: 'white', order: 3},
                    data: {}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green', order: 1},
                    childIds: [5, 6],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [3],
                    data: {}
                },
                '5': {
                    id: 5,
                    parent_id: 1,
                    elementType: 'VIEW',
                    style: {color: 'white', padding: '10px', order: 1},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'white', padding: '10px', order: 1},
                            r2: {color: 'white', padding: '10px', order: 1},
                            r3: {color: 'white', padding: '10px', order: 1},
                            r4: {color: 'white', padding: '10px', order: 1},
                        }
                    }
                },
                '6': {
                    id: 6,
                    parent_id: 1,
                    elementType: 'TEXT',
                    style: {color: 'green', padding: '10px', order: 2},
                    childIds: [],
                    data: {}
                }
            }
        )

    })

    it('should handle REPLACE_ELEMENT with subview', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green', order: 1},
                childIds: [5, 6]
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [3]
            },
            '5': {
                id: 5,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 1},
                childIds: [],
                data: {
                    vars: {}
                }
            },
            '6': {
                id: 6,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 2},
                childIds: []
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 5,
                    type: types.REPLACE_ELEMENT,
                    parent_id: 1,
                    elementType: 'VIEW',
                    style: {color: 'white', order: 3},
                    data: {}
                })
        ).toEqual(
            {
                '1': {
                    id: 1,
                    parent_id: 2,
                    elementType: 'VIEW',
                    style: {color: 'green', order: 1},
                    childIds: [5, 6],
                    data: {}
                },
                '2': {
                    id: 2,
                    parent_id: 3,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [1],
                    data: {}
                },
                '3': {
                    id: 3,
                    parent_id: 4,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [2],
                    data: {}
                },
                '4': {
                    id: 4,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {order: 1},
                    childIds: [3],
                    data: {}
                },
                '5': {
                    id: 5,
                    parent_id: 1,
                    elementType: 'VIEW',
                    style: {color: 'white', padding: '10px', order: 1},
                    childIds: [],
                    data: {
                        vars: {
                            r1: {color: 'white', order: 1},
                            r2: {color: 'white', order: 1},
                            r3: {color: 'white', order: 1},
                            r4: {color: 'white', order: 1},
                        }
                    }
                },
                '6': {
                    id: 6,
                    parent_id: 1,
                    elementType: 'TEXT',
                    style: {color: 'green', padding: '10px', order: 2},
                    childIds: [],
                    data: {}
                }
            }
        )

    })

    it('should handle REPLACE_ELEMENT with content', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'PLACEHOLDER',
                style: {color: 'green', width: '50px'},
                childIds: [],
                data: {vars: {
                    r1: {color: 'green', width: '50px'},
                    r2: {color: 'green', width: '50px'},
                    r3: {color: 'green', width: '50px'},
                    r4: {color: 'green', width: '50px'}

                }}
            },
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    id: 1,
                    type: types.REPLACE_ELEMENT,
                    parent_id: 0,
                    elementType: 'TEXT',
                    style: {color: 'white', order: 7},
                    data: {content: 'hello'}
                })
        ).toEqual(
            {
                1: {childIds: [],
                    data: {
                        content: 'hello',
                        vars: {
                            r1: {color: 'white', order: 1, width:'50px'},
                            r2: {color: 'white', order: 1, width:'50px'},
                            r3: {color: 'white', order: 1, width:'50px'},
                            r4: {color: 'white', order: 1, width:'50px'}
                        }
                    },
                    elementType: 'TEXT',
                    id: 1,
                    parent_id: 0,
                    style: {color: 'white', order: 7, width:'50px'}
                }
            }
        )

    })

    it('should handle CLEAR_ELEMENTS', function () {

        let state = {
            '1': {
                id: 1,
                parent_id: 2,
                elementType: 'VIEW',
                style: {color: 'green', order: 1},
                childIds: [5, 6]
            },
            '2': {
                id: 2,
                parent_id: 3,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [1]
            },
            '3': {
                id: 3,
                parent_id: 4,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [2]
            },
            '4': {
                id: 4,
                parent_id: 0,
                elementType: 'VIEW',
                style: {order: 1},
                childIds: [3]
            },
            '5': {
                id: 5,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 1},
                childIds: []
            },
            '6': {
                id: 6,
                parent_id: 1,
                elementType: 'TEXT',
                style: {color: 'green', padding: '10px', order: 2},
                childIds: []
            }
        };

        deepFreeze(state);

        expect(
            reducerMany(state,
                {
                    type: types.CLEAR_ELEMENTS,
                })
        ).toEqual({})

    })


})



