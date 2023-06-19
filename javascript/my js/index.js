"use strict";

import { ingredientDetali , categoryDetali,areaDetali ,dataId ,} from "./filtterDta.js";

let home = []
// ============================================NAV-click===============================================
$(document).ready(async function () {
  let slidWidth = $(".side-menu .navsliding").outerWidth();

  $(".nheader").css("left", -slidWidth);

  // close Nav Function
  function closeNav() {
    $(".side-menu").animate({ left: -slidWidth }, 500);
    $(".navButtom").addClass("fa-align-justify");
    if (document.querySelector(".navButtom")) {
      $(".navButtom").addClass("open-close-icon");
    }
    $(".navButtom").removeClass("fa-x");
    $(".links li").animate(
      {
        top: 300,
      },
      500
    );
  }

  // open Nav Function
  function openNav() {
    $(".side-menu").animate({ left: "0px" }, 500);
    $(".navButtom").removeClass("fa-align-justify");
    $(".navButtom").removeClass("open-close-icon");
    if (document.querySelector(".navButtom")) {
      $(".navButtom").addClass("fa-x");
    }
    $(".links li").animate(
      {
        top: 50,
      },
      700
    );
  }

  // add event open close nav
  $(".navButtom").click(function () {
    if ($(".navButtom").hasClass("fa-x")) {
        closeNav();
    } else {
      openNav();
    }
  });
  $("#Search").click(function(){
    closeNav()
    $("#random").addClass("d-none")
    $("#showgate").addClass("d-none")    
    $("#showarea").addClass("d-none") 
    $("#showintgar").addClass("d-none")
    $("#idDetails").addClass("d-none")  
    $("#showintgarDetali").addClass("d-none")  
    $("#showCategotyDetali").addClass("d-none")
    $(".box-content").addClass("d-none")    
  
    $("#searching").toggleClass("d-none")


    
    $("#searName").on("input",async function(){
        let x = $("#searName").val()
    let hg = await  searching("s",x)
homeData(hg.meals)
$("#random").removeClass("d-none")

})
    
    
    $("#searlitter").on("input",async function(){
        let x = $("#searlitter").val()
        let resLit = await   searching("f",x)
        homeData(resLit.meals)
        $("#random").removeClass("d-none")

    })
})

$("#Categories").click(async function(){
        closeNav()

    $("#random").addClass("d-none")
    $("#showarea").addClass("d-none")    
    $("#searching").addClass("d-none")  
    $("#showintgar").addClass("d-none")
    $("#showintgarDetali").addClass("d-none")  
    $("#idDetails").addClass("d-none")  
    $("#showCategotyDetali").addClass("d-none")  
    $(".box-content").addClass("d-none")    

       $("#showgate").removeClass("d-none")    

});


areas()
$("#Area").click(async function(){
    closeNav()
    $("#searching").addClass("d-none")    

    $("#random").addClass("d-none")
    $("#showgate").addClass("d-none")  
    $("#showintgar").addClass("d-none")
    $("#showintgarDetali").addClass("d-none")  
    $("#showCategotyDetali").addClass("d-none")  
    $(".box-content").addClass("d-none")    

    $("#idDetails").addClass("d-none")  

    $("#showarea").removeClass("d-none")    

   
});
$("#Ingredients").click(async function(){
    closeNav()

    $("#searching").addClass("d-none")    

    $("#random").addClass("d-none")
    $("#showgate").addClass("d-none")    
    $("#showarea").addClass("d-none")  
    $("#showintgarDetali").addClass("d-none")  
    $("#idDetails").addClass("d-none")  
    $("#showCategotyDetali").addClass("d-none")  
    $(".box-content").addClass("d-none")    

    $("#showintgar").removeClass("d-none")
   
});

 homeApi()

 $("#Contact").click(async function(){
  closeNav()

$("#random").addClass("d-none")
$("#showarea").addClass("d-none")    
$("#searching").addClass("d-none")  
$("#showintgar").addClass("d-none")
$("#showintgarDetali").addClass("d-none")  
$("#idDetails").addClass("d-none")  
$("#showCategotyDetali").addClass("d-none")  
 $("#showgate").addClass("d-none")    
 $(".box-content").removeClass("d-none")    

});




 
});
// ============================================SHOW-ID===============================================

export function getId(){
  $(".card").each(function(index, element) {
    $(element).click (function(){
        let x = $(this).attr('id')
        console.log(x);
            $("#random").addClass("d-none")
    $("#showCategotyDetali").addClass("d-none")    
    $("#showareaDetail").addClass("d-none")  
    $("#showintgar").addClass("d-none")
    $("#showintgarDetali").addClass("d-none")  
    $("#showintgarDetali").addClass("d-none")  

    $("#searching").addClass("d-none")  

    $("#idDetails").removeClass("d-none")  

    
        dataId(x)
  
    })
  });

}
// ============================================main-API===============================================

