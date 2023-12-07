!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DatePicker=t():e.DatePicker=t()}(this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t,n){var a=e.querySelector(".prev-month"),i=e.querySelector(".next-month"),r=e.querySelector(".datepicker-calendar-container"),s=e.querySelector(".datepicker-days");a.removeEventListener("click",a.listener),i.removeEventListener("click",i.listener),s.removeEventListener("click",s.listener),document.removeEventListener("click",document.listener),a.listener=function(e){e.stopPropagation(),t(-1)},i.listener=function(e){e.stopPropagation(),t(1)},s.listener=function(e){var t=e.target.closest(".datepicker-day");if(t&&!t.classList.contains("blocked")){var a=parseInt(t.getAttribute("data-day"),10),i=parseInt(t.getAttribute("data-month"),10);n(a,i)}},document.listener=function(t){r.contains(t.target)||e.querySelector(".datepicker-input").contains(t.target)||(r.style.display="none")},a.addEventListener("click",a.listener),i.addEventListener("click",i.listener),s.addEventListener("click",s.listener),document.addEventListener("click",document.listener)}function a(e,t,n,a,i,r,s){var l=new Date(e,t,n),c=l.getDay(),o=a?"datepicker-day current-month":"datepicker-day";return s.blockedDays.includes(c)?o+=" blocked":a&&i(l)?o+=" selected":a&&r(l)&&(o+=" in-range"),'<div class="'.concat(o,'" data-day="').concat(n,'" data-month="').concat(t,'"><span>').concat(n,"</span></div>")}function i(e,t){var i,r,s,l,c,o,d;this.element=document.getElementById(e),this.currentDate=new Date,this.currentDate.setDate(1),this.selectedStartDate=null,this.selectedEndDate=null,this.options={mode:null!==(i=null==t?void 0:t.mode)&&void 0!==i?i:"single",onSelect:null!==(r=null==t?void 0:t.onSelect)&&void 0!==r?r:null,blockedDays:null!==(s=null==t?void 0:t.blockedDays)&&void 0!==s?s:[],showDayNames:null===(l=null==t?void 0:t.showDayNames)||void 0===l||l,textInputEnabled:null!==(c=null==t?void 0:t.textInputEnabled)&&void 0!==c&&c,textInputPlaceholder:null!==(o=null==t?void 0:t.textInputPlaceholder)&&void 0!==o?o:"Choose a date",darkMode:null!==(d=null==t?void 0:t.darkMode)&&void 0!==d&&d},this.init=function(){this.options.darkMode&&this.element.classList.add("dark"),this.render(),n(this.element,this.changeMonth.bind(this),this.handleDayClick.bind(this))},this.render=function(){var e=this;this.element.innerHTML="";var t=document.createElement("input");if(t.value=this.options.textInputPlaceholder,t.type="text",t.className="datepicker-input",t.readOnly=!0,this.selectedStartDate)if("single"===this.options.mode)t.value=this.selectedStartDate.toDateString();else if("range"===this.options.mode){var i=this.selectedStartDate.toDateString();this.selectedEndDate&&(i+=" - ".concat(this.selectedEndDate.toDateString())),t.value=i}this.element.appendChild(t);var r=function(e,t,n,i){var r,s=document.createElement("div");return s.className="datepicker-calendar-container",s.style.display=i.textInputEnabled?"none":"block",s.innerHTML='\n    <div class="datepicker-header">\n      <button class="prev-month">&lt;</button>\n      <span class="month-display">'.concat((r=e.getMonth(),["January","February","March","April","May","June","July","August","September","October","November","December"][r])," ").concat(e.getFullYear(),'</span>\n      <button class="next-month">&gt;</button>\n    </div>\n    ').concat(i.showDayNames?'<div class="datepicker-day-names">'.concat(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(e){return"<div>".concat(e,"</div>")})).join(""),"</div>"):"",'\n    <div class="datepicker-days">\n      ').concat(function(e,t,n,i){var r=e.getFullYear(),s=e.getMonth(),l=new Date(r,s,1),c=new Date(r,s,0).getDate(),o=new Date(r,s+1,0).getDate();1===s&&function(e){return e%4==0&&e%100!=0||e%400==0}(r)&&(o=29);for(var d='<div class="datepicker-week">',h=l.getDay();h>0;h--)d+=a(r,s-1,c-h+1,!1,t,n,i);for(var u=1;u<=o;u++)d+=a(r,s,u,!0,t,n,i);for(var p=new Date(r,s,o).getDay(),D=1;p<6;D++,p++)d+=a(r,s+1,D,!1,t,n,i);return d+"</div>"}(e,t,n,i),"\n    </div>\n  "),s}(this.currentDate,this.isDateSelected.bind(this),this.isDateInRange.bind(this),this.options);this.element.appendChild(r),this.options.textInputEnabled&&(t.addEventListener("click",(function(){r.style.display="block"})),document.addEventListener("click",(function(t){e.element.contains(t.target)||(r.style.display="none")}))),n(this.element,this.changeMonth.bind(this),this.handleDayClick.bind(this))},this.isDateSelected=function(e){return this.selectedStartDate&&this.selectedStartDate.toDateString()===e.toDateString()||this.selectedEndDate&&this.selectedEndDate.toDateString()===e.toDateString()},this.isDateInRange=function(e){return this.selectedStartDate&&this.selectedEndDate&&e>this.selectedStartDate&&e<this.selectedEndDate},this.handleDayClick=function(e,t){var n=this.currentDate.getFullYear();-1===t?(t=11,n--):12===t&&(t=0,n++);var a=new Date(n,t,e);"single"===this.options.mode?(this.selectedStartDate=a,this.selectedEndDate=null,this.element.querySelector(".datepicker-input").value=a.toDateString(),this.triggerSelectCallback(),this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="none"):"range"===this.options.mode&&(!this.selectedStartDate||this.selectedEndDate?(this.selectedStartDate=a,this.selectedEndDate=null,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block"):this.selectedStartDate&&!this.selectedEndDate&&(a>this.selectedStartDate?(this.selectedEndDate=a,this.element.querySelector(".datepicker-input").value="".concat(this.selectedStartDate.toDateString()," ").concat(void 0!==this.selectedEndDate.toDateString()?"- "+this.selectedEndDate.toDateString():""),this.triggerSelectCallback(),this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="none"):(this.selectedStartDate=a,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block")))},this.changeMonth=function(e){var t,n={currentYear:(t=this.currentDate).getFullYear(),currentMonth:t.getMonth(),currentDay:t.getDate()},a=n.currentYear,i=n.currentDay,r=new Date(a,n.currentMonth+e,1),s=new Date(a,r.getMonth()+1,0).getDate();r.setDate(Math.min(i,s)),this.currentDate=r,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block"},this.triggerSelectCallback=function(){this.options.onSelect&&this.options.onSelect(this.selectedStartDate,this.selectedEndDate)}}return e.d(t,{default:()=>i}),t.default})()));