$(function(){
  var users = [
    { value: 'Manufacture 1', id: 'manuf1' },
    { value: 'Manufacture 2', id: 'manuf2' },
    { value: 'Manufacture 3', id: 'manuf3' },
    { value: 'Manufacture 4', id: 'manuf4' },
    { value: 'Manufacture 5', id: 'manuf5' },
    { value: 'Manufacture 6', id: 'manuf6' },
    { value: 'Manufacture 7', id: 'manuf7' },
    { value: 'Manufacture 8', id: 'manuf8' },
    { value: 'Manufacture 9', id: 'manuf9' },
    { value: 'Manufacture 10', id: 'manuf10' },

  ];
  
   // setup autocomplete function pulling from users[] array
   $('#autocomplete').autocomplete({
     lookup: users,
        
   });
  

});