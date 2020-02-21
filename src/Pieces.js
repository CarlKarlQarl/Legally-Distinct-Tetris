const allPieces = {
    O: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: false}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: false}, {coordX: 4, coordY: 1, appear: true}, {coordX: 5, coordY: 1, appear: true}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: true}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
        
    ],
    I: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: true}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: false}, {coordX: 4, coordY: 1, appear: false}, {coordX: 5, coordY: 1, appear: true}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: false}, {coordX: 5, coordY: 2, appear: true}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: true}, {coordX: 6, coordY: 3, appear: false},
    ],
    J: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: true}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: false}, {coordX: 4, coordY: 1, appear: false}, {coordX: 5, coordY: 1, appear: true}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: true}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
    ],
    L: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: true}, {coordX: 5, coordY: 0, appear: false}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: false}, {coordX: 4, coordY: 1, appear: true}, {coordX: 5, coordY: 1, appear: false}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: true}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
    ],
    T: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: false}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: true}, {coordX: 4, coordY: 1, appear: true}, {coordX: 5, coordY: 1, appear: true}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: false}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
    ],
    S: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: false}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: false}, {coordX: 4, coordY: 1, appear: true}, {coordX: 5, coordY: 1, appear: true}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: true}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: false}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
    ],
    Z: [
        {coordX: 3, coordY: 0, appear: false}, {coordX: 4, coordY: 0, appear: false}, {coordX: 5, coordY: 0, appear: false}, {coordX: 6, coordY: 0, appear: false},
        {coordX: 3, coordY: 1, appear: true}, {coordX: 4, coordY: 1, appear: true}, {coordX: 5, coordY: 1, appear: false}, {coordX: 6, coordY: 1, appear: false},
        {coordX: 3, coordY: 2, appear: false}, {coordX: 4, coordY: 2, appear: true}, {coordX: 5, coordY: 2, appear: true}, {coordX: 6, coordY: 2, appear: false},
        {coordX: 3, coordY: 3, appear: false}, {coordX: 4, coordY: 3, appear: false}, {coordX: 5, coordY: 3, appear: false}, {coordX: 6, coordY: 3, appear: false},
    ]
}

export default allPieces