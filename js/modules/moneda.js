export default{

    valores: 
    {
        dolar:628.68, 
        uf:26648.67, 
        euro:740.67
    
    } ,

    data: `

        <h2>Autor: Luis Caro Retamal</h2>


        <p>valor en pesos CL</p>

        <input id="peso" type="number"/>
        <br>
        <input id="dolar" type="radio" name="option" value="dolar"/>a Dolar
        <input id="uf" type="radio" name="option" value="uf"/>a UF
        <input id="euro" type="radio" name="option" value="euro"/>a Euro
        <button onclick="calcular()">Calcular</button>



        <div id="resp" class="respuesta">



        </div>
    
    `,


    calcular:function(){

        var valor = document.getElementById("peso").value;
        var resp = document.getElementById("resp");
        var option = document.getElementsByName("option");

        var checkeded="";
        var calculo=0;

        var respuesta="";
        

        option.forEach((item)=>{
            
            if(item.checked){
                
                checkeded=item.value;

                
                

            }

        });


        
        if(valor==""){

            alert("llene el campo");

        }else if(valor<0){

            alert("ingrese valores mayores")

        }else if (checkeded=="dolar"){

            //this.valores.dolar  no funciona
            calculo=valor/628.68;
            

            respuesta+=`
            
            <p>Usted conseguiría $ ${calculo.toFixed()} dolares</p>
            
            `;


        }else if(checkeded=="uf"){

            calculo=valor/26648.67;

            respuesta+=`
            
            <p>Usted conseguiría ${calculo.toFixed()} UF </p>
            
            `;
            
        }else if(checkeded=="euro"){

            calculo=valor/740.67;

            respuesta+=`
            
            <p>Usted conseguiría € ${calculo.toFixed()} Euros </p>
            
            `;

        }

        resp.innerHTML= respuesta;

        



        

        


        



    }






}