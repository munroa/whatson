jQuery(document).ready(function($) {
    loadCalendar();
});

function loadCalendar() {
    $('#calendar').load('/calendar/');
}
function editCalendar(id) {
    $('#editCalendar').modal('show');
    $('#editCStatus').load('/edit_calendars/?id='+id);
}
function newEventCreated() {
    $('#newEvent').modal('toggle');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('#eventAdded').modal('toggle');
}
function editEvent(eventID) {
    // Pop up alert asking if user wishes to delete event
    // If user confirms then the event is removed
    if (confirm('Are you sure you want to remove this event??')) {
        $(this).prev('span.text').remove();

        $.ajax("/edit_event/?id="+eventID)
            .done(function() {
                alert("Event has been deleted");
                loadCalendar();
            })


    }

}
$(function() {

    // Get the form.
    var form = $('#user_form');

    // Get the messages div.
    var formMessages = $('#result');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: "text",
            success: function(data) {
                $(formMessages).html(data);
                $('#user_form').hide();

            }
        })
    });

});

$(function() {

    // Get the form.
    var form = $('#login_form');

    // Get the messages div.
    var formMessages = $('#loginStatus');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: "text",
            success: function(data) {
                $(formMessages).html(data);


            }
        })
    });

});

$(function() {

    // Get the form.
    var form = $('#cal_form');

    // Get the messages div.
    var formMessages = $('#cal_status');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: "text",
            success: function(data) {
                //$('#cal_form').hide();

                var result = $(data).find("#cal_status");
                console.log(result);
                $(formMessages).html(result);


            }
        })
    });

});

$(function() {

    // Get the form.
    var form = $('#event_form');

    // Get the messages div.
    var formMessages = $('#event_status');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: "text",
            success: function(data) {

                var result = $(data).find("#event_status");

                console.log(result);

                $(formMessages).html(result);


            }
        })
    });

});

$(function() {

    // Get the form.
    var form = $('#edit_cal');

    // Get the messages div.
    var formMessages = $('#editCStatus');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: "text",
            success: function(data) {
                //$('#cal_form').hide();

                    $('#editCalendar').hide();
                    $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
    $('#calendarEdited').modal('toggle');
                $(formMessages).html(data);


            }
        })
    });

});
$('.form_datetime').datetimepicker({
    //language:  'fr',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1
});
$('.form_date').datetimepicker({
    language: 'fr',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('.form_time').datetimepicker({
    language: 'fr',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0
});