function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function nosubmit(){
    var e = document.getElementById("continents").getElementsByTagName("select")[0];
    var choice =e.options[e.selectedIndex].value;
    if (choice == "africa") {
      document.getElementById("content").innerHTML=`Africa is not a significant source of greenhouse gas emissions. Africa accounts for only
      2–3 per cent of the world’s carbon dioxide emissions from energy and industrial sources.
      According to the World Resources Institute, Africa’s per capita emissions of carbon
      dioxide in the year 2000 were 0.8 metric tons per person, compared with a global figure
      of 3.9 tons per person. Yet Africa is going through the worst effects of climate change. Total available water in the large basins of the Niger,
      Lake Chad and Senegal has decreased by 40–60 per cent and many climate models
      project declining mean precipitation in the already-dry regions of southern Africa.`
    }else if(choice=="australia"){
      document.getElementById("content").innerHTML=`Australia's present air contamination principles are not sufficiently able to ensure human wellbeing. National air contamination restraints right now surpass the World Health Organization's suggested limits and by universal examination, slack altogether. A lot stricter guidelines have been received in most different nations, including the US, EU, and China.We realize that at any rate 279 die every year in NSW because of poisonous air contamination from the state's five coal-terminated force stations. The wellbeing impacts additionally incorporate 233 children brought into the world with diminished birth weight, 361 individuals creating type 2 diabetes and 2,614 years of life lost every year because of uncontrolled air contamination from NSW power stations. The examination has not yet been done – however the national number is probably going to be very concerning.`
    }else if(choice=="asia"){
document.getElementById("content").innerHTML=`Air contamination in Asia isn't just a significant wellbeing hazard, it likewise impacts affects the earth and horticultural harvest yields. These effects have critical monetary results, influencing financial development just as government assistance. Parts of Asia are more polluted than others. For example, Nagasaki has a high pollution rate because of the nuke America sent during ww2. `
    }
    else if(choice=="europe"){
      document.getElementById("content").innerHTML=`Air contamination hurts human wellbeing and the earth. In Europe, outflows of many air toxins have diminished significantly over the previous decades, bringing about improved air quality over the area. In any case, air toxin fixations are still excessively high, and air quality issues persevere. A critical extent of Europe's population live in zones, particularly urban areas, where excesses of air quality norms happen: ozone, nitrogen dioxide and particulate issue (PM) contamination present genuine wellbeing dangers. A few nations have surpassed at least one of their 2010 discharge limits for four significant air poisons. Diminishing air contamination along these lines stays significant.`
          }
          else if(choice=="northamerica"){
            document.getElementById("content").innerHTML=`Pollutants, for example, sulfur dioxide, mercury and ozone depleting substances—are connected to a scope of ecological and general medical issues confronting the individuals of North America today, including corrosive downpour, exhaust cloud, asthma, and worldwide environmental change. For sulfur dioxide alone, the significant supporter of corrosive downpour, petroleum derivative force plants are liable for 71 percent of announced emissions from mechanical factories across North America.`
                }
                else if(choice=="southamerica"){
                  document.getElementById("content").innerHTML=`Latin America have an exceptionally rich base of normal assets. With bountiful minerals, from Mexico's silver to Chile copper; it is copious in oil stores (second biggest stores after the Middle East), has the biggest forested surface of any mainland, and the best extent of arable land per individual outside of North America, including some awesome quality dirt. Both the Pacific Coast and the South Atlantic are wealthy in fish. However Latin America additionally has the absolute most genuine ecological issues on the planet: air contamination in a few Latin American urban areas is the most noticeably terrible anyplace; streams coursing through modern habitats are hugely polluted by mechanical squanders; the pace of deforestation is disturbing; soil disintegration is seriously corrupting the absolute best horticultural place that is known for the world.`
                      }

    return false;
}

/*let myButton=document.getElementById("submit");
myButton.on("click",function(e){
  e.preventDefault();
  document.getElementById("Africa").display.all;
})*/
function init() {
  let toggleButton = document.querySelector("#submitButton");
console.log(toggleButton);
toggleButton.addEventListener('click', displayInfo);

function displayInfo() {
   var x = document.getElementById("content");
   if (x.style.display === "none") {
     x.style.display = "block";
   } 
 }
}





const cookieContainer = document.querySelector(".cookie-container")
const cookieButton =document.querySelector(".cookie-btn")

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active");
}, 2000);

function pop() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}