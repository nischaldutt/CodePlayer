function updateOutput() {
	$("iframe").contents().find("html").html("<html><head><style type = 'text/css'>"
	+ $("#cssText").val() + "</style></head><body>" + $("#htmlText").val() + "</body></html>");
	
	//document.getElementById('outputText').contentWindow.eval($('#javascriptText').val());
}

$(".togglebtn").hover(function() {
	$(this).addClass("highlightbtn");
},
function() {
	$(this).removeClass("highlightbtn");
});

//Setting the height of four columns...
$("#htmlText").height($(window).height() - $("#nav").height() - 4);
$("#cssText").height($(window).height() - $("#nav").height() - 4);
$("#javascriptText").height($(window).height() - $("#nav").height() - 4);
$("#outputText").height($(window).height() - $("#nav").height() - 4);

$("#outputText").width($(window).width() - $("#htmlText").width() - 15);

$("iframe").contents().find("html").html($("#htmlText").val());

$(".togglebtn").click(function() {
	var panelId = $(this).attr("id") + "Text";
	$("#" + panelId).toggleClass("hidden");

	var numberOfActivePanels = 4 - $(".hidden").length;
	$(".panel").width(($(window).width() / numberOfActivePanels) - 10);
	updateOutput();
});

jQuery("#htmlText").on('input propertychange paste', function() {
    $("iframe").contents().find("html").html($("#htmlText").val());

		updateOutput();
});
