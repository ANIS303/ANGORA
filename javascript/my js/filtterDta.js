import { getId } from "./index.js";

        // =============================================ingredient-API=============================================================
        export async  function ingredientDetali(integData){
    let data =[]
    $(".loader").removeClass("d-none")  

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${integData}`)
    let resp = await res.json();
    data = resp.meals
    homeData(data)
    setTimeout(function() {
        $(".loader").addClass("d-none")  
      }, 700);
    
    return(data)
    }
    // ===================================================category-API=======================================================
    export async  function categoryDetali(catgData){
        let data2 =[]
        $(".loader").removeClass("d-none")  

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catgData}`)
        let resp = await res.json();
        data2 =resp.meals
        catagData(data2)
        setTimeout(function() {
            $(".loader").addClass("d-none")  
          }, 700);
    
        return(data2)
        }
            // =====================================================area-API=====================================================

    export async  function areaDetali(areaD){
            let data2 =[]
            $(".loader").removeClass("d-none")  

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaD}`)
            let resp = await res.json();
            data2 =resp.meals
            areaData(data2)
            setTimeout(function() {
                $(".loader").addClass("d-none")  
              }, 700);
        
            return(data2)
            }
    // =====================================================id-API=====================================================


    export async  function dataId(id){
                let data2 =[]
                $(".loader").removeClass("d-none")  

                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                let resp = await res.json();
                data2 =resp.meals
                idMeals(data2)
                getId(data2)
                setTimeout(function() {
                    $(".loader").addClass("d-none")  
                  }, 700);
            
                console.log(data2);
                return(data2)
                }
        // =============================================ingredient-Details=============================================================

function homeData (meals){
    let show = ``
    for(let i = 0 ;i< meals.length ; i++){
        show += `
        <div class="col-lg-3 col-md-4 pt-2 " >


        <div class="card" id="${meals[i].idMeal}">
        <div class="card-image">
              <img src="${meals[i].strMealThumb}" class=" w-100" alt="">
        </div>
          <div class="card-description ">
          <h3 class="text-title text-center">${meals[i].strMeal}</h3>
          </div>
        </div>
        
</div>


        
        
        `
        
    }
   document.querySelector("#showintgarDetali").innerHTML= show
getId()
}

    

        // =============================================category-Details=============================================================
        function catagData (meals){
        let show = ``
        for(let i = 0 ;i< meals?.length ; i++){
            show += `
            <div class="col-lg-3 col-md-4 pt-2 " >
    
    
            <div class="card" id="${meals[i].idMeal}" >
            <div class="card-image">
                  <img src="${meals[i].strMealThumb}" class=" w-100" alt="">
            </div>
              <div class="card-description ">
              <h3 class="text-title text-center">${meals[i].strMeal}</h3>
              </div>
            </div>
            
    </div>
    
            `
            
        }
       document.querySelector("#showCategotyDetali").innerHTML= show
       getId()

    }
    


               // =============================================area-Details=============================================================

        function areaData (meals){
            let show = ``
            for(let i = 0 ;i< meals?.length ; i++){
                show += `
                <div class="col-lg-3 col-md-4 pt-2 " >
        
        
                <div class="card" id="${meals[i].idMeal}">
                <div class="card-image">
                      <img src="${meals[i].strMealThumb}" class=" w-100" alt="">
                </div>
                  <div class="card-description ">
                  <h3 class="text-title text-center">${meals[i].strMeal}</h3>
                  </div>
                </div>
                
        </div>
        
                `
                
            }
           document.querySelector("#showareaDetail").innerHTML= show;
getId()
        }
                  // =============================================id-Details=============================================================
  
            function idMeals (meals){
                let show = ``
                for(let i = 0 ;i< meals?.length ; i++){
                    show += `
                   
                  

                  <div class="card mb-3 data"  id="${meals[i].idMeal}">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${meals[i].strMealThumb}"class="img-fluid rounded-start" alt="">

    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 class=" text-center">${meals[i].strMeal}</h3>
      <p class=" ps-5">${meals[i].strInstructions}</p>
</div>
    </div>
  </div>
</div>

                    
            
            
            
                    `
                    
                }
               document.querySelector("#idDetails").innerHTML= show;
              
            
            }
    