$(function () {
	$("#sortable").sortable({
		revert: true
	});
	$("#draggable1, #draggable2, #draggable3, #draggable4").draggable({
		connectToSortable: "#sortable",
		helper: "clone",
		revert: "invalid"
	});
	$( "ul, li" ).disableSelection();
	
	//Borrar elementos de una lista
	$("#trash").droppable({
		//Al dejar sobre #trash
		drop: function(event, ui){
			//Si el padre es sortable se puede borrar
			if(ui.draggable.parent().attr("id") == "sortable"){
				ui.draggable.remove();
				console.log("Elemento borrado de sortable.");
			}
		}
	});
});