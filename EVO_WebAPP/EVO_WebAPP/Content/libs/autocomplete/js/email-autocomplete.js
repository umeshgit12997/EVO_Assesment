$(function(){
  var users = [
    { value: 'Adrian John', email: 'john@domain.com' },
    { value: 'Benjamin Charles', email: 'charles@domain.com' },
    { value: 'Michael Keith', email: 'keith@domain.com' },
    { value: 'Nathan Zacharias', email: 'nathan@domain.com' },
    { value: 'Christina Jenny', email: 'jenny@domain.com' },
    { value: 'Henry Brito', email: 'brito@domain.com' },
    { value: 'Adrian Collin', email: 'collin@domain.com' },
    { value: 'Dylan Brion', email: 'brion@domain.com' },
    { value: 'Hadrian Itzak	', email: 'itzak@domain.com' },

  ];
  
   // setup autocomplete function pulling from users[] array
   $('#autocomplete').autocomplete({
     lookup: users,
     onSelect: function (suggestion) {
       var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.email;
       $('#outputcontent').html(thehtml);
     }
   });
  

});