const productos = [
    // Teclados
    {id: '1', nombre: 'Casio 9000', precio: '15000', categoria: 'Teclado', stock: '10', descripcion: 'Descripcion del Casio 9000', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '2', nombre: 'Yamaha PSR-E373', precio: '18000', categoria: 'Teclado', stock: '15', descripcion: 'Teclado portátil Yamaha con 61 teclas', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '3', nombre: 'Alesis Recital Pro', precio: '40000', categoria: 'Teclado', stock: '12', descripcion: 'Teclado Alesis con 88 teclas semi-pesadas', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '4', nombre: 'Roland RD-2000', precio: '70000', categoria: 'Teclado', stock: '8', descripcion: 'Teclado Roland RD-2000 con 88 teclas y sonidos profesionales', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '5', nombre: 'Korg Kross 2', precio: '22000', categoria: 'Teclado', stock: '10', descripcion: 'Teclado Korg Kross 2 con secuenciador incorporado', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '6', nombre: 'Yamaha MX61', precio: '25000', categoria: 'Teclado', stock: '5', descripcion: 'Teclado Yamaha MX61 con sonidos de alta calidad', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '7', nombre: 'M-Audio Oxygen 49', precio: '12000', categoria: 'Teclado', stock: '15', descripcion: 'Teclado MIDI M-Audio Oxygen 49 con 49 teclas y controles', img:'', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '8', nombre: 'Arturia MiniLab MkII', precio: '15000', categoria: 'Teclado', stock: '12', descripcion: 'Teclado MIDI Arturia MiniLab MkII con controles intuitivos', img:'', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '9', nombre: 'Novation Impulse 61', precio: '30000', categoria: 'Teclado', stock: '6', descripcion: 'Teclado MIDI Novation Impulse con 61 teclas y pads', img:'', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},
    {id: '10', nombre: 'Korg Kronos', precio: '95000', categoria: 'Teclado', stock: '4', descripcion: 'Teclado Korg Kronos con 88 teclas y una gran variedad de sonidos', img:'https://cdn10.bigcommerce.com/s-ta610c/products/471/images/3386/ctx9000__70521.1717888760.1280.1280.png?c=2'},

    // Baterías
    {id: '11', nombre: 'Roland TD-17', precio: '45000', categoria: 'Batería', stock: '8', descripcion: 'Batería electrónica Roland TD-17 con pads de alta sensibilidad', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '12', nombre: 'Yamaha DTX402', precio: '25000', categoria: 'Batería', stock: '10', descripcion: 'Batería electrónica Yamaha DTX402 con módulos versátiles', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '13', nombre: 'Alesis Nitro Mesh Kit', precio: '32000', categoria: 'Batería', stock: '12', descripcion: 'Batería electrónica Alesis Nitro Mesh Kit con tambores de malla', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '14', nombre: 'Pearl Export Series', precio: '55000', categoria: 'Batería', stock: '6', descripcion: 'Batería acústica Pearl Export Series con 5 piezas', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '15', nombre: 'Tama Imperialstar', precio: '60000', categoria: 'Batería', stock: '7', descripcion: 'Batería acústica Tama Imperialstar con hardware incluido', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '16', nombre: 'Mapex Tornado', precio: '45000', categoria: 'Batería', stock: '5', descripcion: 'Batería acústica Mapex Tornado con caja de 14"', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '17', nombre: 'Ludwig Breakbeats', precio: '38000', categoria: 'Batería', stock: '10', descripcion: 'Batería acústica Ludwig Breakbeats, ideal para espacios pequeños', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '18', nombre: 'DW Design Series', precio: '70000', categoria: 'Batería', stock: '4', descripcion: 'Batería acústica DW Design Series con acabados personalizados', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '19', nombre: 'Gretsch Catalina Club', precio: '62000', categoria: 'Batería', stock: '6', descripcion: 'Batería acústica Gretsch Catalina Club con sonido vintage', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},
    {id: '20', nombre: 'Sonor AQ2', precio: '50000', categoria: 'Batería', stock: '8', descripcion: 'Batería acústica Sonor AQ2 con una amplia gama de acabados', img:'https://acdn.mitiendanube.com/stores/001/312/585/products/roland251-3e46e2fff4303530bd16940391656394-480-0.jpg'},

    // Guitarras
    {id: '21', nombre: 'Fender Stratocaster', precio: '60000', categoria: 'Guitarra', stock: '7', descripcion: 'Guitarra eléctrica Fender Stratocaster con sonido clásico', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '22', nombre: 'Gibson Les Paul', precio: '80000', categoria: 'Guitarra', stock: '5', descripcion: 'Guitarra eléctrica Gibson Les Paul con pastillas humbucker', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '23', nombre: 'Ibanez RG', precio: '50000', categoria: 'Guitarra', stock: '10', descripcion: 'Guitarra eléctrica Ibanez RG con mástil rápido', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '24', nombre: 'Yamaha Pacifica', precio: '30000', categoria: 'Guitarra', stock: '12', descripcion: 'Guitarra eléctrica Yamaha Pacifica con versatilidad de tonos', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '25', nombre: 'Epiphone SG', precio: '40000', categoria: 'Guitarra', stock: '8', descripcion: 'Guitarra eléctrica Epiphone SG con cuerpo ligero', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '26', nombre: 'Martin D-28', precio: '120000', categoria: 'Guitarra', stock: '3', descripcion: 'Guitarra acústica Martin D-28 con sonido robusto', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '27', nombre: 'Taylor 314ce', precio: '100000', categoria: 'Guitarra', stock: '4', descripcion: 'Guitarra acústica Taylor 314ce con sonido claro y equilibrado', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '28', nombre: 'Gibson J-45', precio: '130000', categoria: 'Guitarra', stock: '2', descripcion: 'Guitarra acústica Gibson J-45 con un sonido cálido', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '29', nombre: 'Fender Telecaster', precio: '65000', categoria: 'Guitarra', stock: '6', descripcion: 'Guitarra eléctrica Fender Telecaster con tono brillante', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},
    {id: '30', nombre: 'PRS SE Custom 24', precio: '70000', categoria: 'Guitarra', stock: '5', descripcion: 'Guitarra eléctrica PRS SE Custom 24 con versatilidad tonal', img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621278686344.jpg'},

    // Viento
    {id: '31', nombre: 'Yamaha YTR-2330', precio: '25000', categoria: 'Viento', stock: '8', descripcion: 'Trompeta Yamaha YTR-2330 con boquilla incluida', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '32', nombre: 'Bach TR300', precio: '30000', categoria: 'Viento', stock: '6', descripcion: 'Trompeta Bach TR300 con acabado lacado', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '33', nombre: 'Selmer Super Action 80', precio: '60000', categoria: 'Viento', stock: '4', descripcion: 'Saxofón Selmer Super Action 80 con sonido profesional', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '34', nombre: 'Yamaha YAS-280', precio: '35000', categoria: 'Viento', stock: '7', descripcion: 'Saxofón alto Yamaha YAS-280 con fácil manejo', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '35', nombre: 'Buffet Crampon E11', precio: '40000', categoria: 'Viento', stock: '5', descripcion: 'Clarinete Buffet Crampon E11 con buena proyección de sonido', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '36', nombre: 'B flat Clarinet Student', precio: '20000', categoria: 'Viento', stock: '10', descripcion: 'Clarinete B flat para estudiantes con estuche incluido', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '37', nombre: 'Jupiter JAS-700', precio: '28000', categoria: 'Viento', stock: '8', descripcion: 'Saxofón alto Jupiter JAS-700 con cuerpo de latón', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '38', nombre: 'Yamaha YTR-4335G', precio: '40000', categoria: 'Viento', stock: '6', descripcion: 'Trompeta Yamaha YTR-4335G con boquilla de acero inoxidable', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '39', nombre: 'Selmer AS42', precio: '50000', categoria: 'Viento', stock: '4', descripcion: 'Saxofón Selmer AS42 con llave de alta precisión', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'},
    {id: '40', nombre: 'Bach 180', precio: '55000', categoria: 'Viento', stock: '5', descripcion: 'Trompeta Bach 180 con ajuste preciso y sonido claro', img:'https://bairesrocks.vteximg.com.br/arquivos/ids/228779-700-700/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637616490292770000'}
];

export const obtenerProducto = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        })
    },500)
}

export const obtenerProductoId = (productoId) =>{
    return new Promise((res) =>{
        setTimeout(() => {
            res(productos.find(prod => prod.id === productoId ))
        })
    },500)
}

export const obtenerProductoCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter(prod => prod.categoria === categoria);
            resolve(productosFiltrados);
        }, 500); 
    });
};