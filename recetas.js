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
  instrucciones: `
  <ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea. Dividir en porciones
	adecuadas para el molde en uso (25% del volumen en cm</span><sup><span lang="es-MX">3</span></sup><span lang="es-MX">
	en gramos). </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar 10 minutos y luego formar sin demasiada fuerza como pan
	baguette, procurando que el ancho final sea igual al del largo del
	molde.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Posicionar
	en el molde con la llave hacia abajo y presionar suavemente la masa
	para que ocupe toda la base del molde. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">F2
	hasta que la masa ocupe el 90% del molde (1 dedo pulgar debe entrar
	entre la masa y el borde)</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cocinar
	con o sin tapa hasta lograr una temperatura interior de 75ºC.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Retirar
	inmediatamente del molde.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con una mezcla a partes iguales de aceite, agua y una pizca sal para
	ablandar la costra. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:
</b></span>
</p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Puede
	agregarse un 15% de semillas tostadas (mix lino, chia, quinoa etc).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Luego
	del armado, puede rodarse la masa sobre un trapo limpio y húmedo,
	para posteriormente rodar la masa humedecida sobre una cama de
	semillas tostadas, logrando una costra de semillas (Funciona mejor
	en panes lactales con tapa para evitar que se quemen las mismas).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">En
	el armado, puede posicionarse una masa de igual textura pero otros
	sabores o colores, así como untarse pastas semi solidas (como
	canela o chocolate) para lograr una espiral en el corte. </span>
	</p>
</ul>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"> <span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y cuyo ancho sea como
	máximo el largo de una chapa. Puede dividirse en varios bloques de
	ser necesario. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Armar
	un </span><span lang="es-MX"><b>bastón </b></span><span lang="es-MX">enrollando
	sin demasiada fuerza la masa sobre el lado ancho y colocar sobre una
	chapa con harina de maíz con la llave hacia abajo.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cubrir
	con harina de maíz y llevar a F2 hasta que duplique el volumen.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Mientras
	fermenta la pieza, generar una </span><span lang="es-MX"><b>mistela:
	</b></span><span lang="es-MX">Harina y agua a partes iguales (10%
	sobre harina usada en la receta de ambos ingredientes y agregar 0,5%
	de sal)</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dividir
	el bastón en 2 bastones y estirar cada uno a lo largo hasta obtener
	el mismo largo inicial.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Marcar
	con una brilla un canalón en el centro del pan dividiendo el bastón
	aplastado en 3 tercios. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	la mistela en las dos mitades laterales, cerrar las dos caras
	húmedas y volver a marcar un canalón en el centro (Esta vez no tan
	profundo).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Colocar
	cada mitad del bastón aplastado y untado con mistela en una chapa
	distinta con harina de maíz.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cubrir
	con harina de maíz y llevar nuevamente a fermentar hasta lograr el
	punto de cocción.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	cada bastón por el lado ancho en piezas de 5cm de lado. Colocar en
	chapas o directo a horno de piso con la mistela hacia arriba
	cubierta con harina de maíz. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
	el marsellés especial (Cuernitos) se procede de la misma forma
	hasta el punto 7, sin preparar la mistela. Continuar desde aquí
	untando el canalón formado en grasa ablandada y doblar uno de los
	tercios exteriores hacia el canalón y el otro tercio exterior sobre
	este, logrando un pequeño espiral en 3 etapas. Llevar a fermentar
	con la llave hacia abajo. Cuando se logre el punto de cocción,
	cortar a lo largo con el molde de cuernitos (En zigzag) y luego a lo
	ancho en piezas de 20 cm.  </span>
	</p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Tener
	preparada una </span><span lang="es-MX"><b>Granza</b></span><span lang="es-MX">:
	Sobre el 15% del total de la masa mezclar hasta obtener una textura
	arenosa 2/3 de harina y 1/3 de grasa ablandada. Puede realizarse
	durante el amasado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 1,5cm y estirar la masa para obtener un
	</span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pasar
	el paño a un torno y distribuir uniformemente la granza sobre el
	tercio central del largo del paño. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Ensobrar
	</b></span><span lang="es-MX">la granza uniendo las puntas largas
	sobre el centro de la granza y presionando entre sí para que no se
	escape la misma.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Presionar
	fuertemente los bordes cortos del paño para que no se escape la
	granza. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Hojaldrar
	</b></span><span lang="es-MX">en sobradora: 5 medias vueltas
	contínuas, en caso de notar mucha tenacidad, dejar descansar en la
	mitad de este proceso 10 minutos cubierta con un nylon. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobradora hasta 3cm aproximadamente y estirar la masa
	hojaldrada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Picar:
	</b></span><span lang="es-MX">Utilizar la pica cilíndrica para
	evitar que el hojaldre se rompa durante el horneado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a un torno y cortar con molde redondo o a cuchillo (Según forma
	deseada). Para roscas cortar la masa en rectángulos del doble de
	largo que de ancho.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">En
	el caso de las galletas, llevar a fermentar. En el caso de las
	roscas, dejar descansar 5 minutos la masa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Roscas:
	Doblar sobre el largo del rectángulo y aplastar los bordes unidos
	hasta la mitad de la rosca. En caso de querer agregar jamón y queso
	u otros ingredientes, este es el momento.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Roscas:
	Cortar en sentido vertical con separación de medio centímetro
	hasta la mitad de la zona aplastada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Roscas:
	Unir los lados aplastados laterales para formar la rosca y llevar a
	fermentar. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cuando
	las galletas o roscas estén en el punto de horneado llevar al horno
	de piso o rotativo. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
	galletas dulces (Cara sucia), untar con huevo rebajado en agua la
	superficie superior y agregar una capa generosa de azúcar que
	caramelizará en el horneado.</span></p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `   <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
    de la misma forma que la baguette. Prestando especial cuidado en la
    relación agua/harina. Es posible que por la fibra contenida en la
    harina integral, la masa requiera más agua de lo especificado en la
    receta. </span>
    </p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Con
    esta masa puede armarse Felipe, Porteño, Baguette, Molde o
    Marsellés.</span></p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: ` <ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Preparar
	el </span><span lang="es-MX"><b>empaste</b></span><span lang="es-MX">
	homogeneizando la harina y la grasa destinada a dicho fin, puede
	hacerse durante el amasado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 1cm aproximadamente y estirar la masa
	para obtener un </span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pasar
	el paño a un torno aceitado previamente y dejar descansar tapado
	durante 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Estirar
	el paño desde el centro y hacia los bordes lo más posible a mano,
	sinchando de los bordes hasta que la masa pase del opaco a un nivel
	de traslucidez mínimo (Más estirado implica rotura de la masa). </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Empastar
	todo el paño estirado de forma homogénea cuidando que no queden
	demasiados cúmulos de grasa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cubrir
	el empaste con una fina capa de harina.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Envolver
	desde un borde todo el paño con una moción cíclica parecido al
	repulgue de empanadas, generando un bastón apretado. En cada
	repulgue, ir sinchando la masa hasta aumentar levenemente el nivel
	de traslucidez evitando rupturas. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
	acción anterior generó un </span><span lang="es-MX"><b>bastón con
	hojaldre en espiral</b></span><span lang="es-MX">, el cual deberá
	dejarse descansar al menos 10 minutos. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Estirar
	el bastón gentilmente con suaves golpes en la mesa hasta lograr una
	</span><span lang="es-MX"><b>tripa</b></span><span lang="es-MX">: un
	cilindro de aproximadamente 3 cm de diámetro. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	el cilindro en unidades de 40-45g aproximadamente.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar el bizcocho, proceder a dar forma final deseada, untar con
	huevo rebajado en agua y llevar a fermentar hasta obtener el punto
	de horneado. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dulce
	común: Se estira el bizcocho a lo largo, se aplana una punta para
	obtener una V, y desde la boca de la misma se enrolla sobre sí. Al
	salir del horno se pinta con almíbar y se le coloca una capa de
	azúcar.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Salado
	común: Se procede igual al dulce común pero se estiba en la chapa
	estirando el bizcocho a lo largo y uniendo las dos puntas.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Margarita:
	Se estira el bizcocho a lo largo y se forma una cota simple dejando
	un hueco en el centro para rellenar con membrillo, dulce de leche o
	crema pastelera antes de entrar al horno. Se pinta con almíbar y se
	coloca azúcar al salir del mismo.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Vigilante:
	Se estira el bizcocho a lo largo y se tornea pegando las puntas a la
	chapa para evitar que se destornee.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Rellenos:
	Se procede igual al dulce común, excepto que cuando se forma la V,
	se envuelve en la boca el relleno deseado antes de proceder al
	enrolle. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
	el pan de manteca: Proceder hasta el punto 11 de la misma forma,
	cortar en trozos de 25-30cm, aplastar los bordes y realizar cortes
	de baguette. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
	la rosca y rosca de chicharrones: Proceder hasta el punto 11 de la
	misma forma, estirar el bastón hasta obtener una tripa de 5 cm de
	diámetro, cortar en trozos de 15 centímetros, aplastar la mitad
	larga con una brilla y proceder al corte típico de la rosca,
	uniendo los laterales. </span>
	</p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-left: 0.25in; margin-bottom: 0.11in">
<br/>
<br/>

</p>
`,
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
  instrucciones: ` <ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura y la materia grasa a
	la amasadora. Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cuando
	toda la harina esté humedecida, agregar la materia grasa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 20 minutos aproximadamente. Agregar la levadura en el cambio
	de velocidad. La alta hidratación puede requerir un tiempo más
	extenso de amasado. Buscar que la red de gluten quede bien generada
	y estable. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Darle
	media hora de F1 en una cuba levemente aceitada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	en piezas de 350g, y prebollar levemente. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar los prebollados 5 minutos y luego armar como baguette,
	uniendo ambas puntas para lograr generar la rosca. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Colocar
	la rosca en un molde de rosca de pascua circular con la llave hacia
	abajo, untar con huevo y dejar fermentar F2 hasta lograr el punto de
	horneado.</span></p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: ` <ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Poner
	a hervir la leche o el agua en caso de estar usando leche en polvo.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Colocar
	el resto de los ingredientes secos y los huevos en un bowl y
	homogeneizar.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cuando
	el líquido hierva, colocar la mitad aproximadamente en el bowl
	revolviendo enérgicamente para evitar formación de grumos. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cuando
	todos los sólidos se encuentren en dispersión colocar el resto del
	líquido en el bowl, homogeneizar nuevamente y pasar toda la mezcla
	a la olla.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a hervor y cocinar la crema hasta que espese.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	enfriar antes de usar.</span></p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>`,
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
  instrucciones: ` <ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 5 minutos. Agregar la levadura en el cambio de velocidad. No
	es necesario lograr una red de gluten completamente formada dado que
	no es el objetivo de este pan.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Sobar
	y dejar descansar 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	tiras y fraccionar en unidades de 40 gramos. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar fraccionado durante 10-15 minutos y proceder al armado
	típico de pan con grasa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F2 hasta obtener punto de cocción y hornear. </span>
	</p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 5 minutos. Agregar la levadura en el cambio de velocidad. No
	es necesario lograr una red de gluten completamente formada dado que
	no es el objetivo de este pan.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Sobar
	y dejar descansar 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	tiras y fraccionar en unidades de 40 gramos. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar fraccionado durante 10-15 minutos y proceder al armado
	típico de pan con grasa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F2 hasta obtener punto de cocción y hornear. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
	lograr pan con grasa con chicharrones utilizar 30% de este
	ingrediente sobre harina y 0,5% de pimienta. </span>
	</p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dividir
	en porciones adecuadas y preformar con boleado: Tortugas de 70g,
	Catalanes de 80g, Vienas de 50g.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar la masa 10 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Formar
	según objetivo. Cubrir con huevo y llevar a fermentar hasta lograr
	el punto de cocción.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Al
	salir del horno, untar con una mezcla a partes iguales de aceite,
	agua y una pizca sal para ablandar la costra. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">El
	formado de las tortugas es a partir de un boleado más intenso.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">El
	formado de los catalanes es igual al de la baguette en pequeña
	escala.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">El
	formado de los vienas se hace a partir de la </span><span lang="es-MX"><b>lágrima
	</b></span><span lang="es-MX">(Aplastando levemente un lado del
	primer boleado y estirando con motivo de enrolle) y procediendo como
	si fuera una V en el caso del bizcocho criollo.</span></p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 20 minutos aproximadamente. Agregar la levadura en el cambio
	de velocidad. La alta hidratación puede requerir un tiempo más
	extenso de amasado. Buscar que la red de gluten quede bien generada
	y estable. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Darle
	media hora de F1 en una cuba levemente aceitada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	en piezas de 350g, y bolear vigorosamente.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a F2 hasta duplicar el volumen las pizas. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Colocar
	las piezas con la llave hacia arriba y aplanar el centro, luego,
	continuar desde el centro hacia los bordes cuidando de no romper la
	estructura y generando un disco de masa en el aire. Puedes ayudarte
	con los puños en lugar de los dedos y la gravedad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	salsa de tomate y muzzarella u otros ingredientes e ir directamente
	al horno. </span>
	</p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Moldear
	la margarina de hojaldre en un bloque de aproximadamente 45x30cm</span><sup><span lang="es-MX">2</span></sup><span lang="es-MX">,
	dejar reposando el bloque de margarina en la heladera. Puedes
	realizar esta tarea durante el amasado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 1,5cm y estirar la masa para obtener un
	</span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pasar
	el paño a un torno y colocar el bloque de margarina frío sobre el
	tercio central del largo del paño. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Ensobrar
	</b></span><span lang="es-MX">la margarina uniendo las puntas largas
	sobre el centro de la granza y presionando entre sí para que no se
	escape la misma.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Presionar
	fuertemente los bordes cortos del paño para que no se escape la
	granza. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Hojaldrar
	</b></span><span lang="es-MX">en sobradora o laminadora: una vuelta
	simple y una vuelta doble. Entre cada vuelta, llevar a un abatidor
	de temperatura durante 10 minutos o dejar reposar 45 minutos en
	heladera para evitar que se escape la margarina.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobradora o laminadora hasta 1cm aproximadamente y
	estirar la masa hojaldrada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a un torno y cortar a cuchillo triángulos de aproximadamente 10
	centímetros de base y 15 centímetros de altura.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar 10 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Enrollar
	desde la base estirando la masa y estivar estirando a lo largo y
	juntando las puntas del croissant.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con huevo rebajado con agua.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">F2
	hasta lograr punto de cocción y llevar al horno.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Al
	salir, untar con almíbar.</span></p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para Croissant bicolor: Tomar 1/4 de la masa
  al final del amasado, agregar 20% de cacao sobre masa de esa parte y corregir humedad con agua,
  mezclar en velocidad lenta. Luego, se estira hasta tener 1cm más de cada dimensión que el paño (será considerablemente más fino)
  y se coloca arriba del mismo al finalizar los pliegues, previo al estirado final. Apretar bien los costados para que no se salga. </span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para el hojaldrado opuesto, luego de la última vuelta, previo al estirado,
  cortar tiras en sentido opuesto al hojaldrado y posicionar sobre la masa con el lado del hojaldre hacia arriba. Esto disminuirá el largo
  del paño hojaldrado a la mitad y duplicará su grosor. Proceder a estirar en el sentido de las betas del hojaldre superior.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pain au chocolat: En lugar de usar el armado desde triágulo, 
  cortar rectángulos de 20x10cm2 y sobre el lado corto colocar una barra de chocolate, envolverla ligeramente, colocar una segunda barra y 
  terminar de envolver todo el bizcocho.</span></p>
