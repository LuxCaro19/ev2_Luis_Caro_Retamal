export default{


    factura:  {  cliente:"INFORMATICA INACAP",  
    domicilio:"AV. SAN MIGUEL 445",  
    ciudad:'Talca',  telefono:'223344',  
    detalle:[  
        {codigo:1,cantidad:3,descripcion:'PASTEL MIL HOJAS', precioUnitario:10000},      
        {codigo:2,cantidad:4,descripcion:'GALLETAS FINAS', precioUnitario:8000},  
        {codigo:3,cantidad:2,descripcion:'BERLIN', precioUnitario:500},  
        {codigo:4,cantidad:1,descripcion:'PIE DE LIMON', precioUnitario:10000}, 
        {codigo:5,cantidad:5,descripcion:'PASTEL MANJAR', precioUnitario:12000},  
        {codigo:6,cantidad:3,descripcion:'PASTEL CREMA', precioUnitario:13000}   ] },

    
        data: `

            <h2>autor: Luis Caro Retamal</h2>

            <div id="info" class="info">



            </div>

            <div id="tabla">


            </div>


        
        `,

        cargar:function(){

            var resp = document.getElementById("tabla");
            var info = document.getElementById("info");

            var fact=`

            <p>CLIENTE: ${this.factura.cliente}</p>
            <p>DIRECCIÓN: ${this.factura.domicilio}</p>
            <p>CIUDAD: ${this.factura.ciudad}</p>
            <p>TELEFONO: ${this.factura.telefono}</p>
            `;

            info.innerHTML=fact;


            var totalIndividual =0;
            var subTotal=0;
            var totalFinal=0;
            var iva=0;

            var tabla= `

                <table>

                    <tr>

                        <th>codigo</th>
                        <th>cantidad</th>
                        <th>descripcion</th>
                        <th>precio unitario</th>
                        <th>total</th>

                    </tr>
 

                
            
            `;



            this.factura.detalle.forEach(item =>{

                totalIndividual=item.cantidad*item.precioUnitario;
                subTotal=totalIndividual+subTotal;
                


                tabla += `
                <tr>

                    <td>${item.codigo}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precioUnitario}</td>
                    <td>${totalIndividual}</td>

                </tr>
                
                `

            });

            iva=subTotal*0.19;
            totalFinal=subTotal+iva;

            tabla +=`
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Subtotal:</td>
                    <td>${subTotal}</td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>IVA:</td>
                    <td>${iva}</td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total:</td>
                    <td>${totalFinal}</td>
                </tr>
                
                
                </table>`;

            resp.innerHTML=tabla;

        }


}