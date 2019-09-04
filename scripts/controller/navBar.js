(() => {
    //Global Variable Assigning
    var mPropertyId;
    // Do followings, on page load.
    $(document).ready(() => {
        // Get First Property Id
        Property.listProperties().done((property) => {
            mPropertyId = property[0]._id;
            // Fetch images
            fetchAddress();
        });
    });
    // Fetch available room types and show in drop-down
    // Fetch Iamges
    function fetchAddress() {
        Property.getProperty(mPropertyId).done((property) => {
            createpropertyEntry(property);
        });
    }
    // Fetch Property images, name, and address.
    function createpropertyEntry(propertydata) {
        // Fetch address in navigation
        $('#PropertyAddress').html('<li>' + propertydata.address.line1 + '<br>' + propertydata.address.line2 + '<br>' +
            '<span class="contact">Phone no: +91 ' + propertydata.phonenumber1 + '</span>' +
            '</li>');
    }
})();
