// on hover on div with data-location add class to div with the same id
jQuery(document).ready(function() {
    jQuery("[data-location]").hover(function() {
        var locationId = jQuery(this).data("location");
        jQuery("#" + locationId).addClass("hovered");
    }, function() {
        var locationId = jQuery(this).data("location");
        jQuery("#" + locationId).removeClass("hovered");
    });
})

// on click on div with id add class "show" to div with data-locationdetails like this id
jQuery(document).ready(function() {
    jQuery(".mit_map_marker").click(function() {
        jQuery(".mit_map_marker").removeClass("hovered");
        jQuery(".mit_map_marker").removeClass("active");
        jQuery(".mit_location_info").removeClass("active");
        // jQuery(".mit_location_info").hide();
        // jQuery(".mit_locations_show_all").show();
        jQuery(".mit_location_info_details").removeClass("show");
        var locationId = jQuery(this).attr("id");
        jQuery("[data-locationdetails=" + locationId + "]").addClass("show");
        jQuery("[data-location=" + locationId + "]").addClass("active");
        jQuery("#" + locationId + "").addClass("hovered");
    });
    jQuery(".mit_location_info h4").click(function() {
        jQuery(".mit_map_marker").removeClass("hovered");
        jQuery(".mit_map_marker").removeClass("active");
        jQuery(".mit_location_info").removeClass("active");
        // jQuery(".mit_location_info").hide();
        // jQuery(".mit_locations_show_all").show();
        jQuery(".mit_location_info_details").removeClass("show");
        var locationId = jQuery(this).parent('div').data("location");
        console.log(locationId);
        jQuery("[data-locationdetails=" + locationId + "]").addClass("show");
        jQuery("[data-location=" + locationId + "]").addClass("active");
        jQuery("#" + locationId).addClass("active");
    });

    jQuery(".mit_locations_show_all").click(function() {
        // jQuery(".mit_location_info").show();
        // jQuery(".mit_locations_show_all").hide();
        jQuery(".mit_location_info_details").removeClass("show");
        jQuery(".mit_map_marker").removeClass("hovered");
    });
})



