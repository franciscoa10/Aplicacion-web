class Aspirante {
    constructor(IDe,nombre,identificacion){
    this. IDe = IDe,
    this. nombre = nombre,
    this. identificacion = identificacion;
    }
    }
    
    const IDe= [
    '123',
    '456',
    '790',
    '234',
    '120'
    ];
    
    const nombre = [
        'francisco',
        'diana',
        'pedro',
        'luis',
        'mario'
        ];
        const identificacion = [
            '123466',
            '987987',
            '077987',
            '434674',
            '343455'
            ];
    
            function mostrar() {
                let i = 0;
                do {
                    i = i + 1;
                } while (i <= 4);
            
                 console.log(`${Aspirante[0]} ${Aspirante[1]} ${Aspirante[2]} ${Aspirante[3]}`);
                //
            }
            mostrar();
           
            const mayuscula = (Aspirante) => {
                return `Mi curso: ${Aspirante}`;
            
            };
            console.log(Aspirante[0].toUpperCase());