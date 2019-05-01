$(document).ready(function(){    
    console.log('jq ready!');
    var link = 'http://data.fixer.io/api/latest?access_key=5420222ad50073ff6264e341cd0a417b&format=1';
    $.ajax({
      method: 'GET',
      url:link,
      success: function (rates) {
      var keys = Object.keys(rates.rates);
      for (var i=0; i<keys.length; i++){
        var newOption = $('<option>');
        newOption.text(keys[i]).val(keys[i]);
        $('#baseOption').append(newOption);
      }
      for (var i=0; i<keys.length; i++){
        var newOption = $('<option>');
        newOption.text(keys[i]).val(keys[i]);
        
        $('#targetOption').append(newOption);
      }
      },
      error: function(error) {
        console.log('error with Currency Conversion API!!!');
        console.log(error);
      }
    })
    $('button').on('click', function(event){
        event.preventDefault();
        var base = $('#baseOption').val();
        var target = $('#targetOption').val();
        var amount = $('#amount_').val();
        console.log(base, target, amount)

    $.ajax({
      method: 'GET',
      url:link,
      success: function (rates) {
        var baseRate =rates.rates[base];
        var targetRate = rates.rates[target];
        if(base == "EUR"){
          var result = amount * targetRate;
          var newP = $('<p/>').text(result);
          $('#result').append(newP);
        }
        else{
          var result = (amount/baseRate) * targetRate;
          var newP = $('<p/>').text(result);
          $('#result').append(newP);
        }
      },
      error: function(error) {
        console.log('error with Currency Conversion API!!!');
        console.log(error);
      }
    })
    
});

})