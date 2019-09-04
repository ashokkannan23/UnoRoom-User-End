var Meta = (() => {
	
	var getRoomTypes = (buildingType) => Api.httpGet('meta/roomtypes?buildingtype=' + buildingType);

	return {
		getRoomTypes
	}
})();
