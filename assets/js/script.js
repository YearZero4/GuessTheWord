let n0 = 0; 
function init() {
	const input0 = document.getElementById("input0");
	input0.select();
	function indicatorError(n) {
		document.getElementById("error").innerHTML = `Error = <span style="color: red;">${n}</span> `;
	}

	indicatorError(n0);

	const cant = document.getElementById("cantidadLetter");
 let palabras = [
  "correr", "saltar", "nadar", "caminar", "hablar", "escuchar", "ver", "tocar", "oler", "pensar",
  "comer", "beber", "jugar", "reir", "llorar", "escribir", "leer", "cantar", "bailar", "dibujar",
  "crear", "construir", "destruir", "viajar", "explorar", "trabajar", "descansar", "estudiar",
  "enseñar", "aprender", "soñar", "despertar", "saludar", "despedir", "celebrar", "meditar",
  "cocinar", "limpiar", "organizar", "planificar", "investigar", "analizar", "resolver",
  "producir", "disfrutar", "compartir", "regalar", "ayudar", "guiar", "acompañar", "liderar",
  "seguir", "conectar", "interactuar", "comunicar", "motivar", "inspirar", "persuadir",
  "convencer", "negociar", "debate", "discutir", "argumentar", "opinar", "decidir", "elegir",
  "perro", "gato", "elefante", "jirafa", "leon", "tigre", "lobo", "zorro", "conejo", "raton",
  "caballo", "vaca", "oveja", "cerdo", "pajaro", "pez", "tortuga", "lagarto", "ranita", "serpiente",
  "delfin", "ballena", "murcielago", "canguro", "koala", "panda", "rinoceronte", "hipopotamo",
  "avestruz", "foca", "cerca", "gallo", "pavo", "pato", "ganso", "gallina", "mariposa", "abeja",
  "escorpion", "araña", "cangrejo", "langosta", "salmonete", "caballito", "cabra", "buey", "bufalo",
  "ardilla", "mapache", "zorro", "topo", "nutria", "raton", "ardilla", "perezoso", "puma", "rata",
  "rojo", "verde", "azul", "amarillo", "naranja", "morado", "rosa", "negro", "blanco", "gris",
  "marron", "turquesa", "violeta", "cian", "magenta", "oro", "plata", "lavanda", "crema", "celeste", "coral", "cafe", "champan", "esmeralda", "salmon", "lima", "cobalt",
  "caramelo", "almendra",
  "feliz", "triste", "rapido", "lento", "fuerte", "debil", "luminoso", "oscuro", "caliente", "frio",
  "suave", "duro", "ligero", "pesado", "dulce", "salado", "amargo", "acido", "picante", "sabroso",
  "interesante", "aburrido", "hermoso", "feo", "elegante", "sencillo", "complejo", "sorprendente",
  "predecible", "divertido", "triste", "gracioso", "serio", "intenso", "tranquilo", "ruidoso",
  "silencioso", "brillante", "opaco", "claro", "oscuro", "calido", "fresco", "frio", "templado",
  "deslumbrante", "palido", "vivo", "sutil", "intenso", "explosivo", "tranquilo", "tenso", "relajado",
  "dinamico", "estatico", "movil", "fijo", "interactivo", "estatico", "fluido", "ritmico", "armonioso",
  "inteligente", "sabio", "curioso", "creativo", "timido", "extrovertido", "introvertido", "optimista",
  "pesimista", "realista", "idealista", "practico", "teorico", "empirico", "filosofico", "cientifico",
  "artistico", "musical", "literario", "dramatico", "comico", "tragico", "historico", "cultural",
  "social", "politico", "economico", "ambiental", "tecnologico", "digital", "virtual", "fisico",
  "espiritual", "emocional", "mental", "psicologico", "sociologico", "antropologico", "geografico",
  "biologico", "quimico", "fisico", "matematico", "estadistico", "lingüistico", "filologico",
  "etimologico", "cognitivo", "conductual", "evolutivo", "ontologico", "epistemologico", "axiologico",
  "metodologico", "hermeneutico", "dialectico", "sistematico", "sinergico", "interdisciplinario",
  "complejo", "simple", "flexible", "rigido", "adaptable", "inmutable", "dinamico", "estatico",
  "fluido", "categorico", "especulativo", "abstrato", "concreto", "teorico", "practico", "aplicado",
  "real", "irreal", "imaginario", "fantastico", "maravilloso", "extraordinario", "increible",
  "sorprendente", "asombroso", "maravilloso", "impactante", "revolucionario", "transformador",
  "innovador", "creador", "generador", "constructor", "emprendedor", "pionero", "explorador", 
  "aventurero", "navegante", "viajero", "buscador", "investigador", "cientifico", "explorador",
  "filosofo", "pensador", "soñador", "visionario", "estratega", "planificador", "organizador",
  "ejecutor", "realizador", "productor", "director", "gestor", "administrador", "lider", "guia",
  "mentor", "consejero", "asesor", "padre", "madre", "hermano", "hermana", "amigo", "compañero",
  "socio", "colega", "aliado", "socio", "conocido", "vecino", "compañero", "colega", "asociado",
  "colaborador", "socio", "cooperante", "participante", "integrante", "miembro", "representante",
  "embajador", "diplomatico", "delegado", "enviado", "portavoz", "vocero", "representante", 
  "defensor", "promotor", "patrocinador", "sostenedor", "apoyador", "benefactor", "financiero",
  "inversor", "patron", "patrocinador", "mecenas", "sponsor", "promotor", "organizador", 
  "planificador", "coordinador", "gestor", "director", "administrador", "ejecutor", "realizador",
  "productor", "creador", "inventor", "innovador", "pionero", "explorador", "investigador",
  "cientifico", "profesor", "educador", "maestro", "instructor", "guia", "tutor", "mentor",
  "consejero", "orientador", "facilitador", "moderador", "mediador", "intermediario", "negociador",
  "conocedor", "experto", "especialista", "autoridad", "sabio", "inteligente", "ingenioso", 
  "brillante", "genio", "talentoso", "dotado", "capaz", "competente", "eficiente", "productivo",
  "eficaz", "exitoso", "triunfador", "vencedor", "ganador", "lider", "guia", "pionero", "explorador",
  "aventurero", "navegante", "viajero", "buscador", "investigador", "cientifico", "filosofo",
  "pensador", "soñador", "visionario", "estratega", "planificador", "organizador", "ejecutor", 
  "realizador", "productor", "director", "gestor", "administrador", "lider", "guia", "mentor",
  "consejero", "asesor", "padre", "madre", "hermano", "hermana", "amigo", "compañero", "socio",
  "colega", "aliado", "socio", "conocido", "vecino", "compañero", "colega", "asociado",
  "concepto", "idea", "pensamiento", "creencia", "valor", "principio", "norma", "regla", 
  "ley", "postulado", "teoria", "hipotesis", "proposicion", "afirmacion", "declaracion",
  "enunciado", "propuesta", "sugerencia", "opinion", "juicio", "evaluacion", "analisis",
  "criterio", "referencia", "parametro", "estandar", "modelo", "prototipo", "ejemplo",
  "ilustracion", "analogia", "metafora", "similitud", "comparacion", "contraste", "oposicion",
  "dilema", "paradoja", "contradiccion", "ambiguo", "equivoco", "polemico", "controversial",
  "discutible", "cuestionable", "relativo", "absoluto", "universal", "particular", "especifico",
  "general", "comun", "raro", "excepcional", "extraordinario", "singular", "unico", "irrepetible",
  "inedito", "original", "nuevo", "fresco", "reciente", "moderno", "contemporaneo", "actual",
  "vanguardista", "progresista", "innovador", "revolucionario", "transformador", "disruptivo",
  "cambio", "evolucion", "desarrollo", "progreso", "mejora", "optimizacion", "perfeccionamiento",
  "adaptacion", "flexibilidad", "resiliencia", "crecimiento", "expansion", "ampliacion", "diversificacion",
  "complejidad", "simples", "sencillez", "claridad", "transparencia", "coherencia", "consistencia",
  "congruencia", "unidad", "integridad", "totalidad", "completud", "plenitud", "equilibrio", 
  "armonia", "sintonia", "concordia", "paz", "tranquilidad", "calma", "serenidad", "relajacion",
  "reposo", "descanso", "reflexion", "meditacion", "contemplacion", "introspeccion", "analisis",
  "evaluacion", "diagnostico", "investigacion", "estudio", "observacion", "exploracion", 
  "indagacion", "sondeo", "encuesta", "entrevista", "cuestionario", "test", "evaluacion", 
  "examen", "prueba", "observacion", "experimentacion", "metodo", "tecnica", "procedimiento",
  "estrategia", "plan", "diseño", "proyecto", "programa", "iniciativa", "accion", "tarea", 
  "funcion", "rol", "responsabilidad", "obligacion", "compromiso", "deber", "derecho", 
  "libertad", "autonomia", "independencia", "soberania", "voluntad", "deseo", "aspiracion",
  "meta", "objetivo", "proposito", "intencion", "finalidad", "destino", "horizonte", 
  "perspectiva", "vision", "mira", "futuro", "destino", "oportunidad", "chance", "posibilidad",
  "potencial", "capacidad", "habilidad", "competencia", "destreza", "talento", "aptitud",
  "cualidad", "caracteristica", "atributo", "propiedad", "elemento", "factor", "componente",
  "ingrediente", "constituente", "parte", "pieza", "segmento", "seccion", "categoria", "clase",
  "tipo", "modelo", "variedad", "especie", "genero", "familia", "grupo", "conjunto", "colectivo",
  "multitud", "masa", "multiforme", "diverso", "heterogeneo", "homogeneo", "uniforme", "similar",
  "diferente", "contrario", "opuesto", "interaccion", "relacion", "conexion", "vinculo", 
  "enlace", "union", "asociacion", "colaboracion", "cooperacion", "sinergia", "comunicacion",
  "interaccion", "intercambio", "transferencia", "comparticion", "distribucion", "circulacion",
  "movimiento", "dinamica", "flujo", "corriente", "tendencia", "moda", "estilo", "patron",
  "modelo", "referente", "estandar", "norma", "prototipo", "ejemplo", "ilustracion", "analogia",
  "metafora", "similitud", "comparacion", "contraste", "oposicion", "dilema", "paradoja",
  "contradiccion", "ambiguo", "equivoco", "polemico", "controversial", "discutible", "cuestionable",
  "relativo", "absoluto", "universal", "particular", "especifico", "general", "comun", "raro",
  "excepcional", "extraordinario", "singular", "unico", "irrepetible", "inedito", "original",
  "nuevo", "fresco", "reciente", "moderno", "contemporaneo", "actual", "vanguardista", "progresista",
  "innovador", "revolucionario", "transformador", "disruptivo"
 ];
	let cantidad = palabras.length;

	function showPalabra() {
		let aleatorio = Math.floor(Math.random() * cantidad);
		let text = palabras[aleatorio];
		return text;
	}

	const generar = showPalabra();
	console.log(generar);
	const range = generar.length;
	cant.innerHTML = `Cantidad de letras = ${range}`;
	for (i = 1; i <= range; i++) {
		const letterDiv = document.createElement("div");
		letterDiv.id = "letter";
		const letterAllDiv = document.getElementById("letterAll");
		letterAllDiv.appendChild(letterDiv);
	}

	let n = 1;
	window.check = function () {
		input0.select();
		let k0 = document.getElementById("input0").value;
		let text = generar;
		input0.value = "";
		const positions = [];
		for (let i = 0; i < text.length; i++) {
			if (text[i] === k0) {
				positions.push(i + 1);
			}
		}

		let fail = [];

		if (positions.length === 0) {
			if (n0 >= 3) {
				document.body.innerHTML =
					'<h1 style="color:red;font-size:50px;text-align:center;margin-top:20%;">LO SIENTO (PERDISTES)</h1>';
			} else {
        n0 += 1;
				indicatorError(n0);
			}
		} else {
			const letterFound = document.querySelectorAll("#letter");
			positions.forEach((x) => {
				console.log(k0);
				console.log(x);
				letterFound[x - 1].textContent = k0;

				const lt = document.querySelectorAll("#letter");
				let lx = "";
				lt.forEach((x) => {
					lx += x.textContent;
				});

				if (lx === text) {
					document.getElementById("next").innerHTML = "Ganastes";
					setTimeout(() => {
						const letters = letterAll.querySelectorAll("#letter");
						document.getElementById("next").innerHTML = "";
						n0 = 0;
						letters.forEach((letter) => {
							letter.remove();
						});
						init();
					}, 4000);
				}
			});
		}
	};

	document.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			if (input0.value.trim() !== "") {
				check();
			}
		}
	});
}
init();
