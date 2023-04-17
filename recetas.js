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
    instrucciones: `/* Insertar instrucciones  */`,
    imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`
  },
  {
    receta: `Titulo\tPan Francés, Felipe
Harina\t100
Agua\t60
Sal\t2
Levadura\t3
Aditivo\t0.8
Total\t165.8`,
    instrucciones: ` /* Insertar instrucciones  */`,
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
LEP\t5
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
    receta: `Titulo\tCroissant Criollo, Bizcocho
Harina\t100
Agua\t60
Sal\t1.5
Levadura\t3
Azúcar\t6
Total\t170.5`,
    instrucciones: ` /* Insertar instrucciones  */`,
    imagen: `
<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
` },
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
Enzima_extra_fresh\t2
Leche_en_polvo\t2
Esencia Anis\t2
Aditivo\t0.8
Huevo\t10
Azúcar\t12
Total\t218.3`, 
instrucciones: `a`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, 
{ receta: `Titulo\tCrema Pastelera
Leche\t1000
Azúcar\t300
Fécula_de_maíz\t90
Huevo\t200
Total\t1590`, 
instrucciones: `/ Insertar instrucciones /`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, 
{ receta:`Titulo\tPan saborizado
Harina\t100
Agua\t50
Sal\t1.5
Levadura\t3
Aditivo\t0.6
Enzima Extra Fresh\t2
Azúcar\t6
Grasa\t6
Total\t169.1`, 
instrucciones: `/ Insertar instrucciones /`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, { receta:
`Titulo\tPan con grasa (vegano)
Harina\t100
Agua\t40
Sal\t1.7
Levadura\t3
Azúcar\t4
Aceite\t28
Total\t176.7`, 
instrucciones: `/ Insertar instrucciones /`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, { receta:
`Titulo\tPan con grasa (Clásico)
Harina\t100
Agua\t40
Sal\t2
Levadura\t2
Grasa\t40
Azúcar\t4
Total\t188`, 

instrucciones: `/ Insertar instrucciones /`, 

imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, { receta:
`Titulo\tPan de viena, hamburguesa, catalan
Harina\t100
Agua\t50
Sal\t1.5
Levadura\t4
Aditivo\t0.6
Aceite\t7
Azúcar\t7
Total\t170.1`, 
instrucciones: `/ Insertar instrucciones /`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, { receta:
`Titulo\tPizza
Harina\t100
Agua\t70
Sal\t2
Extracto_de_malta\t2
Gluten\t4
Levadura\t3
Total\t181`, 
instrucciones: `/ Insertar instrucciones */`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">`
}, { receta:
`Titulo\tRosca Dulce
Harina\t100
Agua\t30
Sal\t1.2
Levadura\t6
Enzima_Super_Fresh\t1.5
Azúcar\t15
Grasa\t15
Huevo\t15
Vainilla\t1
Total	184.7`, 
instrucciones: `/* Insertar instrucciones */`, 
imagen: `<img src="ejemplo.png" alt="Descripción de la imagen" class="recipe-image">
`}
]
  
  
 function generateOutput(inputText) {
    const lines = inputText.receta.split("\n");
    const title = lines[0].substring(lines[0].indexOf("Titulo") + 6).trim();
    const ingredients = lines.slice(1, -1);
    const total = lines[lines.length - 1].split(/\s+/)[1];

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
  </div>
</div>
<div class="spacereceta"></div>

    `;
    
    const outputDiv = document.getElementById("recetas");
    outputDiv.innerHTML += htmlOutput;
}

for (let i = 0; i < recetas.length; i++) {
    generateOutput(recetas[i]);
}