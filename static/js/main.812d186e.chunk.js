(this.webpackJsonpspacious=this.webpackJsonpspacious||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(10),i=s.n(n),l=(s(16),s(17),s(3)),r=s(22),d=s(20),o=s(21),m=[{name:"Bruno Ewing",Friends:25,url:"https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",id:1},{name:"Trey Logan",Friends:24,url:"https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",id:2},{name:"Aldo Mcdaniel",Friends:23,url:"https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg",id:3},{name:"Lillian Petersen",Friends:26,url:"https://cdn.pixabay.com/photo/2019/06/11/10/56/girl-4266712_960_720.jpg",id:4},{name:"Amaris Gilmore",Friends:18,url:"https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg",id:5},{name:"Malaki Keller",Friends:16,url:"https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png",id:6},{name:"Yamilet Hickman",Friends:30,url:"https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg",id:7},{name:"Keira Pace",Friends:12,url:"https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635_960_720.jpg",id:8},{name:"Agustin Parrish",Friends:14,url:"https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg",id:9}],j=[{name:"Mercury",pop:256,id:1},{name:"Venus",pop:235,id:2},{name:"Earth",pop:320,id:3},{name:"Mars",pop:150,id:4},{name:"Jupiter",pop:400,id:5},{name:"Saturn",pop:192,id:6},{name:"Uranus",pop:130,id:7},{name:"Neptune",pop:89,id:8},{name:"pluto",pop:55,id:9}],b=["red","gold","greenyellow","purple","yellow","aquamarine","pink","chartreuse","chocolate","teal","cornsilk","cyan","orange","deeppink"],h=["","planet Mercury is lovely. Sunny and Honey...Milky deep down the Milky Way. You cant wait to be here","planet Venus, Our Lovely Planet, Close Like Sugar, Yellow Like Fanta Everybody loikes pawpaw","planet Earth , Our dear Home. The Place for mankind . The dwelling of the rich and poor...filled with Corruption","planet Mars is Elons Dream...Hehehe, I cant wait to visit the earths closest neighbor. On a side Note....mheen am tired ","planet Jupiter , Dear friend, Do You know that I love react? In fact...React has treally show that development can be made so so easy","planet Saturn S = for Star and Sun.... Boring and Lonely...so cold and large. I like your plenety satelites","planet Uranus hmmm...lets try lorem here bikonu Lorem ipsum, dolor sit amet consectetur adipisicing elit. ","planet Neptune , you tooo...lorem will do Molestiae maxime dolore reprehenderit vel nesciunt debitis","planet Pluto ..they say you are not a planet. But out of a kind heart, I included you in the list..I will make you proud"],p=["","I am Bruno, anice and simple Guy.","My name is Logan, Its a Delight to meet you","The call me the wisest man alive..I am Aldo","Lilian...The name you whisper in your dreams","My name is Amaris, I am only 12 years old, I can code..lies","Malaki means Guru. I am paid to change the world","I love my wife, she doesnt love me..HickMan is a nice guy","Well...dem boys thimks they have us. We gonna suck em dry..go Pace","Parrish, sweeter than honey, better than wine, Your bed would be lucky."],u=s(0);function x(){return Math.floor(Math.random()*b.length)}x();var O={width:"95%",backgroundColor:"white",margin:"0 auto",marginBottom:"5px",borderRadius:"15px"};var y=function(){return Object(u.jsxs)(d.a,{className:" my-5 planets g-0",children:[j.map((function(e){var t,s=e.name,c=e.pop,a=e.id;return Object(u.jsx)(o.a,{"data-id":a,className:"mb-3 cards",sm:6,md:4,children:Object(u.jsxs)("div",{style:O,className:"pt-3 pb-1 ps-2",children:[Object(u.jsx)("div",{className:"circ ",style:(t=x(),{background:" radial-gradient(\n    circle,\n    ".concat(b[t]," 5%,\n    rgba(255, 255, 255, 0.3) 99%\n  )")})}),Object(u.jsxs)("p",{className:"m-0 title",children:["Planet ",Object(u.jsx)("span",{children:s})]}),Object(u.jsxs)("p",{className:"m-0 pop",children:["Pop: ",Object(u.jsx)("span",{children:c})]})]})},a)})),Object(u.jsx)("span",{className:"position-fixed add ",children:"+"})]})},g=s(2),f=function(){return Object(u.jsxs)(d.a,{className:" my-5 planets g-0",children:[m.map((function(e){var t=e.name,s=e.Friends,c=e.url,a=e.id;return Object(u.jsx)(o.a,{"data-id":a,className:"mb-3 cards",sm:6,md:4,children:Object(u.jsxs)("div",{style:Object(g.a)(Object(g.a)({},O),{},{width:"80%"}),className:" pb-1",children:[Object(u.jsx)("div",{style:{height:"7em"},children:Object(u.jsx)("img",{src:c,alt:t})}),Object(u.jsx)("p",{className:"m-0 ps-2 title",children:t}),Object(u.jsxs)("p",{className:"m-0 ps-2 pop",children:[Object(u.jsx)("span",{children:s})," Friends"]})]})},a)})),Object(u.jsx)("span",{className:"position-fixed add ",children:"+"})]})},N=function(){var e=Math.floor(Math.random()*m.length);return e},v=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),r=i[0],d=i[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),b=j[0],p=j[1];return Object(c.useEffect)((function(){var e=document.querySelectorAll(".cards");e&&e.forEach((function(e){e.addEventListener("click",(function(t){var s=e.dataset.id,c=e.querySelector(".title").textContent,n=e.querySelector(".pop").textContent;document.querySelector(".side").style.display="block",a(c),d(n),p(s)}))}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{className:"text-center fw-bolder",children:s}),Object(u.jsx)("p",{className:"cr text-justify",children:h[b]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"mb-0",children:"population"}),Object(u.jsx)("p",{className:"fw-bold mb-0",children:r.slice(4,r.length)})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)("p",{className:"mb-0",children:"Characters"}),Object(u.jsx)("button",{className:"bg-secondary btn",children:"+"})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[N()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[N()].name}),Object(u.jsxs)("p",{className:"mb-0 cr",children:[m[N()].Friends," friends"]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[N()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[N()].name}),Object(u.jsxs)("p",{className:"mb-0 cr",children:[m[N()].Friends," friends"]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[N()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[N()].name}),Object(u.jsxs)("p",{className:"mb-0 cr",children:[m[N()].Friends," friends"]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[N()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[N()].name}),Object(u.jsxs)("p",{className:"mb-0 cr",children:[m[N()].Friends," friends"]})]})]})]})})},w=function(){var e=Math.floor(Math.random()*j.length);return e},k=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),r=i[0],d=i[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),h=b[0],x=b[1],O=Object(c.useState)(""),y=Object(l.a)(O,2),g=y[0],f=y[1];return Object(c.useEffect)((function(){var e=document.querySelectorAll(".cards");e&&e.forEach((function(e){e.addEventListener("click",(function(t){var s=e.dataset.id,c=e.querySelector(".title").textContent,n=e.querySelector(".pop").textContent,i=e.querySelector("img").getAttribute("src");document.querySelector(".side").style.display="block",a(c),d(n),x(i),f(s)}))}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{className:"text-center fw-bolder",children:s}),Object(u.jsx)("img",{style:{height:"6em"},src:h,alt:s}),Object(u.jsx)("p",{className:"cr text-justify",children:p[g]}),Object(u.jsxs)("article",{className:"d-flex justify-content-around",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"mb-0",children:"Planet"}),Object(u.jsx)("p",{className:"fw-bold mb-0",children:j[w()].name})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"mb-0",children:"Friends"}),Object(u.jsx)("p",{className:"fw-bold mb-0",children:r.slice(0,3)})]})]}),Object(u.jsx)("p",{className:"mb-0 text-secondary",children:"Friends"}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[w()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[w()].name}),Object(u.jsx)("p",{className:"mb-0 cr",children:p[w()]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[w()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[w()].name}),Object(u.jsx)("p",{className:"mb-0 cr",children:p[w()]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[w()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[w()].name}),Object(u.jsx)("p",{className:"mb-0 cr",children:p[w()]})]})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("img",{style:{height:"4em",width:"4em"},src:m[w()].url,alt:""}),Object(u.jsxs)("div",{className:"px-2",children:[Object(u.jsx)("p",{className:"mb-0 fw-bold",children:m[w()].name}),Object(u.jsx)("p",{className:"mb-0 cr",children:p[w()]})]})]})]})})},S=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),d=i[0],o=i[1];return Object(u.jsxs)(r.a,{className:" g-0",children:[Object(u.jsx)("h1",{className:"color",children:"Spacious"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){a(!0),document.querySelector(".side").style.display="none"},className:"switchs ".concat(s?"active":""),children:"PLANETS"}),Object(u.jsx)("button",{onClick:function(){a(!1),document.querySelector(".side").style.display="none"},className:"switchs ".concat(s?"":"active"),children:"CHARACTERS"})]}),Object(u.jsxs)(r.a,{className:"d-flex g-0",children:[Object(u.jsxs)("div",{className:"".concat(d?"col-7 col-md-8":"width"," "),children:[s?Object(u.jsx)(y,{}):"",s?"":Object(u.jsx)(f,{})]}),Object(u.jsxs)("div",{className:"side col-5 col-md-4 bg-white",children:[Object(u.jsx)("button",{onClick:function(){var e=document.querySelector(".side");e.style.display="none","none"===e.style.display?o(!1):o(!0)},className:" d-block ms-auto fs-3 btn px-2 py-0 mb-0 bg-secondary",children:"x"}),s?Object(u.jsx)(v,{}):"",s?"":Object(u.jsx)(k,{})]})]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.812d186e.chunk.js.map