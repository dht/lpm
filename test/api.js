import expect from 'expect'
import api from '../src/index';
import reduxThunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import clean from './mocks/clean';
import clipboardElement from './mocks/clipboardElement';
const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares)

describe('thunks', function () {

    it('should run addPlaceholder properly', function () {
        const store = mockStore(clean);
        store.dispatch(api.addPlaceholder());

        const actions = store.getActions();

        expect(actions).toEqual([
            {
                data: {modeId: 0},
                elementType: 'PLACEHOLDER',
                id: 3,
                parent_id: 1,
                style: {backgroundRepeat: 'no-repeat', backgroundSize: 'cover', flex: 1, order: 2},
                type: 'FLEX_ADD_ELEMENT'
            },
            {
                elementType: 'PLACEHOLDER',
                id: 3,
                parent_id: 1,
                type: 'FLEX_SET_SELECTED_ELEMENT'
            }
        ])

    });

    it('should run addText properly', function () {
        const store = mockStore(clean);
        store.dispatch(api.addText());

        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                type: 'FLEX_REPLACE_ELEMENT',
                id: 2,
                parent_id: 1,
                elementType: 'TEXT',
                data: {content: 'Lorem ipsum', modeId: 0},
                style: {flex: 'none', order: 2},
            }, {
                type: 'FLEX_SET_SELECTED_ELEMENT',
                id: 2,
                elementType: 'TEXT',
                parent_id: 1,
            }])

    });

    it('should run addImage properly', function () {
        const store = mockStore(clean);
        store.dispatch(api.addImage());

        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                data: {modeId: 0},
                elementType: 'IMAGE',
                id: 2,
                parent_id: 1,
                style: {
                    backgroundImage: 'url(\'https://rnbin.com/images/image.png\')',
                    backgroundSize: 'cover',
                    flex: 'none',
                    height: '80px',
                    order: 2,
                    width: '80px'
                },
                type: 'FLEX_REPLACE_ELEMENT'
            }, {elementType: 'IMAGE', id: 2, parent_id: 1, type: 'FLEX_SET_SELECTED_ELEMENT'}])

    });

    it('should run addVerticalView properly', function () {
        const store = mockStore(clean);
        return store.dispatch(api.addVerticalView(3))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {alignItems: 'stretch', display: 'flex', flexDirection: 'column', order: 2},
                        type: 'FLEX_REPLACE_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {backgroundSize: 'cover', flex: 1, order: 1},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {elementType: 'PLACEHOLDER', id: 3, parent_id: 2, type: 'FLEX_SET_SELECTED_ELEMENT'}, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {backgroundSize: 'cover', flex: 1, order: 2},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {backgroundSize: 'cover', flex: 1, order: 3},
                        type: 'FLEX_ADD_ELEMENT'
                    },
                        {
                            type: 'FLEX_SET_ELEMENT_RECT',
                            rect: {height: 100, left: 100, top: 100, width: 100}
                        }
                    ]);
            });
    });

    it('should run addVerticalView properly', function () {
        const store = mockStore(clean);

        return store.dispatch(api.addVerticalViewBySizes([50, 100, 150]))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {
                            alignItems: 'stretch',
                            backgroundSize: 'cover',
                            display: 'flex',
                            flexDirection: 'column',
                            order: 2
                        },
                        type: 'FLEX_REPLACE_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {height: '50px', order: 1},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {elementType: 'PLACEHOLDER', id: 3, parent_id: 2, type: 'FLEX_SET_SELECTED_ELEMENT'}, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {height: '100px', order: 2},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {height: '150px', order: 3},
                        type: 'FLEX_ADD_ELEMENT'
                    },
                        {
                            type: 'FLEX_SET_ELEMENT_RECT',
                            rect: {height: 100, left: 100, top: 100, width: 100},
                        }
                    ]);
            })
    });

    it('should run addHorizontalView properly', function () {
        const store = mockStore(clean);
        return store.dispatch(api.addHorizontalView(2))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {
                            alignItems: 'stretch',
                            backgroundSize: 'cover',
                            display: 'flex',
                            flexDirection: 'row',
                            minHeight: '30px',
                            order: 2
                        },
                        type: 'FLEX_REPLACE_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {flex: 1, order: 1},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {elementType: 'PLACEHOLDER', id: 3, parent_id: 2, type: 'FLEX_SET_SELECTED_ELEMENT'}, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {flex: 1, order: 2},
                        type: 'FLEX_ADD_ELEMENT'
                    },
                        {
                            type: 'FLEX_SET_ELEMENT_RECT',
                            rect: {height: 100, left: 100, top: 100, width: 100},
                        }
                    ]);
            });
    });

    it('should run addHorizontalViewBySizes properly', function () {
        const store = mockStore(clean);

        return store.dispatch(api.addHorizontalViewBySizes([50, 100]))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {
                            alignItems: 'stretch',
                            display: 'flex',
                            flexDirection: 'row',
                            minHeight: '30px',
                            order: 2
                        },
                        type: 'FLEX_REPLACE_ELEMENT'
                    }, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {order: 1, width: '50px'},
                        type: 'FLEX_ADD_ELEMENT'
                    }, {elementType: 'PLACEHOLDER', id: 3, parent_id: 2, type: 'FLEX_SET_SELECTED_ELEMENT'}, {
                        data: {modeId: 0},
                        elementType: 'PLACEHOLDER',
                        id: 3,
                        parent_id: 2,
                        style: {order: 2, width: '100px'},
                        type: 'FLEX_ADD_ELEMENT'
                    },
                        {
                            type: 'FLEX_SET_ELEMENT_RECT',
                            rect: {height: 100, left: 100, top: 100, width: 100},
                        }
                    ]);
            })
    });

    it('should run addView properly', function () {
        const store = mockStore(clean);

        return store.dispatch(api.addView({modeId: 0}))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {order: 2},
                        type: 'FLEX_REPLACE_ELEMENT'
                    }]
                )
            })
    });

    it('should run addDivider properly', function () {
        const store = mockStore(clean);

        return store.dispatch(api.addDivider({modeId: 0}))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'VIEW',
                        id: 2,
                        parent_id: 1,
                        style: {backgroundColor: '#333', height: '3px', margin: '10px 0', order: 2, width: '200px'},
                        type: 'FLEX_REPLACE_ELEMENT'
                    }, {
                        elementType: 'VIEW', id: 2, parent_id: 1,
                        type: 'FLEX_SET_SELECTED_ELEMENT'
                    }]
                )
            })
    });

    it('should run addSnippet properly', function () {
        const store = mockStore(clean);

        return store.dispatch(api.addSnippet({modeId: 0}))
            .then(function () {
                const actions = store.getActions();

                expect(actions).toEqual(
                    [{
                        data: {modeId: 0},
                        elementType: 'SNIPPET',
                        id: 2,
                        parent_id: 1,
                        style: {order: 2},
                        type: 'FLEX_REPLACE_ELEMENT'
                    },
                        {
                            elementType: 'SNIPPET', id: 2, parent_id: 1,
                            type: 'FLEX_SET_SELECTED_ELEMENT'
                        }]
                )
            })
    });

    it('should run selectRoot properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.selectRoot());
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                elementType: 'VIEW', id: 1, parent_id: 0,
                type: 'FLEX_SET_SELECTED_ELEMENT'
            }]
        )
    });

    it('should run addPlaceholderToRoot properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.addPlaceholderToRoot());
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                elementType: 'VIEW', id: 1, parent_id: 0,
                type: 'FLEX_SET_SELECTED_ELEMENT'
            }, {
                data: {modeId: 0},
                elementType: 'PLACEHOLDER',
                id: 3,
                parent_id: 1,
                style: {backgroundRepeat: 'no-repeat', backgroundSize: 'cover', flex: 1, order: 2},
                type: 'FLEX_ADD_ELEMENT'
            }, {
                elementType: 'PLACEHOLDER', id: 3, parent_id: 1,
                type: 'FLEX_SET_SELECTED_ELEMENT'
            }]
        )
    });

    it('should run applyStyle properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.applyStyle(2, {color: 'green'}));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{id: 2, resolution: 1, style: {color: 'green'}, type: 'FLEX_APPLY_STYLE'}]
        )
    });

    it('should run injectSnippet properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.injectSnippet(1, 0, 3, {state: clipboardElement.copiedElement}));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{ids: ['1', '2'], type: 'FLEX_REMOVE_ELEMENTS'}, {
                data: {
                    modeId: 0,
                    vars: {
                        r1: {
                            alignItems: 'stretch',
                            backgroundSize: 'cover',
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            height: '50px',
                            minHeight: '30px',
                            order: 1
                        }, r2: {order: 1}, r3: {order: 1}, r4: {order: 1}
                    }
                },
                elementType: 'VIEW',
                id: 4,
                parent_id: 0,
                style: {
                    alignItems: 'stretch',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    height: '50px',
                    minHeight: '30px',
                    order: 3
                },
                type: 'FLEX_ADD_ELEMENT'
            }, {
                data: {
                    content: 'Lorem ipsum',
                    modeId: 0,
                    vars: {r1: {flex: 'none', order: 1}, r2: {order: 1}, r3: {order: 1}, r4: {order: 1}}
                }, elementType: 'TEXT', id: 5, parent_id: 4, style: {flex: 'none', order: 1}, type: 'FLEX_ADD_ELEMENT'
            }, {
                data: {
                    modeId: 0,
                    vars: {
                        r1: {
                            backgroundImage: 'url(\'https://rnbin.com/images/image.png\')',
                            backgroundSize: 'cover',
                            flex: 'none',
                            height: '80px',
                            order: 2,
                            width: '80px'
                        }, r2: {order: 2}, r3: {order: 2}, r4: {order: 2}
                    }
                },
                elementType: 'IMAGE',
                id: 6,
                parent_id: 4,
                style: {
                    backgroundImage: 'url(\'https://rnbin.com/images/image.png\')',
                    backgroundSize: 'cover',
                    flex: 'none',
                    height: '80px',
                    order: 2,
                    width: '80px'
                },
                type: 'FLEX_ADD_ELEMENT'
            }]
        )
    });

    it('should run resetScreen properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.resetScreen());
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                elementType: 'VIEW',
                id: 1,
                parent_id: 0,
                type: 'FLEX_SET_SELECTED_ELEMENT'
            }, {type: 'FLEX_CLEAR_ELEMENTS'}, {
                data: {modeId: 0},
                elementType: 'VIEW',
                id: 1,
                parent_id: 0,
                style: {display: 'flex', flex: 1, flexDirection: 'column', order: 1},
                type: 'FLEX_ADD_ELEMENT'
            }, {
                data: {modeId: 0},
                elementType: 'PLACEHOLDER',
                id: 2,
                parent_id: 1,
                style: {flex: 1, height: '50px', order: 1},
                type: 'FLEX_ADD_ELEMENT'
            }, {elementType: 'PLACEHOLDER', id: 2, parent_id: 1, type: 'FLEX_SET_SELECTED_ELEMENT'}]
        )
    });

    it('should run applyDataContentForCurrentElement properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.applyDataContentForCurrentElement({modeId: 1}));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{data: {modeId: 1}, id: 2, type: 'FLEX_APPLY_DATA'}]
        )
    });

    it('should run applyDataFieldForCurrentElement properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.applyDataFieldForCurrentElement('title', 'TEXT'));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{fieldName: 'title', fieldType: 'TEXT', id: 2, type: 'FLEX_APPLY_DATA_FIELD'}]
        )
    });

    it('should run applyDataFieldForCurrentElement properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.applyStyleFieldForCurrentElement('color1', 'backgroundColor'));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{cssKey: 'backgroundColor', fieldName: 'color1', id: 2, type: 'FLEX_APPLY_STYLE_FIELD'}]
        )
    });

    it('should run setElements properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.setElements(clean));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                type: "FLEX_SET_ELEMENTS",
                value: clean
            }]
        )
    });

    it('should run setCopiedStyle properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.setCopiedStyle({backgroundColor: 'purple'}));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{type: 'FLEX_SET_COPIED_STYLE', value: {backgroundColor: 'purple'}}]
        )
    });

    it('should run setCopiedElement properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.setCopiedElement(clipboardElement.copiedElement['2']));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                type: 'FLEX_SET_COPIED_ELEMENT',
                value: clipboardElement.copiedElement['2']
            }]
        )
    });

    it('should run setCopiedElementTree properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.setCopiedElementTree(clean.flexState.elements.present['1']));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{
                type: 'FLEX_SET_COPIED_ELEMENT',
                value: clean.flexState.elements.present
            }]
        )
    });

    it('should run pasteCopiedStyle properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.pasteCopiedStyle({id: 2}));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{id: 2, resolution: 1, style: {backgroundColor: 'purple'}, type: 'FLEX_APPLY_STYLE'}]
        )
    });

    it('should run pasteCopiedElement properly', function () {
        const store = mockStore(clean);

        store.dispatch(api.pasteCopiedElement(clean.flexState.elements.present['2']));
        const actions = store.getActions();

        expect(actions).toEqual(
            [{ids: ['2'], type: 'FLEX_REMOVE_ELEMENTS'}, {
                data: {},
                elementType: 'VIEW',
                id: 4,
                parent_id: 1,
                style: {order: 1},
                type: 'FLEX_ADD_ELEMENT'
            }]
        )
    });


});