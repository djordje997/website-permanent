
function mouseIn(id){
image = id.getElementsByClassName("logo")[0]
text_button = id.getElementsByClassName("text-button")[0]
text_button.style.visibility = 'visible';
$(image).hide()
$(text_button).fadeIn('slow')




};

function mouseOut(id){
image = id.getElementsByClassName("logo")[0]
text_button = id.getElementsByClassName("text-button")[0]

$(text_button).hide()
$(image).fadeIn('medium')


};
