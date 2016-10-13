

var prevTarget = null;
var prevPanel = null;

$('button').on('click', function(event){
	var target = $(event.target);
	var curTarget = target.attr("id").slice(-1);
	var curPanel = $(target[0].nextElementSibling);
  	if (prevTarget!==null && prevTarget!==curTarget){
  		//Different already open
  		prevPanel.toggleClass('active');
  		prevTarget = curTarget;
  	} else if (prevTarget === curTarget){
  		//Same already open
  		prevTarget = null;
  	} else if (prevTarget === null){
  		//None open
  		prevTarget = curTarget;
  	}
  	prevPanel = curPanel;
  	curPanel.toggleClass('active');
});


