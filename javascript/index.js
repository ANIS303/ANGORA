"use strict"

let search = document.querySelector("#searchName")
let getSearch = document.querySelector("#searchLtter")
let url ="https://www.themealdb.com/api/json/v1/1/search.php?s="

$(document).ready(async function () {

    let slidWidth =$(".side-menu .navsliding").outerWidth();

$(".nheader").css('left', -slidWidth);

$(".side-menu .navButtom").click(function(){
    if ($(".side-menu").css('left') == '0px') {
        $(".side-menu").animate({ left: -slidWidth }, 500);
        $(".open-close-icon").addClass("fa-align-justify");
        $(".open-close-icon").removeClass("fa-x");
        $(".links li").animate({
            top: 300
        }, 500)
    }else{
        $(".side-menu").animate({ left: '0px' }, 500);
        $(".open-close-icon").removeClass("fa-align-justify");
        $(".open-close-icon").addClass("fa-x");
        $(".links li").animate({
            top: 50
        }, 700)
         
    };
});


 let meals = await display()
 disPlay1(meals)

//  let category = await Categories()
//  disPlay2(category)

});


async function display () {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const myJson = await response.json();
   return(myJson.meals);
   
}

function disPlay1(meals){
    let box1 = ``
    for (let i = 0; i < meals.length; i++) {
box1 +=`
<div class="col-md-3 ">
<div class="boxing position-relative cursor-pointer overflow-hidden rounded-2 " id="${meals[i].idMeal}">
 <img src="${meals[i].strMealThumb}" class="w-100 rounded-2" alt="">
 <div class="layer  position-absolute d-flex align-items-center text-black p-2">
     <h3>${meals[i].strMeal}</h3>
 </div>
</div>

</div>
`        
    }
    
    $("#ganeral").html(box1)
}

async  function sar(slit,nse){
let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${slit}=${nse}`)
let response = await res.json();
return response;
}
sar("s","pizza");

$("#Search").click(function(){

    $("#sersection").removeClass("d-none")

    $("#ganeral").removeClass("d-none")
    $("#showgate").addClass("d-none")

    $("#searchName").on("input",async function(){
       

        let x = $("#searchName").val()
        let hg =await  sar("s",x)
    console.log(hg);
        disPlay1(hg.meals)
    })
    $("#searchLtter").on("input",async function(){
            let x = $("#searchLtter").val()
        let hg = await  sar("f",x)
    console.log(hg);
    disPlay1(hg.meals)

        
    })
    
})
async  function Categories(Category){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let resp = await res.json();
    disPlay2(resp.categories);
    return resp.categories;
    }
    
Categories("seafood")
$("#Categories").click(async function(){
    $("#ganeral").addClass("d-none")    
       $("#sersection").addClass("d-none")
       $("#showgate").removeClass("d-none")    

});

function disPlay2(Category){
    let box2 = ``
    for (let i = 0; i < Category.length; i++) {
box2 +=`
<div class="col-md-3 ">
<div class="boxing position-relative cursor-pointer overflow-hidden rounded-2 " id="${Category[i].idMeal}">
 <img src="${Category[i].strCategoryThumb}" class="w-100 rounded-2" alt="">
 <div class="layer  position-absolute text-center text-black p-2">
     <h3>${Category[i].strCategory}</h3>
     <p>${Category[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
 </div>
</div>

</div>
`        
    }
    
    $("#showgate").html(box2)
}    

// ---------------------------------------------------------------------------------------------------------------//
async  function areas(area){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=${area}`)
    let resp = await res.json();
      disPlay3(resp.meals);

    }

areas("list")
$("#Area").click(async function(){
    $("#ganeral").addClass("d-none")    
    $("#sersection").addClass("d-none")
    $("#showgate").addClass("d-none")
    $("#showarea").removeClass("d-none")

   
});

function disPlay3(area){
    let box3 = ``
    for (let i = 0; i < area.length; i++) {
box3 +=`
<div class="col-md-3 ">
<div class="boxing position-relative cursor-pointer overflow-hidden rounded-2 " id="${area[i].strArea}">
<i class="fa-solid fa-house-laptop fa-4x"></i>
 
     <h3>${area[i].strArea}</h3>
 
</div>

</div>
`        
    }
    
    $("#showarea").html(box3)
}
// 
async  function ingredient(){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let resp = await res.json();
    disPlay4(resp.meals.slice(0, 20));
  
    }
    
    ingredient()
$("#Ingredients").click(async function(){
    $("#ganeral").addClass("d-none")    
    $("#sersection").addClass("d-none")
    $("#showgate").addClass("d-none")
    $("#showarea").addClass("d-none")
    $("#showintgar").removeClass("d-none")
   
});

function disPlay4(intg){
    let box4 = ``
    for (let i = 0; i < intg.length; i++) {
box4 +=`
<div class="col-md-3 " id="${intg[i].idIngredient}">
<div class="boxing position-relative cursor-pointer overflow-hidden rounded-2 " ">
<i class="fa-solid fa-drumstick-bite fa-4x"></i>
 
     <h3>${intg[i].strIngredient}</h3>
 <p>${intg[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
</div>

</div>
`        
    }
    
    $("#showintgar").html(box4)
}

$("#Contact").click(async function(){
    $("#ganeral").addClass("d-none")    
    $("#sersection").addClass("d-none")
    $("#showgate").addClass("d-none")
    $("#showarea").addClass("d-none")
    $("#showintgar").addClass("d-none")
    $("#showcontact").removeClass("d-none")

   
});



function showContacts() {
   
$("#nameInput").focus(() => {
    nameInputTouched = true
})

$("#emailInput").focus(() => {
    emailInputTouched = true
})

$("#phoneInput").focus( () => {
    phoneInputTouched = true
})

$("#ageInput").focus(() => {
    ageInputTouched = true
})

$("#passwordInput").focus( () => {
    passwordInputTouched = true
})

$("#repasswordInput").focus( () => {
    repasswordInputTouched = true
})
  
if (nameValidation() &&
emailValidation() &&
phoneValidation() &&
ageValidation() &&
passwordValidation() &&
repasswordValidation()) {
submitBtn.removeAttribute("disabled")
} else {
submitBtn.setAttribute("disabled", true)
}

}



function nameValidation() {
return (/^[a-zA-Z ]+$/.test($("#nameInput").val()))
}

function emailValidation() {
return (/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#emailInput").val()))
}

function phoneValidation() {
return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test($("#phoneInput").val()))
}

function ageValidation() {
return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($("#ageInput").val()))
}

function passwordValidation() {
return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($("#passwordInput").val()))
}

function repasswordValidation() {
return $("repasswordInput").val() == $("#passwordInput").val()
}