async function homeApi () {
  $(".loader").removeClass("d-none")  
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const myJson = await response.json();
   home =  myJson
   setTimeout(function() {
    $(".loader").addClass("d-none")  
  }, 700);


return(homeData(home.meals))

   
}
// ============================================search-API===============================================

async function searching (name,litter){
  let details =[]
const res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?${name}=${litter}`)
const data =await res.json();

details = data
return(details)

}

// ============================================Category-API===============================================

async  function Categories(Category){
  $(".loader").removeClass("d-none")  

  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  setTimeout(function() {
    $(".loader").addClass("d-none")  
  }, 700);

  let resp = await res.json();
  disPlay2(resp.categories);

  return (resp.categories);
  }

// ============================================Area-API===============================================


  async  function areas(area){
    $(".loader").removeClass("d-none")  

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=${area}`)
    setTimeout(function() {
      $(".loader").addClass("d-none")  
    }, 700);

    let resp = await res.json();
  
      disPlay3(resp.meals);
    }

// ============================================ingredient-API===============================================

export async  function ingredient(){
  $(".loader").removeClass("d-none")  

  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  setTimeout(function() {
    $(".loader").addClass("d-none")  
  }, 700);

  let resp = await res.json();

  disPlay4(resp.meals.slice(0, 20));

  }
  
  ingredient()

// ============================================main-SHOW===============================================

function homeData (meals){
    let show = ``
    for(let i = 0 ;i< meals.length ; i++){
        show += `
        <div class="col-lg-3 col-md-4 pt-2 ">


        <div class="card detales" id="${meals[i].idMeal}" >
        <div class="card-image">
              <img src="${meals[i].strMealThumb}" class=" w-100" alt="">
        </div>
          <div class="card-description ">
          <h3 class="text-title text-center">${meals[i].strMeal}</h3>
          <p class="mx-auto ps-5">${meals[i].strInstructions.split(" ").splice(0,10).join(" ")}</p>
          </div>
        </div>
        
</div>


        
        
        `
        
    }
   document.querySelector("#random").innerHTML= show
   getId()
}

Categories()
// ============================================Categories-SHOW===============================================

function disPlay2(Category){
    let box2 = ``
    for (let i = 0; i < Category.length; i++) {
box2 +=`

<div class="col-lg-3 col-md-4 pt-2  categoryData">
<div class="card" id="${Category[i].idMeal}">
<div class="card-image">
<img src="${Category[i].strCategoryThumb}" class="w-100 rounded-2" alt="">
</div>
  <div class="card-description ">
  <h3>${Category[i].strCategory}</h3>
     <p>${Category[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
  </div>
</div>

</div>


`        
    }
    
    $("#showgate").html(box2);
    $(".categoryData").each(function(index, element) {
      $(element).click (function(){
          let x = $(this).find('h3').text()
          $("#showgate").addClass("d-none")
          $("#showCategotyDetali").removeClass("d-none")
          categoryDetali(x)

      })
    });

}    

// ============================================Area-SHOW===============================================

    function disPlay3(area){
        let box3 = ``
        for (let i = 0; i < area.length; i++) {
    box3 +=`

    <div class="col-lg-3 col-md-4 pt-2 areaData ">

<div class="card2 text-center" >
  <div class="card-content id="${area[i].strArea}"">
  <i class="fa-solid fa-house-laptop fa-4x"></i>

    <h3>${area[i].strArea}</h3>    

  </div>
</div>
</div>

    `        
        }
        
        $("#showarea").html(box3);

        $(".areaData").each(function(index, element) {
          $(element).click (function(){
              let x = $(this).find('h3').text()
              $("#showarea").addClass("d-none")
              $("#showareaDetail").removeClass("d-none")
              areaDetali(x)
    
          })
        });
    
    }
    

// ============================================ingredient-SHOW===============================================
  
   function disPlay4(intg){
      let box4 = ``
      for (let i = 0; i < intg.length; i++) {
  box4 +=`
  <div class="col-md-3 intshow " id="${intg[i].idIngredient}">
  <div class="card2   rounded-2 " ">
<div class=" text-center">
<i class="fa-solid fa-drumstick-bite fa-4x  py-2"></i>
</div>   
       <h3 class="ps-3">${intg[i].strIngredient}</h3>
   <p class="px-3 pb-4">${intg[i].strDescription.split(" ").slice(0,13).join(" ")}</p>
  </div>
  
  </div>
  `        
      }
      
      $("#showintgar").html(box4);
      
      $(".intshow").each(function(index, element) {
          $(element).click (function(){
              let x = $(this).find('h3').text()
              $("#showintgar").addClass("d-none")
              $("#showintgarDetali").removeClass("d-none")

              
              ingredientDetali(x)
  
          })
        });
  
  }
  




