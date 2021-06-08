 

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
$('.question-lists').on('click', 'button[type="button"]', function () {
    $(this).closest('li').remove();
})
$('.add-question-btn button[type="button"]').click(function () {
     
     $(".question-lists").append('<li><div class="row"><div class="col-md-8"><textarea name="questions" id="" class="question-item form-control" rows="1"></textarea></div><div class="col-md-3"><select class="form-control"><option>Physician and Physicist</option><option>Physician</option><option>Physicist</option></select></div><div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div></div></li>');
 });
 

$(".editable-ss").each(function (index) {
    document.getElementById("" + $(this).attr('id')).contentEditable = true;
});
$(".editable-s").each(function (index) {
    document.getElementById("" + $(this).attr('id')).contentEditable = true;
});
 
$("#addSection").click(function(){
    $('.clone-section').clone().appendTo('.menu-list').show();
  });


  $("#delete-section").click(function (e) {
    $(this).closest('li').remove();
    });
$("#delete-subsection").click(function (e) {
    $(this).closest('li').remove();
    });

   