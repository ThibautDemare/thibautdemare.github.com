/* The following script uses the flickr API to get urls of my photos (from my profile) and then create child element to #lightgallery div according to lightgallery docs */




var request = new XMLHttpRequest();
request.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=960a83cd2ed4ffb461889bb3dac6225a&user_id=thibaut_demare&format=json&per_page=500&nojsoncallback=?&extras=original_format', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var ulBlock = document.createElement("ul");
    ulBlock.setAttribute('id', 'lightgallery');
    ulBlock.setAttribute('class', 'list-unstyled row');

    var photosJSONObj = data.photos
	photosJSONObj.photo.forEach(function(element) {

		var liBlock = document.createElement("li");
		//liBlock.setAttribute('data-src', "https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id + "_" + element.originalsecret + "_o." + element.originalformat );
		liBlock.setAttribute('data-src', "https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id + "_" + element.secret + "_b.jpg");
		liBlock.setAttribute('data-pinterest-text', 'https://www.flickr.com/photos/thibaut_demare/');
		liBlock.setAttribute('data-tweet-text', 'https://www.flickr.com/photos/thibaut_demare/');

		var aBlock = document.createElement("a");
		aBlock.setAttribute('href', "");

		var imgBlock = document.createElement("img");
		imgBlock.setAttribute('src', "https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id + "_" + element.secret + "_q.jpg");
		imgBlock.setAttribute('class', "img-responsive");

		var divBlock = document.createElement("div");
		divBlock.setAttribute('class', "demo-gallery-poster");

		var imgZoomBlock = document.createElement("img");
		imgZoomBlock.setAttribute('src', "js/lightGallery/img/zoom.png");

		divBlock.appendChild(imgZoomBlock);
		aBlock.appendChild(imgBlock);
		aBlock.appendChild(divBlock);
		liBlock.appendChild(aBlock);
		ulBlock.appendChild(liBlock);
	});
    
    var divBlock = document.getElementById("gallerydiv");
    divBlock.appendChild(ulBlock);

	function customizeGallery(trans, ease) {
		$('#lightgallery').lightGallery({
			loop: true,
			fourceAutoply: false,
			autoplay: false,
			thumbnail: true,
			//pager: $(window).width() >= 768 ? true : false,
			speed: 400,
			scale: 1,
			keypress: true,
			mode: trans,
			cssEasing: ease
		});
	}

	customizeGallery('lg-slide', 'cubic-bezier(0.25, 0, 0.25, 1)');

	$('#select-trans').on('change', function() {
		$('#lightgallery').data('lightGallery').destroy(true);
		customizeGallery($('#select-trans').val(), 'cubic-bezier(' + $('#select-ease').val() + ')');
	});

	$('#select-ease').on('change', function() {
		$('#lightgallery').data('lightGallery').destroy(true);
		customizeGallery($('#select-trans').val(), 'cubic-bezier(' + $('#select-ease').val() + ')');
	});

  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
