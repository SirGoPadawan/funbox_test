(this.webpackJsonpfunbox_test=this.webpackJsonpfunbox_test||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),r=a.n(s),l=a(14),i=a(1),m=(a(22),a(16));function o(e){var t=e.active,a=e.inStock;return c.a.createElement("svg",{viewBox:"0 0 328 488",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg"},c.a.createElement("mask",{id:"path-1-inside-1",fill:"white"},c.a.createElement("path",{d:"M311 0C320.389 0 328 7.61116 328 17V471C328 480.389 320.389 488 311 488H17C7.61115 488 0 480.389 0 471V46.3431L46.3431 0H311Z"})),c.a.createElement("path",{d:"M311 0C320.389 0 328 7.61116 328 17V471C328 480.389 320.389 488 311 488H17C7.61115 488 0 480.389 0 471V46.3431L46.3431 0H311Z",stroke:"#A1A1A1",strokeWidth:"8",mask:"url(#path-1-inside-1)",className:t&&a?"stroke_active":"stroke"}))}function u(){return c.a.createElement("svg",{viewBox:"0 0 328 488",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg svg-disabled"},c.a.createElement("path",{d:"M311 0C320.389 0 328 7.61116 328 17V471C328 480.389 320.389 488 311 488H17C7.61115 488 0 480.389 0 471V46.3431L46.3431 0H311Z",stroke:"#A1A1A1",strokeWidth:"8",mask:"url(#path-1-inside-1)",className:"stroke"}))}function p(e){var t=e.cardData,a=Object(n.useState)(!1),s=Object(m.a)(a,2),r=s[0],l=s[1];return c.a.createElement("section",{className:"card-items ".concat(t.inStock?"":"disabled")},c.a.createElement("section",{className:"card",onClick:function(){return l(!r)}},c.a.createElement(u,null),c.a.createElement(o,{active:r,inStock:t.inStock}),c.a.createElement("span",{className:"card-span"},t.cardSpan),c.a.createElement("h2",{className:"card-title"},t.title),c.a.createElement("span",{className:"card-subtitle"},t.subTitle),c.a.createElement("span",{className:"card-count"},t.count),c.a.createElement("span",{className:"card-present"},t.present),c.a.createElement("span",{className:"card-present"},t.subPresent),c.a.createElement("div",{className:"card-cat"}),c.a.createElement("span",{className:r&&t.inStock?"card-circle_active":"card-circle"},t.weight,c.a.createElement("span",null,"\u043a\u0433"))),c.a.createElement("div",{className:"card-subitem"},t.subItem,c.a.createElement("button",{className:"card-buy btn",onClick:function(){return l(!r)}},t.textButton)))}var d=[{inStock:!0,cardSpan:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subTitle:"\u0441 \u0444\u0443\u0430 \u0433\u0440\u0430",count:"10 \u043f\u043e\u0440\u0446\u0438\u0439",present:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",subPresent:"",weight:"0,5",subItem:"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d ",textButton:"\u043a\u0443\u043f\u0438."},{inStock:!0,cardSpan:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subTitle:"\u0441 \u0440\u044b\u0431\u043e\u0439",count:"40 \u043f\u043e\u0440\u0446\u0438\u0439",present:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",subPresent:"",weight:"2",subItem:" \u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430. ",textButton:""},{inStock:!1,cardSpan:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subTitle:"\u0441 \u043a\u0443\u0440\u043e\u0439",count:"100 \u043f\u043e\u0440\u0446\u0438\u0439",present:"5 \u0438\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",subPresent:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",weight:"5",subItem:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f",textButton:""}];r.a.render(c.a.createElement(l.a,null,c.a.createElement(i.a,{path:"/",component:function(){return console.log("app"),c.a.createElement("section",{className:"wrapper"},c.a.createElement("h1",{className:"wrapper__title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),c.a.createElement("section",{className:"card-list"},d.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(p,{cardData:e}))}))))}})),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8058da45.chunk.js.map