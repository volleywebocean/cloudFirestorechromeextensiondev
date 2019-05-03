  var len = 0;
  var temp = 0;

  $(document).ready(function(){
    // Your web app's Firebase configuration
    
    $("body").prepend("<div id='planaway'>PlanAway.io</div>");
    $("head").append("<style>.gb_hd { position: relative; }</style>");

    setInterval(() => {
      len=$(".save-plan-way").length;
      temp=$(".gws-flights-results__itinerary-stops.gws-flights__ellipsize").length;
      len=temp-len;
      
      if (len > 0){
        $(".save-plan-way").remove();
        $(".gws-flights-results__itinerary-stops.gws-flights__ellipsize").after(
          `<Button class='save-plan-way'>
            <div class='heart-icon'></div>Save To PlanAway
          </Button>`
        );

        $(".save-plan-way").click(function(event) {
          // event.stopPropagation();
          // alert("hello");
          chrome.runtime.sendMessage({name:"alan", city: "New York"});
        });    
      }
    }, 1000);
});

