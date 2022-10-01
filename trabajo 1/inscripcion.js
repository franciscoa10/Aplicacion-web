class incripcion{
    constructor(IDA, IDCurso, IDAspirante, Fecha, Hora, Valorcancelado){
    this. IDA = IDA,
    this. IDCurso = IDCurso,
    this. IDAspirante = IDAspirante,
    this. Fecha = Fecha,
    this. Hora = Hora,
    this. Valorcancelado = Valorcancelado;

    }
    }
    
    const IDA= [
    '123',
    '456',
    '790',
    '234',
    '120'
    ];
    
    const IDCurso= [
        '123',
        '456',
        '790',
        '234',
        '120'
        ];
        const IDAspirante= [
            '123',
            '456',
            '790',
            '234',
            '120'
            ];
    
        const Fecha = [
            '12-02-2000',
            '23-02-2000',
            '03-09-2000',
            '05-03-2000',
            '19-04-2000'
            ];
            const Hora = [

                '10:00',
                '09:30',
                '08:00',
                '10:30',
                '07:00'

            ];
    const Valorcancelado = [
                      '$12',
                      '$10',
                      '$50',
                      '$70',
                      '$20'


    ];
            function mostrar() {
                let i = 0;
                do {
                    i = i + 1;
                } while (i <= 4);
            
                 console.log(`${incripcion[0]} ${incripcion[1]} ${incripcion[2]} ${incripcion[3]}`);
                //
            }
            mostrar();
           
            const mayuscula = (incripcion) => {
                return `Mi curso: ${incripcion}`;
            
            };
            console.log(incripcion[0].toUpperCase());