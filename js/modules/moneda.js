export default{


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

        var checked="";
        var calculo=0;
        

        option.forEach((item)=>{
            
            if(item.checked){
                
                checked=item.value;

                
                

            }

        });


        
        

       if (checked=="dolar"){


            calculo=valor/628.68;
            resp.innerHTML=calculo;

        }else if(checked=="uf"){

            calculo=valor/26648.67;
            resp.innerHTML=calculo;

        }else if(checked=="euro"){

            calculo=valor/740.67;
            resp.innerHTML=calculo;

        }



        

        


        



    }






}