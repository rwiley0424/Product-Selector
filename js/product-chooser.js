const productPhoto = document.getElementById('product-photo');
        const priceSpan = document.querySelector('.price');
        // use querySelectorAll() to get ALL the buttons; the result is an array of DOM elems 
        const btnsArr = document.querySelectorAll('.color-swatches button');
		// loop btnsArr, assigning click event listener to each btn; in this way we make each btn call the func:
		for(let i = 0; i< btnsArr.length; i++){
			// btnsArr[i].addEventListener('click', changeColor)
			btnsArr[i].addEventListener('mouseover', changeColor)
		}
        const prices = ["$49.50", "$79.88", "$67.25", "$110", '$12.99', '$123.66', '$56.50', '$33.23', '$99.22', '$69.59'];

        function changeColor() {
        productPhoto.src = "img/chair-" + this.id + ".jpg";
        let r = Math.floor(Math.random() * prices.length);
        priceSpan.textContent = prices[r];
        }
