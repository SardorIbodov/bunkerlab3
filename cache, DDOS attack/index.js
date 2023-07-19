function getData() {
  fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
}

function getCachedData(func) {
	let cache = new Map();
	return function(data) {
		if(cache.has(data)) {
			return cache.get(data);
		} 
		let result = func();
		cache.set(data, result);
		return cache.get(data);
	} 
}

getData = getCachedData(getData);