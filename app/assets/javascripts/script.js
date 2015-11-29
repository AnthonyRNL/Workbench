$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('.slider').slider({
    full_width: false,
    transition:800,
  })

  $("#rightArrow").on("click", function(e){
    toggleSlide(true)
  })

  $("#leftArrow").on("click", function(e){
    toggleSlide(false)
  })

  function toggleSlide(direction){
    var elements = $(".hideable")
    var displayedID = getDisplayedID(elements)
    elements[displayedID].style.display = "none";
    if(!direction){
      var makeVisible = prev(displayedID, elements.length);
    } else {
      var makeVisible = next(displayedID, elements.length);
    }
    elements[makeVisible].style.display = "block"
  }

  function getDisplayedID(elements){
    var displayedID = -1;
    for(var i = 0; i < elements.length; i++){
      if(elements[i].style.display == "block"){
        displayedID = i
      }
    }
    return displayedID
  }

  function prev(num, length){
    if(num == 0) return length - 1;
    else return num - 1
  }

  function next(num, length){
    if(num == length - 1) return 0;
    else return num + 1
  }


});
