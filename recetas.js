function calculateAmounts(input) {
    let totalMass = parseFloat(input.value);
    let table = input.closest('table');
    let totalPercent = parseFloat(table.querySelector('.total-percent').textContent);
    
    let rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
        let percent = row.querySelector('.percent');
        let amount = row.querySelector('.amount');
        if (percent && amount) {
            amount.textContent = (parseFloat(percent.textContent) * totalMass / totalPercent).toFixed(2);
        }
    });
}

let recetas = [
{
  receta: `Titulo\tMasa ácima
Harina\t100
Agua\t60
Sal\t2
Total\t162`,
  instrucciones: `<p>La masa &aacute;cima es una masa "muerta" en el sentido que no posee levadura y permite practicar t&eacute;cnicas de armado sin cambiar las propiedades reol&oacute;gicas de la misma con el tiempo (S&iacute; existir&aacute; el factor humedad superficial y oxidaci&oacute;n de cadenas de gluten que a&ntilde;adir&aacute;n tenacidad).&nbsp;</p>
  <p>Tambi&eacute;n existe la posibilidad de cocinar esta masa, pero no es su principal objetivo.</p>
`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan Francés, Felipe, Baguette, Porteño
Harina\t100
Agua\t60
Sal\t2
Levadura\t3
Aditivo\t0.8
Total\t165.8`,
  instrucciones: `
  <img src="img/pfrances.png" alt="Descripción de la imagen">
<ol>
  <li>Agregar harina, agua, sal y aditivo. Encender amasadora en velocidad 1 por 5 minutos.</li>
  <li>Si la masa está homogénea, aumentar la velocidad de la amasadora por otros 10 minutos. Agregar la levadura en el cambio de velocidad</li>
  <li><strong>F1</strong> por 5-15 minutos, tapada con nylon.</li>
  <li>Separar en bollos de masa constante (350g) con ayuda del <em>cornet</em> y <em>preformar</em> previo al <strong>FI</strong> por al menos 10 minutos.</li>
  <li>Armar los bastones con la técnica ilustrada en la figura debajo y colocar en chapas engrasadas o en tendillos con la línea de cierre hacia abajo.</li>
  <li>Permitir <strong>F2</strong> hasta duplicar volumen y realizar los cortes en la superficie según la figura debajo.</li>
  <li>Hornear a 210°C por al menos 20 minutos en ambiente saturado de H<sub>2</sub>O.</li>
</ol>
<div class="grid"> 
<img src="img/foldbaguette.svg" alt="Descripción de la imagen SVG">
<img src="img/cutbaguette.svg" alt="Descripción de la imagen SVG">
</div>
<strong>Consideraciones: </strong>
<ul>
<li>Lo que diferencia la Baguette del Porteño y el Felipe es el pesaje (60g y 120g respectivamente) y el largo del pan. </li>
<li>Puede utilizarse Masa Madre al 20% si los tiempos lo permiten, bajando la levadura a 0,5%.</li>
<li>Puede utilizarse un poolish partiendo de la mitad del agua y la harina de la receta con toda la levadura entre 1 y 2 horas previo al amasado.</li>
</ul>
A continuación se muestra los resultados que se esperan obtener con método directo, poolish y masa madre respectivamente.
<img src="img/difbaguette.png" alt="Descripción de la imagen" class="recipe-image">

`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan "Lactal" (Molde) Con y sin semillas
Harina\t100
Agua\t55
Sal\t1.5
Levadura\t3
Leche_en_Polvo\t5
Malta\t2.5
Aceite\t7
Azúcar\t5
Aditivo\t0.6
Total\t179.6`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tMarsellés (Clásico y especial)
Harina\t100
Agua\t55
Sal\t1.5
Levadura\t3
Aditivo\t0.8
Azúcar\t3
Total\t163.3`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta Hojaldrada, Galleta dulce, Rosca
Harina\t100
Agua\t40
Sal\t1.5
Levadura\t3
Grasa\t5
Azúcar\t3
Aditivo\t0.6
Total\t153.1`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan con harina integral
Harina\t70
Harina_integral\t30
Agua\t60
Sal\t1.5
Levadura\t3
Aceite\t5
Gluten\t2
Aditivo\t0.8
Total\t172.3`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tCroissant Criollo, Bizcocho, Rosca, Rosca de chicharrones, Pan de manteca
Harina\t100
Agua\t60
Sal\t1.5
Levadura\t3
Azúcar\t6
Grasa(Empaste)\t32
Harina(Empaste)\t11
Total\t213.1`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tRosca de pascuas
Harina\t100
Agua\t40
Sal\t1.5
Levadura\t5
Esponja\t20
Gluten\t3
Miel\t5
Grasa_(cerdo)\t15
Enzima_fresh\t2
Leche_en_polvo\t2
Esencia_Anis\t2
Aditivo\t0.8
Huevo\t10
Azúcar\t12
Total\t218.3`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tCrema Pastelera
Leche\t1000
Azúcar\t300
Fécula_de_maíz\t90
Huevo\t200
Total\t1590`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan con grasa (vegano)
Harina\t100
Agua\t40
Sal\t1.7
Levadura\t3
Azúcar\t4
Aceite\t28
Total\t176.7`,
  instrucciones: ` /* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan con grasa (Clásico), Con chicharrones
Harina\t100
Agua\t40
Sal\t2
Levadura\t2
Grasa\t40
Azúcar\t4
Total\t188`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan de viena, hamburguesa, catalan
Harina\t100
Agua\t50
Sal\t1.5
Levadura\t4
Aditivo\t0.6
Aceite\t7
Azúcar\t7
Total\t170.1`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPizza
Harina\t100
Agua\t70
Sal\t2
Malta\t2
Gluten\t4
Levadura\t3
Total\t181`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tCroissant Francés (Común, Bicolor, Invertido), Pan au Chocolat, Bizcocho frances
Harina\t100
Agua\t50
Sal\t2
Levadura\t5
Azúcar\t10
Margarina(Hojaldre)\t41.75
Total\t208.75`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tMantequilla
Harina\t100
Agua\t35
Sal\t1
Levadura\t6
Grasa\t15
Huevo\t15
Azúcar\t15
Vainilla\t1
Aditivo\t0.8
Total\t188.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tCiabatta (Clásica y sabores)
Harina\t100
Agua\t80
Sal\t2
Levadura\t4
Gluten\t5
Aditivo\t0.8
Malta\t3
Total\t194.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan de campo
Harina\t100
Agua\t70
Sal\t2
Levadura\t3
Grasa\t5
Gluten\t2
Aditivo\t0.8
Total\t182.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta Hojaldrada Integral (La magia de Pedro)
Harina\t70
Harina_Integral\t30
Agua\t55
Sal\t2
Levadura\t3
Malta\t3
Aditivo\t0.6
Total\t163.6`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta de Aceite
Harina\t100
Agua\t35
Sal\t2
Levadura\t2
Malta\t3
Aceite\t15
Total\t157`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta clásica, sopladita y semillas
Harina\t100
Agua\t35
Sal\t1.5
Levadura\t2
Aceite\t5
Malta\t2
Total\t145.5`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta Marina
Harina\t100
Agua\t40
Sal\t2
Levadura\t2
Grasa\t5
Malta\t2
Total\t151`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tOjitos
Harina\t90
Fécula_de_maíz\t10
Grasa\t50
Azúcar\t50
Polvo_de_hornear\t3
Huevo\t15
Vainilla\t0.5
Colorante\t0.1
Total\t218.6`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tMedialunas de manteca
Harina\t100
Leche\t50
Sal\t2.5
Levadura\t8
Azúcar\t8
Miel\t4
Vainilla\t1
Manteca(Hojaldre)\t50
Harina(Hojaldre)\t10
Total\t233.5`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan Casero
Harina\t100
Agua\t50
Sal\t2
Levadura\t3
Grasa\t5
Malta\t2
Aditivo\t0.8
Total\t162.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGrisines (Clásicos, Integrales, Manteca, Ajo, Queso y orégano, Semillas)
Harina\t100
Agua\t40
Sal\t2
Levadura\t2
Aceite\t10
Malta\t3
Total\t157`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan de pita
Harina\t100
Agua\t55
Sal\t2
Levadura\t2
Aceite\t5
Aditivo\t0.6
Total\t164.6`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tViena Vegano
Harina\t100
Agua\t50
Sal\t2
Levadura\t3
Aceite\t5
Azúcar\t7
Aditivo\t0.6
Total\t167.6`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalleta de hojaldre vegana
Harina\t100
Agua\t40
Sal\t2
Levadura\t3
Aceite\t5
Aditivo\t0.6
Harina(Granza)\t13.9
Aceite(Granza)\t4.2
Total\t168.7`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan Jalá
Harina\t100
Levadura\t5
Azúcar\t11
Sal\t1.6
Aceite\t21
Huevo\t14
Agua\t33
Aditivo\t0.6
Gluten\t2
Total\t188.2`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan de Naranja, Limón o Pomelo
Harina\t100
Agua\t20
Naranja\t30
Huevo\t10
Sal\t0.6
Levadura\t5
Leche_en_polvo\t3
Azúcar\t15
Manteca\t10
Gluten\t2
Total\t195.6`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Título\tPan de remolacha
Harina\t100
Agua\t15
Sal\t2
Levadura\t4
Gluten\t2
Puré_de_remolacha\t60
Aditivo\t0.8
Aceite\t5
Total\t188.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tGalletas y palitos de queso (Hoj sin levadura)
Harina\t100
Agua\t40
Sal\t2
Azúcar\t3
Huevo\t10
Margarina(Hojaldre)\t69.75
Total\t224.75`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tTrenzas Fantasía
Harina\t100
Agua\t50
Sal\t2
Levadura\t3
Total\t155`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPan de maíz (dulce)
Harina\t100
Agua\t30
Sal\t1
Levadura\t6
Azúcar\t15
Huevo\t15
Manteca\t15
Harina_de_maíz\t30
Gluten\t3
Aditivo\t0.8
Total\t215.8`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPionono industrial
Huevos\t1600
Agua\t400
Harina\t720
Fécula_de_maíz\t80
Azúcar\t800
Miel\t60
Emulsionante\t80
Vainilla\t1
Total\t3741`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPolvorones
Harina\t900
Fécula_de_maíz\t100
Azúcar\t500
Grasa\t400
Huevo\t150
Amonio\t30
Vainilla\t1
Total\t2081`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tAlfajor de maicena
Fécula_de_maíz\t300
Manteca\t200
Azúcar\t160
Harina\t200
Polvo_de_hornear\t5
Yemas\t75
Total\t940`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Titulo\tPlantillas
Yemas\t90
Claras\t210
Harina\t200
Fécula_de_maíz\t50
Azúcar\t250
Total\t800`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
},
{
  receta: `Título\tBudín inglés (Frutas, chocolate)
Harina\t90
Fécula_de_maíz\t10
Manteca\t75
Huevo\t75
Polvo de hornear\t5
Color\t0.1
Esencia Panetonne\t1
Azúcar\t75
Vainilla\t1
Fruta\t332.1
Total\t664.2`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
}, 
{
  receta: `Titulo\tHojaldre sin levadura (Pasteles, Jesuitas)
Harina\t100
Agua\t40
?\t10
Sal\t2
Azúcar\t3
Margarina(Hojaldre)\t69.75
Total\t224.75`,
  instrucciones: `/* Insertar instrucciones  */`,
  imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
}
]
  
  
function generateOutput(inputText) {
  const lines = inputText.receta.split("\n");
  const title = lines[0].substring(lines[0].indexOf("Titulo") + 6).trim();
  const ingredients = lines.slice(1, -1);
  const total = lines[lines.length - 1].split(/\s+/)[1];
  const instructions = inputText.instrucciones.replace(/\n/g, "");

  let tableRows = "";
  ingredients.forEach(ingredientLine => {
      const [ingredient, amount] = ingredientLine.split(/\s+/);
      tableRows += `
          <tr>
              <td>${ingredient}</td>
              <td class="percent">${amount}</td>
              <td class="amount"></td>
          </tr>
      `;
  });

  tableRows += `
      <tr>
          <td>Total</td>
          <td class="total-percent">${total}</td>
          <td><input type="number" class="total-mass" placeholder="Masa" oninput="calculateAmounts(this)">
          </td>
      </tr>
  `;

  const htmlOutput = `
<div class="receta">
<div class="titulo estilo-comun" onclick="toggleReceta(event)">
  <span class="triangulo">&#x25B6;</span>
  <h3>${title}</h3>
</div>
<div class="recipe-content" style="display:none;">
  <div class="vspace"></div>
  <div class="recipe-flex">
    <div class="recipe-table-container">
      <div class="spacereceta"></div>
      <table class="recipe-table">
        ${tableRows}
      </table>
    </div>
  </div>
  <div class="instructions">
    <h4>Instrucciones:</h4>
    <p>${instructions}</p>
  </div>
</div>
</div>
<div class="spacereceta"></div>
<div class="spacereceta"></div>
  `;
  
  const outputDiv = document.getElementById("recetas");
  outputDiv.innerHTML += htmlOutput;
}






for (let i = 0; i < recetas.length; i++) {
    generateOutput(recetas[i]);
}