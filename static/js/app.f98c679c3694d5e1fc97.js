webpackJsonp([1],{BE6h:function(t,s,i){t.exports=i.p+"static/img/card-header.57a54ce.jpg"},GcMe:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a=i("Sazm"),l=i.n(a),n=(i("3VHS"),i("YtIj"),l.a.initializeApp({apiKey:"AIzaSyCVlB7nxPbjXoJnWXHLLvJVeX0pBwO95jU",authDomain:"fitnesssiden.firebaseapp.com",databaseURL:"https://fitnesssiden.firebaseio.com",projectId:"fitnesssiden",storageBucket:"fitnesssiden.appspot.com",messagingSenderId:"719630380543"})),r={data:function(){return{log:"Log ind",trigger:"modal-trigger",modal:"#modal1"}},methods:{logOut:function(){""==this.trigger&&(n.auth().signOut(),this.log="Log ind",this.trigger="modal-trigger",this.modal="#modal1",this.$router.push("/"))}},mounted:function(){var t=this;n.auth().onAuthStateChanged(function(s){console.log(s),console.log(t),null!=s&&(t.log="Log ud",t.trigger="",t.modal="#")})}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav",[i("div",{staticClass:"nav-wrapper green"},[i("div",{staticClass:"container"},[i("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[i("i",{staticClass:"material-icons"},[t._v("whatshot")]),t._v("Fitness siden")]),t._v(" "),i("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[i("li",[i("a",{class:t.trigger,attrs:{href:t.modal},on:{click:t.logOut}},[i("i",{staticClass:"material-icons left"},[t._v("person")]),t._v(t._s(t.log))])]),t._v(" "),t._m(0)])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"material-icons left"},[this._v("business")]),this._v("Blog/Nyheder")])])}]},o=i("VU/8")(r,c,!1,null,null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",{staticClass:"page-footer green"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col l6 s12"},[i("h5",{staticClass:"white-text"},[t._v("Fitness siden")]),t._v(" "),i("p",{staticClass:"grey-text text-lighten-4"},[t._v("Din genvej til alle fitnesskæder og fitnesscentre i Danmark.")])]),t._v(" "),i("div",{staticClass:"col l4 offset-l2 s12"},[i("h5",{staticClass:"white-text"},[t._v("Links")]),t._v(" "),i("ul",[i("li",[i("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[i("i",{staticClass:"material-icons"},[t._v("voice_chat")])])]),t._v(" "),i("li",[i("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[i("i",{staticClass:"material-icons"},[t._v("wallpaper")])])]),t._v(" "),i("li",[i("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[i("i",{staticClass:"material-icons"},[t._v("whatshot")])])])])])])]),t._v(" "),i("div",{staticClass:"footer-copyright"},[i("div",{staticClass:"container"},[t._v("\n      © 2018 Copyright Text\n      "),i("a",{staticClass:"grey-text text-lighten-4 right",attrs:{href:"#!"}},[t._v("More Links")])])])])}]},h=i("VU/8")({data:function(){return{}}},d,!1,null,null,null).exports,v={data:function(){return{instance:null,error:""}},methods:{closeModal:function(){this.instance.close()},logIn:function(){var t=this,s=document.getElementById("username").value,i=document.getElementById("password").value;n.auth().signInWithEmailAndPassword(s,i).then(function(s){s&&(t.instance.close(),t.$router.push("/admin"))}).catch(function(s){console.log(s),t.error=s.message})}},mounted:function(){var t=document.querySelector(".modal");this.instance=M.Modal.init(t,null)}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"modal",attrs:{id:"modal1"}},[i("div",{staticClass:"modal-content"},[i("h4",[t._v("Log ind")]),t._v(" "),i("div",{staticClass:"row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("label",[t._v(t._s(t.error))])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn green",on:{click:t.logIn}},[t._v("Log in")]),t._v(" "),i("button",{staticClass:"btn green",on:{click:t.closeModal}},[t._v("Cancel")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-field col s6"},[s("input",{staticClass:"validate",attrs:{id:"username",type:"text"}}),this._v(" "),s("label",{attrs:{for:"username"}},[this._v("Username")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-field col s6"},[s("input",{staticClass:"validate",attrs:{id:"password",type:"password"}}),this._v(" "),s("label",{attrs:{for:"password"}},[this._v("Password")])])}]},_=i("VU/8")(v,u,!1,null,null,null).exports,p=(i("GcMe"),{name:"app",components:{Navbar:o,Footer:h,Modal:_}}),m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Navbar"),this._v(" "),s("router-view"),this._v(" "),s("Footer"),this._v(" "),s("Modal")],1)},staticRenderFns:[]},f=i("VU/8")(p,m,!1,null,null,null).exports,g=i("/ocq"),C=i("U54J"),b=i.n(C),y=i("mtWM"),x=i.n(y),w={name:"Frontpage",data:function(){return{}},methods:{handleSearch:function(t){this.$router.push("/search?result="+t.target.value)},getDanishCities:function(){return x.a.get("https://dawa.aws.dk/postnumre")},getGyms:function(){return n.firestore().collection("gyms").get()}},mounted:function(){var t={data:{},limit:10,onAutocomplete:function(t){}},s=document.querySelector(".autocomplete");b.a.Autocomplete.init(s,t);document.querySelectorAll(".collapsible").forEach(function(t){b.a.Collapsible.init(t,null)}),x.a.all([this.getDanishCities(),this.getGyms()]).then(x.a.spread(function(s,i){console.log(i),s.data.forEach(function(s){t.data[s.navn]="https://findicons.com/files/icons/1580/devine_icons_part_2/128/home.png"}),i.docs.forEach(function(s){t.data[s.data().name]="https://image.flaticon.com/icons/png/128/55/55240.png"})}))},beforeDestroy:function(){console.log("unmounted")}},k={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container frontpage-img",staticStyle:{width:"100%",height:"1000px"}},[s("div",{staticClass:"container",staticStyle:{padding:"40px 0px"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col l6 s12 push-l3 push-s0"},[s("i",{staticClass:"material-icons prefix search-icon"},[this._v("search")]),this._v(" "),s("input",{staticClass:"autocomplete",attrs:{type:"text",id:"search",autocomplete:"off"},on:{change:this.handleSearch}}),this._v(" "),s("label",{staticClass:"search-label",attrs:{for:"search"}},[this._v("Søg efter fitnesskæde eller by")])])]),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),s("div",{staticClass:"fixed-action-btn"},[s("router-link",{staticClass:"btn-floating btn-large green tooltipped",attrs:{to:"/search?result=all","data-tooltip":"Klik for at vise alle fitnesskæder i Danmark","data-position":"top"}},[s("i",{staticClass:"large material-icons"},[this._v("language")])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"col s6"},[s("ul",{staticClass:"collapsible"},[s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("filter_drama")]),this._v("Blog post #1")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])]),this._v(" "),s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("place")]),this._v("Blog post #2")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])]),this._v(" "),s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("whatshot")]),this._v("Blog post #3")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col s6"},[s("ul",{staticClass:"collapsible"},[s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("filter_drama")]),this._v("First")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])]),this._v(" "),s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("place")]),this._v("Second")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])]),this._v(" "),s("li",[s("div",{staticClass:"collapsible-header"},[s("i",{staticClass:"material-icons"},[this._v("whatshot")]),this._v("Third")]),this._v(" "),s("div",{staticClass:"collapsible-body"},[s("span",[this._v("Lorem ipsum dolor sit amet.")])])])])])])}]},E=i("VU/8")(w,k,!1,null,null,null).exports,L=i("//Fk"),$=i.n(L),S=(i("FZ7v"),i("kpl5"),{render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card horizontal"},[t._m(0),t._v(" "),i("div",{staticClass:"card-stacked"},[i("div",{staticClass:"card-content"},[i("p",[t._v(t._s(t.msg))]),t._v(" "),t._l(t.type,function(s){return i("div",{key:s,staticClass:"chip right"},[t._v("\n          "+t._s(s)+"\n      ")])})],2),t._v(" "),i("div",{staticClass:"card-action"},[i("router-link",{attrs:{to:"/gym/"+t.gym_id}},[t._v("Gå til fitnesskæde")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-image"},[s("img",{attrs:{src:i("twI7"),height:"165"}})])}]}),F={name:"Resultpage",data:function(){return{search:null,searchResult:[],searchDiv:"",chains:[],test:[]}},components:{searchResult:i("VU/8")({props:["msg","gym_id","type"],data:function(){return{}}},S,!1,null,null,null).exports},methods:{gymLookUp:function(){return n.firestore().collection("gyms").get()},clubLookUp:function(){return n.firestore().collection("clubs").get()},searchAndFilter:function(){var t=this;this.searchResult.length=0,$.a.all([this.gymLookUp(),this.clubLookUp()]).then(function(s){var i=s[0],e=s[1];console.log(t.search.toLowerCase()),i.docs.forEach(function(s){if(-1!=s.data().name.toLowerCase().indexOf(t.search.toLowerCase())){console.log(s.data().name.toLowerCase().indexOf(t.search.toLowerCase()));var i=s.data();i.id=s.id,i.gym_id=s.id;var e=["fitnesskæde","24h"];i.type=e,t.searchResult.push(i)}}),e.docs.forEach(function(s){if(-1!=s.data().name.toLowerCase().indexOf(t.search.toLowerCase())){var i=s.data();i.id=s.data().gym_id,i.gym_id=s.id,i.type=["center"],t.searchResult.push(i)}else if(-1!=s.data().city.toLowerCase().indexOf(t.search)){var e=s.data();e.id=s.id,e.gym_id=s.id,e.type=["center"],t.searchResult.push(s.data())}}),console.log(t.searchResult)})}},created:function(){},mounted:function(){this.search=this.$route.query.result,this.searchAndFilter()}},R={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container",staticStyle:{"margin-top":"20px"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s3"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aliquid officiis odit temporibus, quisquam, placeat tenetur maiores unde blanditiis minus eligendi accusantium recusandae, alias vitae magnam harum molestias ad cum. ")]),t._v(" "),i("br"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[t._v("search")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",id:"searchfield"},domProps:{value:t.search},on:{input:function(s){s.target.composing||(t.search=s.target.value)}}})])]),t._v(" "),i("div",{staticClass:"card-action"},[i("a",{staticClass:"waves-effect waves-light btn full green",on:{click:t.searchAndFilter}},[i("i",{staticClass:"material-icons right"},[t._v("search")]),t._v("Søg")])])])]),t._v(" "),i("div",{staticClass:"col s7"},[0===t.searchResult.length?i("p",[t._v("Ingen registrerede fitnesskæder eller centre matcher søgeordet "+t._s(t.search)+".")]):t._e(),t._v(" "),t._l(t.searchResult,function(t){return i("div",{key:t.gym_id},[i("searchResult",{attrs:{gym_id:t.id,msg:t.name,type:t.type}})],1)})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-image"},[s("img",{attrs:{src:i("BE6h")}}),this._v(" "),s("span",{staticClass:"card-title"},[this._v("Filter")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("label",[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("span",[this._v("Døgnåbent")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("label",[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("span",[this._v("Udendørs faciliteter")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("label",[s("input",{attrs:{type:"checkbox",checked:"checked"}}),this._v(" "),s("span",[this._v("Virtuel fitness")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("label",[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("span",[this._v("Virtuel fitness app support")])])])}]},U=i("VU/8")(F,R,!1,null,null,null).exports,A=i("0lrd"),I=i.n(A),V={render:function(){var t=this.$createElement,s=this._self._c||t;return s("li",{class:"collection-item pointer "+this.active,on:{click:this.selectClub}},[s("div",[this._v(this._s(this.name))])])},staticRenderFns:[]},T={data:function(){return{id:this.$route.params.id,chain:{name:null,active:"",grundlagt:null,antal:0,web:null,phone:null,virtual:null,app:null},clubs:[],selected_club:{name:null}}},components:{Club:i("VU/8")({props:["name","active","selectClub"]},V,!1,null,null,null).exports},methods:{selectClub:function(t){var s=this,i=t.target.parentNode.attributes.club_id.value;this.clubs.forEach(function(t){t.active="",t.id==i&&(s.selected_club=t,t.active="active",s.initMap(t.city))})},initMap:function(t){var s={address:t};(new google.maps.Geocoder).geocode(s,function(t,s){if(console.log(t),console.log(s),"INVALID_REQUEST"==s)I.a.toast({html:"No/invalid address for the given club/chain!"});else{var i=t[0].geometry.location,e=new google.maps.Map(document.getElementById("map"),{zoom:12,center:i});new google.maps.Marker({position:i,map:e})}})}},mounted:function(){var t=this,s=document.querySelector(".carousel");I.a.Carousel.init(s,null);console.log(this.id);var i=document.querySelector(".tooltipped");I.a.Tooltip.init(i,null),n.firestore().collection("clubs").where("gym_id","==",this.id).get().then(function(s){var i=0;s.docs.forEach(function(s){var e={name:s.data().name,active:0==i?"active":"",id:s.id,city:s.data().city,address:s.data().address,zip:s.data().zip};0==i&&(t.selected_club.name=e.name,t.initMap(e.city+" "+e.zip+", "+e.address)),i++,t.clubs.push(e)}),t.chain.antal=i}),n.firestore().collection("gyms").doc(this.id).get().then(function(s){t.chain.name=s.data().name})}},B={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col s5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("img",{attrs:{src:i("ULvw")}}),t._v(" "),e("span",{staticClass:"card-title"},[t._v(t._s(t.chain.name))])]),t._v(" "),e("div",{staticClass:"card-content"},[e("ul",{staticClass:"collection"},[e("li",{staticClass:"collection-item green white-text"},[t._v("Grunlagt: ")]),t._v(" "),e("li",{staticClass:"collection-item green white-text"},[t._v("Antal centre: "+t._s(t.chain.antal))]),t._v(" "),e("li",{staticClass:"collection-item green white-text"},[t._v("Hjemmeside: ")]),t._v(" "),e("li",{staticClass:"collection-item green white-text"},[t._v("Telefon nr: ")]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])]),t._v(" "),e("div",{staticClass:"col s2"},[e("ul",{staticClass:"collection with-header"},[t._m(3),t._v(" "),t._l(t.clubs,function(s){return e("div",{key:s.id},[e("Club",{attrs:{name:s.name,active:s.active,selectClub:t.selectClub,club_id:s.id}})],1)})],2)]),t._v(" "),e("div",{staticClass:"col s5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("img",{attrs:{src:i("ULvw")}}),t._v(" "),e("span",{staticClass:"card-title"},[t._v(t._s(t.selected_club.name))])]),t._v(" "),t._m(4)])])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"carousel"},[s("a",{staticClass:"carousel-item",attrs:{href:"#one!"}},[s("img",{attrs:{src:i("twI7")}})]),this._v(" "),s("a",{staticClass:"carousel-item",attrs:{href:"#two!"}},[s("img",{attrs:{src:i("twI7")}})]),this._v(" "),s("a",{staticClass:"carousel-item",attrs:{href:"#three!"}},[s("img",{attrs:{src:i("twI7")}})]),this._v(" "),s("a",{staticClass:"carousel-item",attrs:{href:"#four!"}},[s("img",{attrs:{src:i("twI7")}})]),this._v(" "),s("a",{staticClass:"carousel-item",attrs:{href:"#five!"}},[s("img",{attrs:{src:i("twI7")}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"collection-item green white-text"},[this._v("Virtuel fitness: "),s("i",{staticClass:"material-icons"},[this._v("check")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"collection-item green white-text"},[this._v("App support: "),s("i",{staticClass:"material-icons"},[this._v("check")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"collection-header center tooltipped",attrs:{"data-position":"top","data-tooltip":"Centre"}},[s("i",{staticClass:"material-icons"},[this._v("home")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-content"},[s("ul",{staticClass:"collection"},[s("li",{staticClass:"collection-item green white-text"},[this._v("By: ")]),this._v(" "),s("li",{staticClass:"collection-item green white-text"},[this._v("Addresse: ")]),this._v(" "),s("li",{staticClass:"collection-item green white-text"},[this._v("Åbningstider:\n                          "),s("ul",[s("li",[this._v("Mandag: ")]),this._v(" "),s("li",[this._v("Tirsdag: ")]),this._v(" "),s("li",[this._v("Onsdag: ")]),this._v(" "),s("li",[this._v("Torsdag: ")]),this._v(" "),s("li",[this._v("Fredag: ")]),this._v(" "),s("li",[this._v("Lørdag: ")]),this._v(" "),s("li",[this._v("Søndag: ")])])]),this._v(" "),s("li",{staticClass:"collection-item green white-text"},[this._v("Telefon: ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticStyle:{height:"400px",width:"100%"},attrs:{id:"map"}})])}]},j=i("VU/8")(T,B,!1,null,null,null).exports,O={beforeRouteEnter:function(t,s,i){n.auth().onAuthStateChanged(function(t){console.log(t),null!=t&&i()})}},q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col s6"},[s("h5",[this._v("Fitness kæde")]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"name",type:"text"}}),this._v(" "),s("label",{attrs:{for:"name"}},[this._v("Navn")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"created_at",type:"text"}}),this._v(" "),s("label",{attrs:{for:"created_at"}},[this._v("Grundlagt")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"Web",type:"text"}}),this._v(" "),s("label",{attrs:{for:"Web"}},[this._v("Hjemmeside")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"phone",type:"number"}}),this._v(" "),s("label",{attrs:{for:"phone"}},[this._v("Tlf. nummer")])]),this._v(" "),s("label",[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("span",[this._v("Virtuel fitness")])]),this._v(" "),s("label",{staticStyle:{display:"block"}},[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("span",[this._v("App support")])]),this._v(" "),s("button",{staticClass:"btn",staticStyle:{"margin-top":"20px"}},[this._v("Tilføj kæde")])]),this._v(" "),s("div",{staticClass:"col s6"},[s("h5",[this._v("Fitness klub/center")]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"club_city",type:"text"}}),this._v(" "),s("label",{attrs:{for:"club_city"}},[this._v("By")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"club_zip",type:"number"}}),this._v(" "),s("label",{attrs:{for:"club_zip"}},[this._v("Post nr.")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"club_address",type:"text"}}),this._v(" "),s("label",{attrs:{for:"club_address"}},[this._v("Addresse")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"mandag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"mandag"}},[this._v("Mandag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"tirsdag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"tirsdag"}},[this._v("Tirsdag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"onsdag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"onsdag"}},[this._v("Onsdag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"torsdag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"torsdag"}},[this._v("Torsdag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"fredag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"fredag"}},[this._v("Fredag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"loerdag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"loerdag"}},[this._v("Lørdag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"soendag",type:"text"}}),this._v(" "),s("label",{attrs:{for:"soendag"}},[this._v("Søndag")])]),this._v(" "),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"club_phone",type:"text"}}),this._v(" "),s("label",{attrs:{for:"club_phone"}},[this._v("Tlf. nummer")])]),this._v(" "),s("button",{staticClass:"btn"},[this._v("Tilføj center")])])])])}]},z=i("VU/8")(O,q,!1,null,null,null).exports;e.a.use(g.a);var D=new g.a({routes:[{path:"/",name:"Frontpage",component:E},{path:"/search",name:"Search result",component:U},{path:"/gym/:id",name:"Gym details",component:j},{path:"/admin",name:"Admin",component:z}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:D,template:"<App/>",components:{App:f}})},ULvw:function(t,s,i){t.exports=i.p+"static/img/fitness_chain.d714e35.jpg"},kpl5:function(t,s){},twI7:function(t,s,i){t.exports=i.p+"static/img/repeat.f74c8d2.jpg"}},["NHnr"]);
//# sourceMappingURL=app.f98c679c3694d5e1fc97.js.map