</ul>

<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 25 minutos aproximadamente. Agregar la levadura en el cambio
	de velocidad. La alta hidratación puede requerir un tiempo más
	extenso de amasado. Buscar que la red de gluten quede bien generada
	y estable. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F1 en una cuba con aceite generoso hasta que duplique el volumen.
	Aproximadamente en la mitad de este paso (25 minutos) retirar de la
	fermentadora y realizar un pliegue (4 medias vueltas en sí mismo a
	mano, uno en cada dirección de la cuba).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Espolvorear
	harina en los bordes y raspar las paredes para que la masa no quede
	pegada. Dar vuelta la cuba sobre un torno enharinado de un
	movimiento seco. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">No
	dudar en trabajar con harina para que no se pegue la masa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Manipulando
	lo menos posible, cortar en piezas de aproximadamente 350g y dejar
	descansar 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	al horno cuidando de manipular lo menos posible para conservar el
	gas generado en la fermentación.</span></p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Ciabatta
	con aceitunas: Agregar un 20% de aceitunas cuando sale de la
	amasadora, a mano dando pliegues en la masa hasta homogeneizar.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Ciabatta
	con longaniza y vino: Sustituír parte del agua por vino (50% vino
	tinto, y 30% agua) y agregar un 40% de longaniza cortadas en cubos
	pequeños cuando sale de la amasadora, a mano dando pliegues en la
	masa hasta homogeneizar.</span></p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 25 minutos aproximadamente. Agregar la levadura en el cambio
	de velocidad. La alta hidratación puede requerir un tiempo más
	extenso de amasado. Buscar que la red de gluten quede bien generada
	y estable. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F1 en una cuba con aceite generoso hasta que duplique el volumen.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Espolvorear
	harina en los bordes y raspar las paredes para que la masa no quede
	pegada. Dar vuelta la cuba sobre un torno enharinado de un
	movimiento seco. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">No
	dudar en trabajar con harina para que no se pegue la masa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Manipulando
	lo menos posible, cortar en piezas de aproximadamente 500g y bolear
	de la forma menos vigorosa posible, darle forma sin quitar el gas
	generado en la fermentación.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F2 hasta obtener el punto de cocción y cocinar con la llave hacia
	arriba manipulando lo menos posible el pan en el traslado al horno y
	posicionado.</span></p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Moldear
	la margarina de hojaldre (25% sobre la masa total) en un bloque de
	aproximadamente 45x30cm</span><sup><span lang="es-MX">2</span></sup><span lang="es-MX">,
	dejar reposando el bloque de margarina en la heladera. Puedes
	realizar esta tarea durante el amasado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 1,5cm y estirar la masa para obtener un
	</span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pasar
	el paño a un torno y distribuir uniformemente la granza sobre el
	tercio central del largo del paño. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Ensobrar
	</b></span><span lang="es-MX">la margarina uniendo las puntas largas
	sobre el centro de la granza y presionando entre sí para que no se
	escape la misma.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Presionar
	fuertemente los bordes cortos del paño para que no se escape la
	margarina. </span>
	</p>
