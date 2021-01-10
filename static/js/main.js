
function CreateCustomAlertBox()
{
    console.log("Called")
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowNetworkAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}






function Load_developer () {window.location="developer.html"}
function Load_index () 
{
    window.location="index.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="index.html"}
}
function Load_food_view () 
{
    window.location="food.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="food.html"}
}
function Load_chips_view () 
{
    window.location="chips.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="chips.html"}
}
function Load_piloa_view () 
{
    window.location="piloa.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="piloa.html"}
}
function Load_drinks_view () 
{
    window.location="drinks.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="drinks.html"}
}

function Load_salads_view () 
{
    window.location="salads.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="salads.html"}
}
function Load_chicken_view () 
{
    window.location="chicken.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="chicken.html"}

}
function Load_luwombo_view () 
{
    window.location="luwombo.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="luwombo.html"}

}
function Load_local_dish_view () 
{
    window.location="localdishe.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="localdishe.html"}

}
function Load_break_fast_view () 
{
    window.location="breakfast.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="breakfast.html"}
}
function Load_beverages_view_ () 
{
    window.location="beverages.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="beverages.html"}
}
function Load_goat_meat_view () 
{
    window.location="goatmeat.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="goatmeat.html"}
}
function Load_beef_liver_view () 
{
    window.location="beefliver.html"
    // if(!navigator.onLine) {ShowNe8location="beefliver.html"}
}


// function SubmitCustomerData (){document.forms["customers-order-form"].submit();setTimeout(ClearCustomerForm, seconds)}
// function ClearCustomerForm (){document.forms["customers-order-form"].reset();document.getElementById('id01').style.display='none'}


function validate_form ()
{
    let name = document.getElementById("custname");
    if (name.value.lenght == 0) alert("Name should not be empty...")
}
function display_date ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id").innerHTML = date;
    
}
function display_date2 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-2").innerHTML = date;
    
}function display_date3 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-3").innerHTML = date;
    
}


// ========================================================================
// Break fast page

function Hide_All_Divs ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-egg-div").style.display = "none";
    // document.getElementById("food_menu_gallery_div").style.display = "none";

}

function Show_breakfast_others_div ()
{
    document.getElementById("breakfast-egg-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "block"; 
}
function Show_breakfast_egg_dishes_div ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-egg-div").style.display = "block"; 
}
function Show_breakfast_teas_coffee_div ()
{
    document.getElementById("breakfast-egg-div").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "block"; 
}

// ==============================================
// drinks page

function Hide_drinks_divs ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    document.getElementById("drinks-fresh-fruit-div").style.display = "none";
}

function Show_drinks_soft_beverages_div ()
{
    document.getElementById("drinks-fresh-fruit-div").style.display = "none";
    document.getElementById("drinks-soft-beverages-div").style.display = "block";
}

function Show_drinks_fresh_fruit_div ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    document.getElementById("drinks-fresh-fruit-div").style.display = "block";
}