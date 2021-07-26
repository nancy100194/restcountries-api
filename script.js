var cont=document.createElement('div');
cont.setAttribute('class','container')
document.body.append(cont)

var api=new Promise((resolve,reject)=>{

var request = new XMLHttpRequest();
           request.open("GET", "https://restcountries.eu/rest/v2/all", true);
           request.send();
           request.onload = function () {
               var data = JSON.parse(this.response);
             resolve(data);

           }
           request.onerror=function(){
               reject({
                   message:request.statusText,
               })
           }


})

api.then((data)=>{
    
data.filter((x)=>{
    
    var div=document.createElement('div');
    
     var h5=document.createElement('h5')
    h5.setAttribute('class','card-title')
    div.setAttribute('class','card')
    var img=document.createElement('img');
    img.setAttribute('class','card-img-top')
    img.setAttribute('src',`${x.flag}`)
    var div2=document.createElement('div');
    div2.setAttribute('class','card-body');
     h5.innerHTML=`${x.name}`;
    div.append(h5,img,div2)
   
    var p=document.createElement('p');
    p.setAttribute('class','card-text');
    p.innerHTML=`Capital: <span class=capital>${x.capital}</span>`
     var p2=document.createElement('p');
    p2.setAttribute('class','card-text');
    p2.innerHTML=`Country Codes: <span style="font-weight:bolder">${x.alpha2Code} ${x.alpha3Code}</span>`
    var p3=document.createElement('p');
    p3.setAttribute('class','card-text');
    p3.innerHTML=`Region: <span style="font-weight:bolder">${x.region}</span>`
     var p4=document.createElement('p');
    p4.setAttribute('class','card-text');
    p4.innerHTML=`Lat Long: <span style="font-weight:bolder">${x.latlng[0]} ${x.latlng[1]}</span>`
    div2.append(p,p2,p3,p4);
    cont.append(div);
})

}).catch((error)=>{
    console.log(error)
})