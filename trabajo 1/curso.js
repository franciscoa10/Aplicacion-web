class Curso{
constructor(ID,Descripción,Fechadeinicio){
this. ID = ID,
this. Descripción = Descripción,
this. Fechadeinicio = Fechadeinicio;
}
}

const ID= [
'123',
'456',
'790',
'234',
'120'
];

const Descripción = [
    'hombre',
    'mujer',
    'hombre',
    'mujer',
    'hombre'
    ];
    const Fechadeinicio = [
        '12-02-2000',
        '23-02-2000',
        '03-09-2000',
        '05-03-2000',
        '19-04-2000'
        ];

        function mostrar() {
            let i = 0;
            do {
                i = i + 1;
            } while (i <= 4);
        
             console.log(`${Curso[0]} ${Curso[1]} ${Curso[2]} ${Curso[3]}`);
            //
        }
        mostrar();
       
        const mayuscula = (Curso) => {
            return `Mi curso: ${Curso}`;
        
        };
        console.log(Curso[0].toUpperCase());