const thumbnail = JSON.parse(localStorage.getItem('images'));

        console.log("THUMBNAI--", thumbnail)

        // const previewImage = document.getElementById('image-collection');

        if (thumbnail) {
            thumbnail.map((item,i) => {
                var elem = document.createElement("img");
                elem.setAttribute("src", item);
                elem.setAttribute("id", i);
                elem.addEventListener('click', function(event) {
                  const favImg = localStorage.getItem('fav')
                  const parsedImgArr = JSON.parse(favImg) ? JSON.parse(favImg) : []
                  console.log("PARSED IMAGE--", parsedImgArr)
                  if(Array.isArray(parsedImgArr)) {
                    const fileName = `img-${event.target.id}`;
                    // if (parsedImgArr.some(ele => ele.name !== fileName)) {
                      console.log("Inside if");
                      parsedImgArr.push({ name: fileName, path: event.target.src})
                      localStorage.setItem('fav', JSON.stringify(parsedImgArr))
                    // }
                  }
                  console.log('===========>>>>> at line 13', favImg, parsedImgArr)
                })
                document.getElementById("image-collection").appendChild(elem);
            });
           
        }

   
  function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
  }
