import React, { useRef, useState } from 'react'
import PA from './ProductsArray'
import './Shopping.css';
import { ArrowLeftCircle, BookmarkPlus, Facebook, Instagram, Mail, MessageCircle, ShoppingCart } from 'lucide-react';



function Shopping() {
  var [Data2,setData2]=useState(PA);
  var [cart,setCart]=useState([]);
  var [model,setModel]=useState(true);
  var SEARCH=useRef();

 
    var Onchange =()=>{
      var Product=document.querySelector('#product').value;
      var Brand=document.querySelector('#brand').value;
      var PriceMin=document.querySelector('#minprice').value;
      var PriceMax=document.querySelector('#maxprice').value;

      var search=SEARCH.current.value;
      // var search=document.querySelector("#srch").value;

      var serch= PA.filter((Fill)=>{
        return Fill.Brand.toLowerCase().includes(search)
      })
      setData2(serch)


if(Product !== '' && Brand == '' && PriceMin == '' && PriceMax== ''){
var filter=PA.filter((Fill)=>{
  return Product===Fill.Name
})
setData2(filter)
}
else if(Product == '' && Brand !== '' && PriceMin == '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return Brand===Fill.Brand
  })
  setData2(filter)
}
else if(Product == '' && Brand == '' && PriceMin !== '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMin <= Fill.Price
  })
  setData2(filter)
}
else if(Product == '' && Brand == '' && PriceMin == '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >= Fill.Price
  })
  setData2(filter)
}
else if(Product !== '' && Brand !== '' && PriceMin == '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return Brand===Fill.Brand && Product===Fill.Name
  })
  setData2(filter)
}
else if(Product !== '' && Brand == '' && PriceMin !== '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMin <= Fill.Price && Product===Fill.Name
  })
  setData2(filter)
}
else if(Product !== '' && Brand == '' && PriceMin == '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >= Fill.Price && Product===Fill.Name
  })
  setData2(filter)
}
else if(Product == '' && Brand !== '' && PriceMin == '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >= Fill.Price && Brand===Fill.Brand
  })
  setData2(filter)
}
else if(Product == '' && Brand !== '' && PriceMin !== '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMin <= Fill.Price && Brand===Fill.Brand
  })
  setData2(filter)
}
else if(Product == '' && Brand == '' && PriceMin !== '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >= Fill.Price && PriceMin <= Fill.Price
  })
  setData2(filter)
}
else if(Product !== '' && Brand !== '' && PriceMin !== '' && PriceMax== ''){
  var filter=PA.filter((Fill)=>{
    return Product===Fill.Name && Brand===Fill.Brand && PriceMin <= Fill.Price
  })
  setData2(filter)
}
else if(Product !== '' && Brand == '' && PriceMin !== '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return Product===Fill.Name && PriceMax >= Fill.Price && PriceMin <= Fill.Price
  })
  setData2(filter)
}
else if(Product == '' && Brand !== '' && PriceMin !== '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >=Fill.Price && Brand===Fill.Brand && PriceMin <= Fill.Price
  })
  setData2(filter)
}
else if(Product == '' && Brand !== '' && PriceMin == '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return PriceMax >=Fill.Price && Brand===Fill.Brand && PriceMax >= Fill.Price
  })
  setData2(filter)
}
else if(Product !== '' && Brand !== '' && PriceMin !== '' && PriceMax!== ''){
  var filter=PA.filter((Fill)=>{
    return Product===Fill.Name && Brand===Fill.Brand && PriceMin <= Fill.Price && PriceMax >= Fill.Price
  })
  setData2(filter)
}

 
    }
    var addfunction=(ele)=>{
      cart.push(ele);
     }
    var removeFun=(cardInd)=>{
      // var remData=cart.filter((ele,ind)=>{return ind!=cardInd});
      var remData=cart.filter((ele,ind)=>{return ele.id!=cardInd});

      setCart(remData);
    }
  return (
    <div>
      
     
       
      <div id='Header' >
        <img id='icon' src="./projectImages/Fli.jpg" height={60} width={160}></img>
        Category :<select id="product" className="btn btn-primary dropdown-toggle" onChange={Onchange}>
        <option></option>
            <option>Furniture </option>
            <option>TV</option>
            <option>Shirts</option>
            <option>Shoes</option>
            <option>Phants</option>
        </select>
        
        Brand :<select id="brand" className="btn btn-primary dropdown-toggle" onChange={Onchange}>
            <option></option>
            <option disabled>Furniture</option>
            <option>IKEA</option>
            <option>Miller</option>
            <option>Brookwood</option>
            <option disabled>TV</option>
            <option>Redmi</option>
            <option>Samsung</option>
            <option>LG</option>
            <option disabled>Shirts</option>
            <option>PEngland</option>
            <option>USpolo</option>
            <option>Ajio</option>
            <option disabled>Shoes</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Puma</option>
            <option disabled>Phants</option>
            <option>Lee</option>
            <option>Levis</option>
            <option>Velvet</option>
          

        </select>
       Min-Price : <select className="btn btn-primary dropdown-toggle" id="minprice" onChange={Onchange}>
       <option></option>
       <option>1000</option>
            <option>2000</option>
            <option>3000</option>
            <option>4000</option>
            <option>5000</option>
            
        </select> 
        Max-Price : <select id="maxprice" className="btn btn-primary dropdown-toggle" onChange={Onchange}>
       <option></option>
            <option>2000</option>
            <option>3000</option>
            <option>4000</option>
            <option>5000</option>
            <option>6000</option>
        </select> 

        <input  id='srch' type="search" placeholder='Search Brand '  onChange={Onchange} ref={SEARCH}></input>

        
        {/* <button onClick={setModel(!model)}><img style={{display:model}} id="cartbtn" src="./projectImages/Cart3.png"/>{model?'Cart':"back"}</button> */}
        <button id='bttn' onClick={()=>{setModel(!model)}}>
          {model?<h5>
            <ShoppingCart/>Cart</h5>
          : 
          <h5>
            <ArrowLeftCircle />
          Back</h5>}</button>
        </div>

        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2500">
      <img id="carousel" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ee78de50f9dbe993.jpg?q=20" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="1700">
      <img id="carousel" src="./projectImages/C22.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="1700">
      <img id="carousel" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5df65ad101e18dbf.jpg?q=20" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="1700">
      <img id="carousel" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ad13d197ab22003b.png?q=20" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="1700">
      <img id="carousel" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2f1b3957c095a754.jpg?q=20" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

</div>
       
       {/* Terinary */}
      {model?
      <div>
        {Data2.map((ele)=>{
          return (
 

<div id="n">
<div class="card" >
  <img src={ele.image} class="card-img-top" alt="Error"/>
  <div class="card-body">
    <strong><p class="card-title">Brand : {ele.Brand}</p></strong>
    <p class="card-text">Price : {ele.Price}</p>
             <button class="btn btn-primary" id='Add' onClick={()=>{addfunction(ele)}}>Add to cart</button>

             <button id='Savetolater' > <BookmarkPlus />
             </button>
          

  </div>
</div>
</div>
          )
        })}
       
      </div> 
      :
      <div>
      {cart.map((ele,ind)=>{
        {console.log("ele.ind",ele.ind);}
          return (
            <div id='n' >

          <div >
<div class="card" >
  <img src={ele.image} class="card-img-top" alt="Error"/>
  <div class="card-body">
    <strong><p class="card-title">Brand : {ele.Brand}</p></strong>
    <p class="card-text">Price : {ele.Price}</p>
             <button class="btn btn-primary" onClick={()=>{removeFun(ele.id)}}>Remove</button>
             {/* <button class="btn btn-primary" onClick={()=>{removeFun(ind)}}>Remove</button> */}
  </div>
</div>
</div>
        </div>
          )
        })} </div> 
         }   
         <footer >
         <img id="fimg" src='\projectImages\ficon.png' height={150} width={150}></img>
         
          <div class="Footer">
            <h4>Make Money with Us</h4>
- Sell on flipcart<br></br>
- Protect and Build Your Brand<br></br>
- Flipcart Global Selling<br></br>
- Become an Affiliate<br></br>
- Fulfilment by flipcart<br></br>
- Advertise Your Products<br></br>
</div>
          <div class="Footer">	
<h4>Let Us Help You</h4>
- COVID-19 and flipcart<br></br>
- Your Account<br></br>
- Returns Centre<br></br>
- 100% Purchase Protection<br></br>
- Flipcart App Download<br></br>
- Help<br></br></div>

<div class="Footer" >
<h4>Get to Know Us</h4>
- About Us<br></br>
- Careers<br></br>
- Press Releases<br></br>
- Flipcart Science<br></br>
<br></br>


</div>
<div class="Footer" id='Contactus'>
	
  <h4>  Connect with Us</h4>
  <Facebook color="#a691f3" />  Facebook<br></br>
  <MessageCircle  color="#3cd346" />  Whatsapp<br></br>
<Instagram color="#f099ed" />   Instagram<br></br>
<Mail color="#f55656" />  Mail :
  <h5><u>narendrakumarkotipalli@gmail.com</u></h5>
  </div>
  
          </footer> 
 </div>
  )
}

export default Shopping