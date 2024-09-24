let produto = {
    nome: 'Computador',
    preco: 8500,
    emEstoque: true
    };

let inventario = [
    { nome: 'teclado gamer', preco: 180., emEstoque: true },
    { nome: 'mouse gamer', preco: 200, emEstoque: false },
    { nome: 'monitor 240hz', preco: 2000, emEstoque: true },
    { nome: 'rtx4090', preco: 11000, emEstoque: true },
    { nome: 'cooler 200w', preco: 150., emEstoque: true },
    { nome: 'fone', preco: 150, emEstoque: false },
    { nome: 'processador intel', preco: 800, emEstoque: true },
    { nome: 'fonte corsair 700w', preco: 450, emEstoque: false },
    { nome: 'placa mae asus', preco: 1500, emEstoque: true },
    { nome: 'pasta termica', preco: 30, emEstoque: true },
    { nome: 'gabinete', preco: 300., emEstoque: true },
    { nome: 'memoria ram hyperX', preco: 500, emEstoque: false },
    { nome: 'ssd 1TB', preco: 400, emEstoque: true },
    { nome: 'ssd 256GB', preco: 100, emEstoque: true },
    { nome: 'mousepad do mickey', preco: 15, emEstoque: true }
    ]
    
    for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
    console.log(produtosEmEstoque);