const thumbnail = JSON.parse(localStorage.getItem('fav'));

        console.log("THUMBNAIlll--", thumbnail)

        // const previewImage = document.getElementById('image-collection');

        if (thumbnail) {
            thumbnail.map((item,i) => {
                var elem = document.createElement("img");
                elem.setAttribute("src", item.path);
                elem.setAttribute("id", i);
                elem.addEventListener('click', function(event) {
                  const favImg = localStorage.getItem('fav')
                  const parsedImgArr = JSON.parse(favImg) ? JSON.parse(favImg) : []
                  if(Array.isArray(parsedImgArr)) {
                    const fileName = `img-${event.target.id}`;
                    if (parsedImgArr.some(ele => ele.name !== fileName)) {
                      parsedImgArr.push({ name: fileName, path: event.target.src})
                      localStorage.setItem('fav', JSON.stringify(parsedImgArr))
                    }
                  }
                  console.log('===========>>>>> at line 13', event)
                })
                document.getElementById("image-collection").appendChild(elem);
            });
        }

   
  function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
  }
