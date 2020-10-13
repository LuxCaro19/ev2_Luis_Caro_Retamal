export default{


    data: `

        <h2>Autor: Luis Caro Retamal</h2>


        <p>valor en pesos CL</p>

        <input id="peso" type="number"/>
        <br>
        <input id="dolar" type="radio" name="option" value=dolar/>a Dolar
        <input id="uf" type="radio" name="option" value="uf"/>a UF
        <input id="euro" type="radio" name="option" value="euro"/>a Euro
        <button onclick="calcular()">Calcular</button>



        <div id="resp" class="respuesta">



        </div>
    
    `,


    calcular:function(){

        var valor = document.getElementById("peso");
        var resp = document.getElementById("resp");

        resp.innerHTML= valor.value;



    }






}