</ol>
<ol start="17">
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Hojaldrar
	</b></span><span lang="es-MX">en sobradora: 3 vueltas simples. Entre
	cada vuelta, llevar a un abatidor de temperatura durante 10 minutos
	o dejar reposar 30 minutos en heladera para evitar que se escape la
	margarina.</span></p>
</ol>
<ol start="9">
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobradora hasta 3cm aproximadamente y estirar la masa
	hojaldrada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Picar:
	</b></span><span lang="es-MX">Utilizar la pica cilíndrica para
	evitar que el hojaldre se rompa durante el horneado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a un torno y cortar con molde redondo o a cuchillo (Según forma
	deseada). </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con huevo y llevar a fermentar. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cuando
	las galletas en el punto de horneado llevar al horno de piso o
	rotativo. </span>
	</p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 1,5cm y estirar la masa para obtener un
	</span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Pasar
	el paño a un torno y distribuir uniformemente una capa generosa de
	aceite y espolvorearle fécula de maíz arriba.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Ensobrar
	</b></span><span lang="es-MX">la masa uniendo las puntas largas
	sobre el centro de la granza y presionando entre sí para que no se
	escape la misma.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Presionar
	fuertemente los bordes cortos del paño para que no se escape el
	agente de hojaldrado. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Hojaldrar
	</b></span><span lang="es-MX">en sobradora: 5 medias vueltas
	contínuas, en caso de notar mucha tenacidad, dejar descansar en la
	mitad de este proceso 10 minutos cubierta con un nylon. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobradora hasta 3cm aproximadamente y estirar la masa
	hojaldrada. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	la masa en trozos más manejables y llevar estos a un espesor de
	aproximadamente medio centímetro en la sobadora. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Picar:
	</b></span><span lang="es-MX">Utilizar la pica cilíndrica para
	evitar que el hojaldre se rompa durante el horneado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a un torno sobre una cama de harina de maíz y cortar con molde
	redondo o a cuchillo (Según forma deseada).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Hornear
	directamente.</span></p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que la galleta de aceite.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
    galleta clásica sigue el mismo procedimiento que la galleta de
    aceite, la diferencia es que no se utiliza un agente de hojaldrado.
    En su lugar, se soban 3 medias vueltas con una capa generosa de
    fécula de maíz y 3 medias vueltas sin agregar fécula.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
    galleta sopladita se obtiene siguiendo el mismo procedimiento que
    para la galleta clásica solo que no se utiliza la pica, de esta
    forma, se separarán las capas durante el horneado y quedará
    inflada. </span>
    </p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
    la galleta de semillas, proceder igual que para la galleta clásica
    y utilizar un 15% de mix de semillas crudas. </span>
    </p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que con la galleta clásica, pero cuidando de
  obtener un grosor final de la masa en el sobrado de al menos 1cm.</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
  esta receta se utiliza la batidora con paleta.</span></p>
  <ol>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Mezclar
    la grasa y la azúcar hasta obtener una consistencia homogénea.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Añadir
    huevos, vainilla, color.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Añadir
    la harina, fécula, y polvo de hornear tamizados. </span>
    </p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Generar
    un bastón a mano de aproximadamente 5cm de diámetro (Aquí variará
    el tamaño final del ojito)</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
    discos de 2-3 cm de altura y colocarlos en la chapa engrasada con la
    base cicular hacia abajo.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Presionar
    con el dedo pulgar sobre la “tapa” circular para aplastar el
    ojito y generar el surco clásico.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Rellenar
    el surco con jalea o dulce de leche repostero.</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Hornear</span></p>
  </ol>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Existe
    una opción gourmet de utilizar como materia grasa 50% de grasa y
    50% de manteca. </span>
    </p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-left: 12.99in; margin-bottom: 0.11in">
  <br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que el croissant francés. Laminar con 3 vueltas
  simples dejando descansar en frío durante al menos media hora entre
  cada vuelta. Recordar que trabajar con manteca es complicado. </span>
  </p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Fermentar
  a temperatura máxima de 23 grados para evitar perder el hojaldre. </span>
  </p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de forma análoga a la baguette.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Fraccionar
  en unidades de 400g, realizar el doble corte clásico de pan casero
  según la figura debajo.</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Utilizar
	sobadora hasta obtener una masa homogénea y lo más rectangular
	posible. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Disminuír
	la luz de la sobadora hasta 2cm y estirar la masa para obtener un
	</span><span lang="es-MX"><b>paño.</b></span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	el paño a cuchillo de un ancho de aproximadamente 2-3 cm en cada
	listón.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	cada listón en trozos de 5-7cm.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	descansar los trozos al menos 15 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Estirar
	cada grisin hasta el ancho de la chapa. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	en F2 hasta obtener punto de cocción.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	al medio cada grisin para obtener grisines más cortos y estables. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cocinar
	en horno rotativo.</span></p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Al
	engrasar la chapa, hacer 3 líneas: Las dos laterales y el centro,
	donde será cortado el grisin antes de entrar al horno. De esta
	forma se evita que queden refritos en la base.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Grisin
	integral: Utilizar mezlca 70-30 de harina blanca e integral. Agregar
	5% más de agua.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Grisin
	con manteca: Sustituír el aceite por 15% de manteca y disminuír a
	30% el agua. Tener cuidado de no pasarse de hidratación en el
	amasado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Grisines
	de sabores: </span>
	</p>
	<ul>
		<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Ajo,
		2% de ajo deshidratado reconstituído en la misma masa del amasado.
		</span>
		</p>
		<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Semillas,
		15% de semillas crudas. </span>
		</p>
		<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Queso
		y orégano, 15% de queso y 0,8% de orégano.</span></p>
	</ul>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	a F1 por 15-20 minutos hasta que la levadura esté creciendo
	sanamente.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Fraccionar
	unidades de 70g y bolear vigorosamente.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">F2
	por 30 minutos hasta que tenga punto de cocción.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Bajar
	a palote el bollo con el torno enharinado.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dar
	una tercera fermentación de media hora hasta reconstituír el punto
	de cocción.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Entrar
	al horno, piso directo o plancha de hierro durante 5 minutos, no es
	necesario darlo vuelta. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Al
	salir del horno, tapar con nylon o trapo húmedo para conservar la
	humedad que aún estará escapando del pan. </span>
	</p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que el Viena regular. </span>
  </p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que la galleta de hojaldre.</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Agregar
	todos los ingredientes exceptuando la levadura a la amasadora.
	Encenderla en velocidad 1 por 5 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Si
	la masa está homogénea, aumentar la velocidad de la amasadora por
	otros 10 minutos. Agregar la levadura en el cambio de velocidad.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F1 por al menos 20 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dividir
	en porciones de 100g y dejarlas descansar 10 minutos.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Tomar
	6 de estas porciones para realizar el armado de trenza típico del
	jalá.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con huevo rebajado en agua las piezas.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">F2
	hasta obtener punto de cocción y hornear.</span></p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>`,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que para el pan de Viena, bolear porciones de 20
  gramos, untar en huevo y colocar azúcar previo a la fermentadora
  final.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
    naranja de la receta se añade licuada. Puede incluir cáscara y
    semillas (quedará un poco más amargo).</span></p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Puede
    utilizarse almíbar de naranja para pintar al salir del horno: </span>
    </p>
    <ul>
      <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">200g
      de azúcar</span></p>
      <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">200g
      de agua</span></p>
      <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">100g
      de naranja licuada</span></p>
    </ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">En
    caso de querer realizar pan de limón o pomelo usar solo un 10% en
    lugar de 30% de fruta.</span></p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que para el pan de Viena, bolear porciones de 200g.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones:</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
    remolacha se debe agregar licuada con parte del agua de la
    preparación. </span>
    </p>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Es
    posible que el pan requiera más agua según la calidad de la
    harina.</span></p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Proceder de la misma forma que para la galleta
  hojaldrada, utilizando 2 vueltas simples vueltas dobles con los
  debidos descansos por estar trabajando con margarina. </span>
  </p>
  <p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Sacar de la sobadora con una altura de 1 cm
  aproximadamente, picar y cortar.</span></p>
  <p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Untar con huevo y agregar queso rallado a las
  piezas.</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">La masa de las trenzas aquí mostrada es
  ilustrativa. Se pueden realizar estas trenzas con casi cualquier masa
  que tenga la consistencia adecuada (hidrataciones menores al 55%).</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Proceder igual que el pan de Viena (Armado de
  catalán) con piezas de 200g.</span></p>
  <p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Puede agregarse un 20-30% de pasas de uva en la
  mitad del amasado rápido para integrarlas a la masa.</span></p>
  <p style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <span lang="es-MX">Untar con almíbar y azúcar al salir del horno.</span></p>
  <p lang="es-MX" style="line-height: 108%; margin-left: 0.49in; text-indent: -0.49in; margin-bottom: 0.11in">
  <br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Batir
	todos los ingredientes con el espiral en una batidora hasta lograr
	el “punto letra”.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dibujar
	los bordes de una chapa y una X de punta a punta y colocar papel
	manteca arriba. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Volcar
	la mezcla de pionono y extender uniformemente sobre el papel
	manteca, cubriendo toda la chapa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cocinar
	en horno rotativo a 200-220ºC por 7 minutos sin vapor. (Cocción
	corta e intensa).</span></p>
</ol>
<p style="line-height: 108%; margin-left: 0.25in; margin-bottom: 0.11in">
<span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Una
	receta completa aquí mostrada rinde 4 chapas de 40x60cm</span><sup><span lang="es-MX">2</span></sup><span lang="es-MX">
	(8 piononos comerciales).</span></p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de igual forma que para los ojitos, pero generar un rollo de 7cm de
  diámetro y al presionar sobre la chapa utilizar toda la mano para no
  generar el surco.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">	</span><span lang="es-MX"><b>Consideraciones</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
    el polvorón de cacao o el mixto agregar un 20% de cacao en la
    mezcla y corregir humedad con agua hasta conseguir la consistencia
    anterior.</span></p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">La
  masa de las tapas se obtiene con el mismo procedimiento que los
  ojitos y los polvorones.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Luego
  de salir de la batidora, se estira a palote o sobradora hasta obtener
  una altura de 8mm.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Se
  corta con cortante y estiva en chapas.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
  <ul>
    <li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
    lograr el porte industrial de los alfajores, luego de ponerle dulce
    de leche entre las dos tapas, se aprieta y homogeiniza en el borde
    para disminuír el aire entre las capas. De esta forma, al mojar en
    coco rallado, toda la superficie exterior quedará con coco, y no
    solo el centro.</span></p>
  </ul>
  <p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
  <br/>
  
  </p>
  `,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Batir
	las claras con la espiral hasta punto nieve.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Batir
	las yemas con la espiral hasta emulsionarlas (Por separado de las
	claras).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Unir
	de manera envolvente con la ayuda de  una espátula la clara sobre
	la yema.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Incorporar
	los secos con el cernidor y ayudándose con la espátula de forma
	muy gentil.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Llevar
	la mezcla a una manga con pico liso y generar las plantillas sobre
	papel manteca en una chapa.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cocinar
	a 180ºC por 8 minutos, sin vapor. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Al
	salir del horno, espolvorear con azúcar impalpable. </span>
	</p>
