const url = "http://172.20.10.10:8000/items.json"

fetch(url,{
    mode:'no-cors'
}).then(response => {
    if (response.status === 200) {
        return response.json();
    }
  }).then(json =>{
      var items = json.items
      for (var i =0;i<items.length;i++){
        console.log(items[i]);
        var item = items[i]
        var contentImgs = item.contentImgs
        for(var j=0;j<item.contentImgs.length;j++){
            contentImgs.pushitem
            var imgurl =""
            var itemId = ""
          
            var content = document.getElementById('works-content');
            var item = document.createElement('div')
            item.setAttribute('class','box workArea')
            item.setAttribute('id',itemId)
          
            var mainImg = document.createElement('div')
            item.setAttribute('class','workMainImg')
          
            var img = document.createElement('img')
            img.setAttribute('src',imgurl)
          
            var title = document.createElement('div')
            title.setAttribute('class','workTitle')
          
            var h2 = document.createElement('h2')
        }
      }
  }).catch(err =>{
      console.log(err)
  })


  