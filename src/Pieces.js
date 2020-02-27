const allPieces = {
    O: [
        {coordX: 3, coordY: 0, appear: false, color: "yellow"}, {coordX: 4, coordY: 0, appear: false, color: "yellow"}, {coordX: 5, coordY: 0, appear: false, color: "yellow"}, {coordX: 6, coordY: 0, appear: false, color: "yellow"},
        {coordX: 3, coordY: 1, appear: false, color: "yellow"}, {coordX: 4, coordY: 1, appear: true, color: "yellow"}, {coordX: 5, coordY: 1, appear: true, color: "yellow"}, {coordX: 6, coordY: 1, appear: false, color: "yellow"},
        {coordX: 3, coordY: 2, appear: false, color: "yellow"}, {coordX: 4, coordY: 2, appear: true, color: "yellow"}, {coordX: 5, coordY: 2, appear: true, color: "yellow"}, {coordX: 6, coordY: 2, appear: false, color: "yellow"},
        {coordX: 3, coordY: 3, appear: false, color: "yellow"}, {coordX: 4, coordY: 3, appear: false, color: "yellow"}, {coordX: 5, coordY: 3, appear: false, color: "yellow"}, {coordX: 6, coordY: 3, appear: false, color: "yellow"},
        
    ],
    I: [
        {coordX: 3, coordY: 0, appear: false, color: "cyan"}, {coordX: 4, coordY: 0, appear: false, color: "cyan"}, {coordX: 5, coordY: 0, appear: true, color: "cyan"}, {coordX: 6, coordY: 0, appear: false, color: "cyan"},
        {coordX: 3, coordY: 1, appear: false, color: "cyan"}, {coordX: 4, coordY: 1, appear: false, color: "cyan"}, {coordX: 5, coordY: 1, appear: true, color: "cyan"}, {coordX: 6, coordY: 1, appear: false, color: "cyan"},
        {coordX: 3, coordY: 2, appear: false, color: "cyan"}, {coordX: 4, coordY: 2, appear: false, color: "cyan"}, {coordX: 5, coordY: 2, appear: true, color: "cyan"}, {coordX: 6, coordY: 2, appear: false, color: "cyan"},
        {coordX: 3, coordY: 3, appear: false, color: "cyan"}, {coordX: 4, coordY: 3, appear: false, color: "cyan"}, {coordX: 5, coordY: 3, appear: true, color: "cyan"}, {coordX: 6, coordY: 3, appear: false, color: "cyan"},
    ],
    J: [
        {coordX: 3, coordY: 0, appear: false, color: "blue"}, {coordX: 4, coordY: 0, appear: false, color: "blue"}, {coordX: 5, coordY: 0, appear: true, color: "blue"}, {coordX: 6, coordY: 0, appear: false, color: "blue"},
        {coordX: 3, coordY: 1, appear: false, color: "blue"}, {coordX: 4, coordY: 1, appear: false, color: "blue"}, {coordX: 5, coordY: 1, appear: true, color: "blue"}, {coordX: 6, coordY: 1, appear: false, color: "blue"},
        {coordX: 3, coordY: 2, appear: false, color: "blue"}, {coordX: 4, coordY: 2, appear: true, color: "blue"}, {coordX: 5, coordY: 2, appear: true, color: "blue"}, {coordX: 6, coordY: 2, appear: false, color: "blue"},
        {coordX: 3, coordY: 3, appear: false, color: "blue"}, {coordX: 4, coordY: 3, appear: false, color: "blue"}, {coordX: 5, coordY: 3, appear: false, color: "blue"}, {coordX: 6, coordY: 3, appear: false, color: "blue"},
    ],
    L: [
        {coordX: 3, coordY: 0, appear: false, color: "orange"}, {coordX: 4, coordY: 0, appear: true, color: "orange"}, {coordX: 5, coordY: 0, appear: false, color: "orange"}, {coordX: 6, coordY: 0, appear: false, color: "orange"},
        {coordX: 3, coordY: 1, appear: false, color: "orange"}, {coordX: 4, coordY: 1, appear: true, color: "orange"}, {coordX: 5, coordY: 1, appear: false, color: "orange"}, {coordX: 6, coordY: 1, appear: false, color: "orange"},
        {coordX: 3, coordY: 2, appear: false, color: "orange"}, {coordX: 4, coordY: 2, appear: true, color: "orange"}, {coordX: 5, coordY: 2, appear: true, color: "orange"}, {coordX: 6, coordY: 2, appear: false, color: "orange"},
        {coordX: 3, coordY: 3, appear: false, color: "orange"}, {coordX: 4, coordY: 3, appear: false, color: "orange"}, {coordX: 5, coordY: 3, appear: false, color: "orange"}, {coordX: 6, coordY: 3, appear: false, color: "orange"},
    ],
    T: [
        {coordX: 3, coordY: 0, appear: false, color: "purple"}, {coordX: 4, coordY: 0, appear: false, color: "purple"}, {coordX: 5, coordY: 0, appear: false, color: "purple"}, {coordX: 6, coordY: 0, appear: false, color: "purple"},
        {coordX: 3, coordY: 1, appear: true, color: "purple"}, {coordX: 4, coordY: 1, appear: true, color: "purple"}, {coordX: 5, coordY: 1, appear: true, color: "purple"}, {coordX: 6, coordY: 1, appear: false, color: "purple"},
        {coordX: 3, coordY: 2, appear: false, color: "purple"}, {coordX: 4, coordY: 2, appear: true, color: "purple"}, {coordX: 5, coordY: 2, appear: false, color: "purple"}, {coordX: 6, coordY: 2, appear: false, color: "purple"},
        {coordX: 3, coordY: 3, appear: false, color: "purple"}, {coordX: 4, coordY: 3, appear: false, color: "purple"}, {coordX: 5, coordY: 3, appear: false, color: "purple"}, {coordX: 6, coordY: 3, appear: false, color: "purple"},
    ],
    S: [
        {coordX: 3, coordY: 0, appear: false, color: "green"}, {coordX: 4, coordY: 0, appear: false, color: "green"}, {coordX: 5, coordY: 0, appear: false, color: "green"}, {coordX: 6, coordY: 0, appear: false, color: "green"},
        {coordX: 3, coordY: 1, appear: false, color: "green"}, {coordX: 4, coordY: 1, appear: true, color: "green"}, {coordX: 5, coordY: 1, appear: true, color: "green"}, {coordX: 6, coordY: 1, appear: false, color: "green"},
        {coordX: 3, coordY: 2, appear: true, color: "green"}, {coordX: 4, coordY: 2, appear: true, color: "green"}, {coordX: 5, coordY: 2, appear: false, color: "green"}, {coordX: 6, coordY: 2, appear: false, color: "green"},
        {coordX: 3, coordY: 3, appear: false, color: "green"}, {coordX: 4, coordY: 3, appear: false, color: "green"}, {coordX: 5, coordY: 3, appear: false, color: "green"}, {coordX: 6, coordY: 3, appear: false, color: "green"},
    ],
    Z: [
        {coordX: 3, coordY: 0, appear: false, color: "red"}, {coordX: 4, coordY: 0, appear: false, color: "red"}, {coordX: 5, coordY: 0, appear: false, color: "red"}, {coordX: 6, coordY: 0, appear: false, color: "red"},
        {coordX: 3, coordY: 1, appear: true, color: "red"}, {coordX: 4, coordY: 1, appear: true, color: "red"}, {coordX: 5, coordY: 1, appear: false, color: "red"}, {coordX: 6, coordY: 1, appear: false, color: "red"},
        {coordX: 3, coordY: 2, appear: false, color: "red"}, {coordX: 4, coordY: 2, appear: true, color: "red"}, {coordX: 5, coordY: 2, appear: true, color: "red"}, {coordX: 6, coordY: 2, appear: false, color: "red"},
        {coordX: 3, coordY: 3, appear: false, color: "red"}, {coordX: 4, coordY: 3, appear: false, color: "red"}, {coordX: 5, coordY: 3, appear: false, color: "red"}, {coordX: 6, coordY: 3, appear: false, color: "red"},
    ]
}

export default allPieces