</ol>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<ol>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">En
	la batidora con paleta, batir la manteca y el azúcar hasta obtener
	una mezcla homogénea y blanca. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Integrar
	huevos, vainilla y colorante.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Integrar
	la harina en tandas cortas y el polvo de hornear.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Batir
	hasta formar la red de gluten (Puede llevar 20 a 25 minutos de
	batido según la calidad de la harina)</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Sobre
	el final del amasado integrar la fruta y/o las chispas de chocolate.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F1 hasta que duplique el volumen.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Cortar
	trozos de 350g para moldes de medio litro y bolearlos</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Colocar
	en el molde con la llave hacia abajo dejándolo caer. Intentar no
	tocar las paredes con la masa. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con huevo rebajado en agua</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Dejar
	F2 hasta que la masa ocupe un 75% del volumen del molde. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Antes
	de entrar al horno, hacer dos cortes para formar una X en la
	superficie con una tijera. En el centro de los cortes, colocar un
	cubo de manteca fría. </span>
	</p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Hornear.</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Untar
	con almíbar al salir del horno. </span>
	</p>
</ol>
<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX"><b>Consideraciones</b></span></p>
<ul>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Budín
	con frutas abrillantadas: Utilizar un 100% de la harina en frutas
	(Por ejemplo, 2/3 frutas abrillantadas y 1/3 pasas de uva).</span></p>
	<li><p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Budín
	con chispas de chocolate: Utilizar un 50% de la harina en chispas de
	chocolate termoresistentes. </span>
	</p>
</ul>
<p lang="es-MX" style="line-height: 108%; margin-bottom: 0.11in"><br/>
<br/>

</p>
`,
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
  instrucciones: `<p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Proceder
  de la misma forma que para los palitos de queso. </span>
  </p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">Para
  las jesuitas cortar rectángulos de 2x5cm</span><sup><span lang="es-MX">2</span></sup><span lang="es-MX">
  y extender sobre la misma una pasteta batida con 200g de azúcar
  impalpable por cada clara de huevo usada. Luego de untar, esperar a
  que se le vaya el brillo (producto de un secado) a temperatura
  ambiente y hornear.</span></p>
  <p style="line-height: 108%; margin-bottom: 0.11in"><span lang="es-MX">En
  el caso de los pasteles, armar sin relleno doblando en triángulo y
  apretando en forma de V donde la boca de la misma es el lado cerrado
  del triángulo. Rellenar al Salir del horno cortando con tijera o
  cuchillo el hojaldre formado.</span></p>
  `,
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