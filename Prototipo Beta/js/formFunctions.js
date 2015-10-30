/*------------------------ Agregas estado a la form --------------------------------------- */

function addEstados() {
	var x = document.getElementById("estado");
	var option = document.createElement("option");
	var estados =["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas",
	"Chihuahua","Coahuila","Colima","Distrito Federal","Durango","Estado de México","Guanajuato",
	"Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla",
	"Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas",
	"Tlaxcala","Veracruz","Yucatán","Zacatecas"];
	
		for(i=0;i<=31;i++){
			var option = document.createElement("option");
			option.text = estados[i];
			option.value = estados[i];
			x.add(option, x[i]);
		}
	}
	
	function getIndex() {
	    document.getElementById("demo").innerHTML = document.getElementById("estado").value;
	}