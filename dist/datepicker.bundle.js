!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DatePicker=t():e.DatePicker=t()}(this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t,n){var a=e.querySelector(".prev-month"),i=e.querySelector(".next-month"),r=e.querySelector(".datepicker-calendar-container"),o=e.querySelector(".datepicker-days");function s(n,a){return function(i){i.stopPropagation();var r=document.activeElement;t(n),requestAnimationFrame((function(){r&&r.className.includes(a)&&e.querySelector(".".concat(a)).focus()}))}}a.removeEventListener("click",a.listener),i.removeEventListener("click",i.listener),o.removeEventListener("click",o.listener),o.removeEventListener("keydown",o.listener),document.removeEventListener("click",document.listener),a.listener=s(-1,"prev-month"),i.listener=s(1,"next-month"),a.addEventListener("click",a.listener),i.addEventListener("click",i.listener),o.listener=function(e){if("click"===e.type||"keydown"===e.type&&"Enter"===e.key){var t=e.target.closest(".datepicker-day");if(t&&!t.classList.contains("blocked")){var a=parseInt(t.getAttribute("data-day"),10),i=parseInt(t.getAttribute("data-month"),10);n(a,i)}}},document.listener=function(t){r.contains(t.target)||e.querySelector(".datepicker-input").contains(t.target)||(r.style.display="none")},a.addEventListener("click",a.listener),i.addEventListener("click",i.listener),o.addEventListener("click",o.listener),o.addEventListener("keydown",o.listener),document.addEventListener("click",document.listener)}e.d(t,{default:()=>m});var a={en:"Choose a date",fr:"Choisissez une date",es:"Elige una fecha",de:"Wählen Sie ein Datum",it:"Scegli una data",nl:"Kies een datum",pt:"Escolha uma data",ja:"日付を選択","zh-CN":"选择日期","zh-TW":"選擇日期",ru:"Выберите дату","bg-BG":"Изберете дата",cs:"Vyberte datum",da:"Vælg en dato",el:"Επιλέξτε μια ημερομηνία",fi:"Valitse päivämäärä","hr-HR":"Odaberite datum",hu:"Válasszon egy dátumot",id:"Pilih tanggal",ko:"날짜를 선택하세요","lt-LT":"Pasirinkite datą",nb:"Velg en dato",pl:"Wybierz datę","pt-BR":"Escolha uma data","pt-PT":"Escolha uma data","ro-RO":"Alegeți o dată","sk-SK":"Vyberte dátum","sl-SL":"Izberite datum",sv:"Välj ett datum",th:"เลือกวันที่",tr:"Bir tarih seçin",vi:"Chọn ngày"},i={en:{prevMonth:"Go to previous month",nextMonth:"Go to next month"},fr:{prevMonth:"Aller au mois précédent",nextMonth:"Aller au mois suivant"},es:{prevMonth:"Ir al mes anterior",nextMonth:"Ir al siguiente mes"},de:{prevMonth:"Gehe zum vorherigen Monat",nextMonth:"Gehe zum nächsten Monat"},it:{prevMonth:"Vai al mese precedente",nextMonth:"Vai al mese successivo"},nl:{prevMonth:"Ga naar de vorige maand",nextMonth:"Ga naar de volgende maand"},pt:{prevMonth:"Ir para o mês anterior",nextMonth:"Ir para o próximo mês"},ja:{prevMonth:"前の月へ",nextMonth:"次の月へ"},"zh-CN":{prevMonth:"转到上一个月",nextMonth:"转到下一个月"},"zh-TW":{prevMonth:"轉到上一個月",nextMonth:"轉到下一個月"},ru:{prevMonth:"Перейти к предыдущему месяцу",nextMonth:"Перейти к следующему месяцу"},"bg-BG":{prevMonth:"Отиди на предишния месец",nextMonth:"Отиди на следващия месец"},cs:{prevMonth:"Přejít na předchozí měsíc",nextMonth:"Přejít na další měsíc"},da:{prevMonth:"Gå til forrige måned",nextMonth:"Gå til næste måned"},el:{prevMonth:"Μετάβαση στον προηγούμενο μήνα",nextMonth:"Μετάβαση στον επόμενο μήνα"},fi:{prevMonth:"Siirry edelliseen kuukauteen",nextMonth:"Siirry seuraavaan kuukauteen"},"hr-HR":{prevMonth:"Idi na prethodni mjesec",nextMonth:"Idi na sljedeći mjesec"},hu:{prevMonth:"Ugrás az előző hónaphoz",nextMonth:"Ugrás a következő hónaphoz"},id:{prevMonth:"Pergi ke bulan sebelumnya",nextMonth:"Pergi ke bulan berikutnya"},ko:{prevMonth:"이전 달로 가기",nextMonth:"다음 달로 가기"},"lt-LT":{prevMonth:"Eiti į ankstesnį mėnesį",nextMonth:"Eiti į kitą mėnesį"},nb:{prevMonth:"Gå til forrige måned",nextMonth:"Gå til neste måned"},pl:{prevMonth:"Przejdź do poprzedniego miesiąca",nextMonth:"Przejdź do następnego miesiąca"},"pt-BR":{prevMonth:"Ir para o mês anterior",nextMonth:"Ir para o próximo mês"},"pt-PT":{prevMonth:"Ir para o mês anterior",nextMonth:"Ir para o próximo mês"},"ro-RO":{prevMonth:"Mergi la luna anterioară",nextMonth:"Mergi la luna următoare"},"sk-SK":{prevMonth:"Prejsť na predchádzajúci mesiac",nextMonth:"Prejsť na nasledujúci mesiac"},"sl-SL":{prevMonth:"Pojdi na prejšnji mesec",nextMonth:"Pojdi na naslednji mesec"},sv:{prevMonth:"Gå till föregående månad",nextMonth:"Gå till nästa månad"},th:{prevMonth:"ไปยังเดือนก่อนหน้า",nextMonth:"ไปยังเดือนถัดไป"},tr:{prevMonth:"Önceki aya git",nextMonth:"Sonraki aya git"},vi:{prevMonth:"Đi đến tháng trước",nextMonth:"Đi đến tháng sau"}},r={en:["January","February","March","April","May","June","July","August","September","October","November","December"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],nl:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],ja:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"zh-CN":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"zh-TW":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентяюрь","Октябрь","Ноябрь","Декабрь"],"bg-BG":["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],cs:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],da:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],fi:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],"hr-HR":["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ko:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"lt-LT":["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],nb:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],pl:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],"pt-BR":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"pt-PT":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"ro-RO":["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],"sk-SK":["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],"sl-SL":["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],sv:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],vi:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},o={en:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fr:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],es:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],de:["So","Mo","Di","Mi","Do","Fr","Sa"],it:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],nl:["Zo","Ma","Di","Wo","Do","Vr","Za"],pt:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],ja:["日","月","火","水","木","金","土"],"zh-CN":["日","一","二","三","四","五","六"],"zh-TW":["日","一","二","三","四","五","六"],ru:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"bg-BG":["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],cs:["Ne","Po","Út","St","Čt","Pá","So"],da:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],el:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],fi:["Su","Ma","Ti","Ke","To","Pe","La"],"hr-HR":["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],hu:["V","H","K","Sze","Cs","P","Szo"],id:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],ko:["일","월","화","수","목","금","토"],"lt-LT":["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"],nb:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],pl:["N","Pn","Wt","Śr","Cz","Pt","Sob"],"pt-BR":["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],"pt-PT":["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],"ro-RO":["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],"sk-SK":["Ne","Po","Ut","St","Št","Pi","So"],"sl-SL":["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],sv:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],th:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],tr:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],vi:["CN","T2","T3","T4","T5","T6","T7"]},s={1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二",13:"十三",14:"十四",15:"十五",16:"十六",17:"十七",18:"十八",19:"十九",20:"二十",21:"二十一",22:"二十二",23:"二十三",24:"二十四",25:"二十五",26:"二十六",27:"二十七",28:"二十八",29:"二十九",30:"三十",31:"三十一"},l={"zh-CN":{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二",13:"十三",14:"十四",15:"十五",16:"十六",17:"十七",18:"十八",19:"十九",20:"二十",21:"廿一",22:"廿二",23:"廿三",24:"廿四",25:"廿五",26:"廿六",27:"廿七",28:"廿八",29:"廿九",30:"三十",31:"三十一"},"zh-TW":{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二",13:"十三",14:"十四",15:"十五",16:"十六",17:"十七",18:"十八",19:"十九",20:"二十",21:"廿一",22:"廿二",23:"廿三",24:"廿四",25:"廿五",26:"廿六",27:"廿七",28:"廿八",29:"廿九",30:"三十",31:"三十一"}},u={1:"일",2:"이",3:"삼",4:"사",5:"오",6:"육",7:"칠",8:"팔",9:"구",10:"십",11:"십일",12:"십이",13:"십삼",14:"십사",15:"십오",16:"십육",17:"십칠",18:"십팔",19:"십구",20:"이십",21:"이십일",22:"이십이",23:"이십삼",24:"이십사",25:"이십오",26:"이십육",27:"이십칠",28:"이십팔",29:"이십구",30:"삼십",31:"삼십일"},d={1:"๑",2:"๒",3:"๓",4:"๔",5:"๕",6:"๖",7:"๗",8:"๘",9:"๙",10:"๑๐",11:"๑๑",12:"๑๒",13:"๑๓",14:"๑๔",15:"๑๕",16:"๑๖",17:"๑๗",18:"๑๘",19:"๑๙",20:"๒๐",21:"๒๑",22:"๒๒",23:"๒๓",24:"๒๔",25:"๒๕",26:"๒๖",27:"๒๗",28:"๒๘",29:"๒๙",30:"๓๐",31:"๓๑"};function c(e){var t=document.documentElement.lang;return["en","fr","es","de","it","nl","pt","ja","zh-CN","zh-TW","ru","bg-BG","cs","da","el","fi","hr-HR","hu","id","ko","lt-LT","nb","pl","pt-BR","pt-PT","ro-RO","sk-SK","sl-SL","sv","th","tr","vi"].includes(t)?t:e}function h(e,t,n,a,i,r,o){var c=new Date(e,t,n),h=n;"ja"===o.language?h=s[n]:"zh-CN"===o.language||"zh-TW"===o.language?h=l[o.language][n]:"ko"===o.language?h=u[n]:"th"===o.language&&(h=d[n]);var p=a?"datepicker-day current-month":"datepicker-day";return o.blockedDays.includes(c.getDay())?p+=" blocked":a&&i(c)?p+=" selected":a&&r(c)&&(p+=" in-range"),'<div tabindex="0" class="'.concat(p,'" data-day="').concat(n,'" data-month="').concat(t,'"><span>').concat(h,"</span></div>")}function p(e,t,n,a){var s,l,u=document.createElement("div");return u.className="datepicker-calendar-container ".concat(null==a?void 0:a.language),u.style.display=a.textInputEnabled?"none":"block",u.innerHTML='\n    <div class="datepicker-header">\n      <button aria-label="'.concat(i[a.language].prevMonth,'" class="prev-month">&lt;</button>\n      <span class="month-display">').concat((s=e.getMonth(),l=a.language,r[l][s])," ").concat(e.getFullYear(),'</span>\n      <button aria-label="').concat(i[a.language].nextMonth,'" class="next-month">&gt;</button>\n    </div>\n    ').concat(a.showDayNames?function(e){var t=o[e];return'<div class="datepicker-day-names">'.concat(t.map((function(e){return"<div>".concat(e,"</div>")})).join(""),"</div>")}(a.language):"",'\n    <div class="datepicker-days">\n      ').concat(function(e,t,n,a){var i=e.getFullYear(),r=e.getMonth(),o=new Date(i,r,1),s=new Date(i,r,0).getDate(),l=new Date(i,r+1,0).getDate();1===r&&function(e){return e%4==0&&e%100!=0||e%400==0}(i)&&(l=29);for(var u='<div class="datepicker-week">',d=o.getDay();d>0;d--)u+=h(i,r-1,s-d+1,!1,t,n,a);for(var c=1;c<=l;c++)u+=h(i,r,c,!0,t,n,a);for(var p=new Date(i,r,l).getDay(),m=1;p<6;m++,p++)u+=h(i,r+1,m,!1,t,n,a);return u+"</div>"}(e,t,n,a),"\n    </div>\n  "),u}function m(e,t){var i,r,o,s,l,u,d,h,m,v,g,b;this.element=document.getElementById(e),this.currentDate=new Date,this.currentDate.setDate(1),this.selectedStartDate=null,this.selectedEndDate=null,this.options={mode:null!==(i=null==t?void 0:t.mode)&&void 0!==i?i:"single",onSelect:null!==(r=null==t?void 0:t.onSelect)&&void 0!==r?r:null,blockedDays:null!==(o=null==t?void 0:t.blockedDays)&&void 0!==o?o:[],showDayNames:null===(s=null==t?void 0:t.showDayNames)||void 0===s||s,textInputEnabled:null!==(l=null==t?void 0:t.textInputEnabled)&&void 0!==l&&l,darkMode:null!==(u=null==t?void 0:t.darkMode)&&void 0!==u&&u,usePageLanguage:null!==(d=null==t?void 0:t.usePageLanguage)&&void 0!==d&&d,usePageLanguageFallback:null!==(h=null==t?void 0:t.usePageLanguageFallback)&&void 0!==h?h:"en",language:null!=t&&t.usePageLanguage?c(null==t?void 0:t.usePageLanguageFallback):null!==(m=null==t?void 0:t.language)&&void 0!==m?m:"en",textInputPlaceholder:null!==(v=null==t?void 0:t.textInputPlaceholder)&&void 0!==v?v:a[null!=t&&t.usePageLanguage?c():null!==(g=null==t?void 0:t.language)&&void 0!==g?g:"en"],cornerStyle:null!==(b=null==t?void 0:t.cornerStyle)&&void 0!==b?b:"round"},this.init=function(){this.options.darkMode&&this.element.classList.add("dark"),"round"===this.options.cornerStyle&&(this.element.classList.add("round"),this.element.classList.remove("square")),"square"===this.options.cornerStyle&&(this.element.classList.add("square"),this.element.classList.remove("round")),this.calendarContainer=p(this.currentDate,this.isDateSelected.bind(this),this.isDateInRange.bind(this),this.options),this.options.textInputEnabled&&(this.input=document.createElement("input"),this.input.value=this.options.textInputPlaceholder,this.input.type="text",this.input.className="datepicker-input",this.input.readOnly=!0,this.element.appendChild(this.input)),this.element.appendChild(this.calendarContainer),this.render(),n(this.element,this.changeMonth.bind(this),this.handleDayClick.bind(this))},this.render=function(){this.element.innerHTML="";var e=p(this.currentDate,this.isDateSelected.bind(this),this.isDateInRange.bind(this),this.options);if(this.options.textInputEnabled&&!this.element.querySelector(".datepicker-input")){var t=document.createElement("input");if(t.value=this.options.textInputPlaceholder,t.type="text",t.id="datepicker-input",t.className="datepicker-input",t.readOnly=!0,this.selectedStartDate)if("single"===this.options.mode)t.value=this.localizedDate(this.selectedStartDate,this.options.language);else if("range"===this.options.mode){var a=this.localizedDate(this.selectedStartDate,this.options.language);this.selectedEndDate&&(a+=" - ".concat(this.localizedDate(this.selectedEndDate,this.options.language))),t.value=a}t.removeEventListener("click",t.listener),t.removeEventListener("keydown",t.listener),t.addEventListener("click",(function(){e.style.display="block"})),t.addEventListener("keydown",(function(t){"Enter"===t.key&&(e.style.display="block"===e.style.display?"none":"block")})),this.element.appendChild(t)}this.element.appendChild(e),n(this.element,this.changeMonth.bind(this),this.handleDayClick.bind(this))},this.localizedDate=function(e,t){return e.toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})},this.isDateSelected=function(e){return this.selectedStartDate&&this.selectedStartDate.toDateString()===e.toDateString()||this.selectedEndDate&&this.selectedEndDate.toDateString()===e.toDateString()},this.isDateInRange=function(e){return this.selectedStartDate&&this.selectedEndDate&&e>this.selectedStartDate&&e<this.selectedEndDate},this.handleDayClick=function(e,n){var a=this.currentDate.getFullYear();-1===n?(n=11,a--):12===n&&(n=0,a++);var i=new Date(a,n,e);"single"===this.options.mode?(this.selectedStartDate=i,this.selectedEndDate=null,this.options.textInputEnabled&&(this.element.querySelector(".datepicker-input").value=i.toDateString()),this.triggerSelectCallback(),this.render(),t.textInputEnabled&&(this.element.querySelector(".datepicker-calendar-container").style.display="none")):"range"===this.options.mode&&(!this.selectedStartDate||this.selectedEndDate?(this.selectedStartDate=i,this.selectedEndDate=null,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block"):this.selectedStartDate&&!this.selectedEndDate&&(i>this.selectedStartDate?(this.selectedEndDate=i,this.element.querySelector(".datepicker-input")&&(this.element.querySelector(".datepicker-input").value="".concat(this.selectedStartDate.toDateString()," ").concat(void 0!==this.selectedEndDate.toDateString()?"- "+this.selectedEndDate.toDateString():"")),this.triggerSelectCallback(),this.render(),t.textInputEnabled&&(this.element.querySelector(".datepicker-calendar-container").style.display="none")):(this.selectedStartDate=i,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block")))},this.changeMonth=function(e){var t,n={currentYear:(t=this.currentDate).getFullYear(),currentMonth:t.getMonth(),currentDay:t.getDate()},a=n.currentYear,i=n.currentDay,r=new Date(a,n.currentMonth+e,1),o=new Date(a,r.getMonth()+1,0).getDate();r.setDate(Math.min(i,o)),this.currentDate=r,this.render(),this.element.querySelector(".datepicker-calendar-container").style.display="block"},this.triggerSelectCallback=function(){this.options.onSelect&&this.options.onSelect(this.selectedStartDate,this.selectedEndDate)}}return t.default})()));