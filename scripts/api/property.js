// All Property APIs
var Property = (() => {
	// List all properties
	var listProperties = () => Api.httpGet('facility/');
	// Get details of a property
	var getProperty = (propertyid) => Api.httpGet('facility/' + propertyid);
	
		return {
		listProperties,
		getProperty
	}
})();