(()=>{"use strict";const e=document.querySelector("#returning-user"),t=document.querySelector("#user"),r=document.querySelector("#reviews"),n=[{name:"Sheia",stars:5,loyaltyUser:!0,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:!1,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:!0,date:"27-03-2021"}];!function(e,t,n){const a=n?"⭐":"";r.innerHTML="review total "+e.toString()+"| last reviewed by "+t+" "+a}(n.length,n[0].name,n[0].loyaltyUser),e.innerHTML="back",t.innerHTML="Bobby"})();