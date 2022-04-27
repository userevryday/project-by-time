window.addEventListener("DOMContentLoaded", () => {
    
    // tab
    
    
    
    const tabs=document.querySelectorAll(".tabheader__item"),
          tabsContent=document.querySelectorAll(".tabcontent"),
          tabsParent=document.querySelector(".tabheader__items");



          function haidTabContent(){
                    tabsContent.forEach(item =>{
                    item.style.display="none";
                   });

                    tabs.forEach(item=>{
                    item.classList.remove('tabheader__item_active');
                });
             }
               function shouTabContent(i=0){
              tabsContent[i].style.display= "block";
              tabs[i].classList.add('tabheader__item_active');

             }
       
               tabsParent.addEventListener("click",(event)=>{
               if (event.target && event.target.classList.contains("tabheader__item")){
               console.log("privet");
            }
       }); 
        const btn =document.createElement("div");
        btn.classList.add("tabheader__item");
        tabsParent.append(btn);
        btn.textContent="privet";



      tabsParent.addEventListener( "click",(event)=>{
                if(event.target && event.target.classList.contains('tabheader__item')){
                tabs.forEach((item,i) => {
                if(event.target == item){
                haidTabContent();
                shouTabContent(i);
            }
        });
        }

     });

        // Taimer



        const deadLine =" 2022-06-24";
        function getTimeremaining(endtime){
            const t = Date.parse(endtime)-Date.parse(new Date()),
                  days = Math.floor(t/(1000*60*60*24)),
                  hours = Math.floor(t/(1000*60*60)%24),
                  minutes =Math.floor(t/(1000*60)%60),
                  seconds = Math.floor((t/1000)%60);

                     return {
                     "total":t,
                     "days":days,
                     "hours":hours,
                     "minutes":minutes,
                     "seconds":seconds
                    };
        
                
                }
      
      function getZero(num){
          if(num >= 0 && num < 10){
             return `0${num}`;
          }else{
              return num;
          }
      }
              
      
                function setClock (selector,endtime){
            const timer = document.querySelector(selector),
                  days=timer.querySelector('#days'),      
                  hours=timer.querySelector('#hours'),
                  minutes=timer.querySelector('#minutes'),
                  seconds=timer.querySelector('#seconds'),
                  timeInterval = setInterval( updateClock, 1000 );
                  updateClock();
       
            function updateClock(){
              const t = getTimeremaining(endtime);
               days.textContent =getZero(t.days);
               hours.textContent = getZero( t.hours);
               minutes.textContent =getZero(t.minutes);
               seconds.textContent =getZero (t.seconds);
                  
               if(t.total<=0){
                   clearInterval(timeInterval);
               }
            }
        }

     


   





         setClock('.timer',deadLine);
         console.log(tabsParent);
         console.log(tabsContent);
          console.log(tabs);
          haidTabContent();
         shouTabContent();





        const btnModl =document.querySelectorbyDataName("data-btn");
        console.log(btnModl);




        });