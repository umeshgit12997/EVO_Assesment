 $('#getComponent').on('change', function () {
     var selection = $(this).val();
     switch (selection) {
         case "inp-textbox":
             $(".texboxAttr").show();
             $(".na-text").hide();
             break;
         case "inp-textarea":
             $(".texboxAttr").show();
             $(".na-text").hide();
             break;
         case "inp-checkbox":
             $(".na-text").show();
             $(".texboxAttr").hide();
             break;
         case "inp-radio":
             $(".na-text").show();
             $(".texboxAttr").hide();
             break;
         default:
             $(".texboxAttr").hide();
             $(".na-text").hide();
     }
 });




 //Checklist
 $(document).ready(function () {
     $("#addChkBtn").click(function () {
         $("#chkList-dynamic-cb").append(`<div class="checkbox-group">
                                            <div class="chk-btn">
                                                <label class="cs-checkbox control-checkbox d-block">
                                                    <input type="checkbox"><div class="control_indicator"></div>
                                                </label>
                                            </div>
                                            <div class="chk-input">
                                                <input type="text" class="form-control" placeholder="Enter the Option">
                                            </div>
                                            <div class="chk-delete">
                                            <a   class="delete fp-actions delChkBtn" title="Delete" data-toggle="tooltip"><i class="fas fa-trash-alt text-danger  ft-12"></i> </a>  
                                          </div>
                                        </div>`);
     });
     
   

     $('.delChkBtn').on('click', function() {
        $(this).closest('.checkbox-group').remove();
      });
     $("#addRadioBtn").click(function () {
         $("#chkList-dynamic-radio").append(`<div class="radio-group">
         <div class="radio-btn">
            <label class="cs-radio control-radio d-block">
               <input type="radio" name="radio">
              <div class="control_indicator"></div>
          </label>
          </div>
        <div class="radio-input"><input type="text" class="form-control" placeholder="Enter the Option"></div>
        <div class="radio-delete">
          <a   class="delete delRadioBtn fp-actions" title="Delete" data-toggle="tooltip"><i class="fas fa-trash-alt text-danger  ft-12"></i> </a>  
        </div>
    </div>`);
     });
     
   

     $('.delChkBtn').on('click', function() {
        $(this).closest('.radio-group').remove();
      });
 });