export default {
    copiedElement: {
        '2': {
            id: 2,
                parent_id: 1,
                elementType: 'VIEW',
                style: {
                order: 1,
                    flex: 1,
                    height: '50px',
                    flexDirection: 'row',
                    minHeight: '30px',
                    display: 'flex',
                    alignItems: 'stretch',
                    backgroundSize: 'cover'
            },
            data: {
                modeId: 0,
                    vars: {
                    r1: {
                        order: 1,
                            flex: 1,
                            height: '50px',
                            flexDirection: 'row',
                            minHeight: '30px',
                            display: 'flex',
                            alignItems: 'stretch',
                            backgroundSize: 'cover'
                    },
                    r2: {
                        order: 1
                    },
                    r3: {
                        order: 1
                    },
                    r4: {
                        order: 1
                    }
                }
            },
            childIds: [
                3,
                4
            ]
        },
        '3': {
            id: 3,
                parent_id: 2,
                elementType: 'TEXT',
                style: {
                flex: 'none',
                    order: 1
            },
            data: {
                content: 'Lorem ipsum',
                    modeId: 0,
                    vars: {
                    r1: {
                        flex: 'none',
                            order: 1
                    },
                    r2: {
                        order: 1
                    },
                    r3: {
                        order: 1
                    },
                    r4: {
                        order: 1
                    }
                }
            },
            childIds: []
        },
        '4': {
            id: 4,
                parent_id: 2,
                elementType: 'IMAGE',
                style: {
                flex: 'none',
                    order: 2,
                    backgroundImage: 'url(\'https://rnbin.com/images/image.png\')',
                    backgroundSize: 'cover',
                    width: '80px',
                    height: '80px'
            },
            data: {
                modeId: 0,
                    vars: {
                    r1: {
                        flex: 'none',
                            order: 2,
                            backgroundImage: 'url(\'https://rnbin.com/images/image.png\')',
                            backgroundSize: 'cover',
                            width: '80px',
                            height: '80px'
                    },
                    r2: {
                        order: 2
                    },
                    r3: {
                        order: 2
                    },
                    r4: {
                        order: 2
                    }
                }
            },
            childIds: []
        }
    }
}