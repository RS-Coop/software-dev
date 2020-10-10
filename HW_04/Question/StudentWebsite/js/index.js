$(document).ready(function() {
    var apiKey = "a53ed4e5fb5446fd62d03116c78d1c9c" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    var state_obj = state_info['CO']

    var lat = null
    var long = null
    var color = ""
    var i = 0

    Object.keys(state_info).forEach(function(state_name,index){
      lat = state_info[state_name].lat
      long = state_info[state_name].lng

      var url =`https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;

      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                  console.log(data)
                  var temp = null
                  // TODO
                  // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                  var temp = data.currently.temperature

                  console.log(temp)

                  //TODO
                  // Default color gray
                  // Create a series of if else blocks to set the color for the state based on the temperature
                  // Less than equal to 10 should be blue
                  // Between 11 and 30 should be cyan
                  // Between 31 and 50 should be green
                  // Between 51 and 80 should be orange
                  // Greater than 80 should be red

                  if(temp < 11)
                    color = "blue"
                  else if (temp < 31 && temp >= 11)
                    color = "cyan"
                  else if (temp < 51 && temp >= 31)
                    color = "green"
                  else if (temp < 81 && temp >= 51)
                    color = "orange"
                  else if (temp >= 81)
                    color = "red"
                  else
                    color = "grey"
                  console.log(color)
                  $('#'+state_name).css('fill', color);   // Example on how to fill colors for your state.
      });
    })
});
