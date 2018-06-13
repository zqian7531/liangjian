const url = "http://192.168.1.101:8000/items.json"

fetch(url).then(response => {
    if (response.status === 200) {
        return response.json();
    }
  }).then(json =>{
      var items = json.items
      console.log(items)

      var content = document.getElementById('works-content');

      

      for (var i =0;i<items.length;i++){
        var item = document.createElement('div')
        item.setAttribute('class','box workArea')
  
      
        var mainImg = document.createElement('div')
        mainImg.setAttribute('class','workMainImg')
      
        var img = document.createElement('img')
  
        var title = document.createElement('div')
        title.setAttribute('class','workTitle')
      
        var h2 = document.createElement('h2')
        console.log(items[i]);
        var Item = items[i]
        item.setAttribute('id',Item.id)

        img.setAttribute('src',Item.coverImg)

        h2.innerHTML = Item.des
    

        var contentImgs = Item.contentImgs
        localStorage.setItem(Item.id,JSON.stringify(contentImgs))
 
        mainImg.appendChild(img)
        title.appendChild(h2)


        item.appendChild(mainImg)
        item.appendChild(title)

        content.appendChild(item)
      }
      console.log(content)
  }).catch(err =>{
      console.log(err)
  })


  