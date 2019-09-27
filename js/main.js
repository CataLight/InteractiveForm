// setting global variables
const $otherTitle = $('#other-title');
const $jobRole= $('#title');
const $design = $('#design');
const $colorLabel = $('label[for="color"]');
const $color = $('#color');
const $checkboxes = $('.activities input');

// setting focus, hide and values when the page loads
$('#name').focus();
$otherTitle.hide();
$color.hide();
$colorLabel.text('Please select a T-shirt theme');

// when other is selected show the input text
$jobRole.on('change', function(){
    const $jobRoleVal = $jobRole.val();

    if($jobRoleVal === 'other'){
        $otherTitle.show();
    }
});

$design.on('change', function(){
    const $designValue = $design.val();
    $color.show();

    if($designValue === 'js puns'){
        $('#color option:eq(3)').removeAttr('selected');
        $('#color option:eq(0)').removeClass('is-hidden');
        $('#color option:eq(1)').removeClass('is-hidden');
        $('#color option:eq(2)').removeClass('is-hidden');
        $('#color option:eq(3)').addClass('is-hidden');
        $('#color option:eq(4)').addClass('is-hidden');
        $('#color option:eq(5)').addClass('is-hidden');
    
    }
    else if($designValue === 'heart js'){
        $('#color option:eq(3)').attr('selected', true);
        $('#color option:eq(0)').addClass('is-hidden');
        $('#color option:eq(1)').addClass('is-hidden');
        $('#color option:eq(2)').addClass('is-hidden');
        $('#color option:eq(3)').removeClass('is-hidden');
        $('#color option:eq(4)').removeClass('is-hidden');
        $('#color option:eq(5)').removeClass('is-hidden');
    }
    else{
        $color.hide(); 
    }
});


$checkboxes.on('change', function(e){

    const $clicked = $(e.target);
    console.log($clicked.attr());
    const $clickedType = $clicked.attr('data-day-and-time');
    console.log($clickedType);
    const $clickedVal = $clickedType.val();
    console.log($clickedVal);

    $checkboxes.each(function(i, checkbox){
        
        const $checkboxType = $(checkbox).attr('data-day-and-time');
        // console.log($checkboxType);
        // console.log(checkbox);

        if($clickedType === $checkboxType && $clicked !== $checkboxes[i]){
            
            console.log($clicked);
            console.log($checkboxes[i]);
            $(checkbox).attr('disabled', true);

        }
    });
});