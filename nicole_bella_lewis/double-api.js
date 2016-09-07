$('form').on('submit', countrySearch);

function countrySearch(data) {
    // PREVENT THE DEFAULT BEHAVIOOR OF THE DATA
    data.preventDefault();

    // SERIALIZE THE ARRAY & GET THE VALUE
    var input = $('.form-control').val()
    // var input = $(this).serializeArray()[0].value

    // SPLIT AND JOIN THE INFO
    var countryName = input.split(' ').join('%20');
    // console.log(input)


    //--- NOW, WE MAKE OUR AJAX CALL ---
    $.ajax({
        url: "https://restcountries.eu/rest/v1/name/" + countryName + "?fullText=true",
        success: getCurrency
    })



    // OUTSIDE THE AJAX CALL #1, WE PERFORM THE CALLBACK FUNCTION UPON SUCCESS OF INFORMATION RETREIVAL
    function getCurrency(data) {
        console.log(data)
        
        // NOW WERE. TAKING OUR DATA FROM THE CONSOLE, AND CONVERTING IT TO A STRING
        var currency = (data[0].currencies).toString();

        // CONSOLE.LOG IT TO TEST IT OUT SO THAT IT PRINTS IN STRING FORMAT
        console.log(currency)

        //
        var countryCurrency = document.createElement('li')
        countryCurrency.innerHTML = currency
          $('#crncy').append(countryCurrency)

    // --- OKAY- NOW, OUR AJAX CALL #1 IS A SUCCESS ---
$.ajax({
        url: 'https://restcountries.eu/rest/v1/currency/'+currency,
        success: function(data) {
        for(var i = 0; i < data.length; i++) {
          var country = document.createElement('li')
          country.innerHTML = data[i].name
          $('#cntrs').append(country)
      }
        }
    })
    



    }



}// END OF COUNTRY FUNCTION




// This is the 2nd api call I was working on



