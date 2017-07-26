export default{
    flexState: {
        clipboard: {
            copiedStyle: {backgroundColor:'purple'},
            copiedElement: {
                1: {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {}
                }
            }
        },
        appState: {
            modeId: 0,
            resolution: 1,
        },
        elementSelection: {
            id: 2,
            parent_id: 1,
            elementType: 'PLACEHOLDER',
            rect: {}
        },
        elements: {
            present: {
                '1': {
                    id: 1,
                    parent_id: 0,
                    elementType: 'VIEW',
                    style: {
                        order: 1,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    data: {
                        modeId: 0,
                        vars: {
                            r1: {
                                order: 1,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            r2: {
                                order: 1,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            r3: {
                                order: 1,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            r4: {
                                order: 1,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }
                        }
                    },
                    childIds: [
                        2
                    ]
                },
                '2': {
                    id: 2,
                    parent_id: 1,
                    elementType: 'PLACEHOLDER',
                    style: {
                        order: 1,
                        flex: 1,
                        height: '50px'
                    },
                    data: {
                        modeId: 0,
                        vars: {
                            r1: {
                                order: 1,
                                flex: 1,
                                height: '50px'
                            },
                            r2: {
                                order: 1,
                                flex: 1,
                                height: '50px'
                            },
                            r3: {
                                order: 1,
                                flex: 1,
                                height: '50px'
                            },
                            r4: {
                                order: 1,
                                flex: 1,
                                height: '50px'
                            }
                        },
                        dataField: 'hello',
                        styleField: {
                            backgroundColor: 'color1',
                            color: 'color2',
                            height: 'height'
                        }
                    },
                    childIds: []
                }
            }
        }
    }
}