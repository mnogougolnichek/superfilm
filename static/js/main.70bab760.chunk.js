(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(t,e,n){},39:function(t,e,n){t.exports=n.p+"static/media/infoimg.03d0915f.jpg"},40:function(t,e,n){t.exports=n(73)},50:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(33),r=n.n(o),c=n(19),l=n(36),s=n(37),u=n(10),p=(n(50),[]);var d=new Date;var m=!1;var h=3;var f=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];var y="medium";var b=Object(u.combineReducers)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;return"FETCH_DATA_SUCCESS"===e.type?e.payload:"SET_CARD_IMAGE_SIZE"===e.type?(console.log(e.payload),e.payload):t},date:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;return"SET_DATE"===e.type?e.payload:t},listVisibility:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;return"SET_LIST_VISIBILITY"===e.type?e.payload:t},cardsQuantity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;return"SET_CARDS_QUANTITY"===e.type?e.payload:t},monthNames:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:f},imageSize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;return"SET_IMAGE_SIZE"===e.type?e.payload:t}}),g=n(4),v=n(5),E=n(7),S=n(6),j=n(8),O=n(3),C=n(38),_=n.n(C),I=n(39),T=n.n(I),k=function(t){return function(e){var n=""+t.getDate(),a=""+(t.getMonth()+1),i=""+t.getFullYear();console.log(typeof n),n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),console.log(i+"-"+a+"-"+n),fetch("https://api.tvmaze.com/schedule?country=US&date=".concat(i+"-"+a+"-"+n)).then(function(t){return t.json()}).then(function(t){e({type:"FETCH_DATA_SUCCESS",payload:t})}).catch(console.log)}},w=function(t){return function(e){e({type:"SET_LIST_VISIBILITY",payload:t})}},N=function(t){function e(){var t,n;Object(g.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(E.a)(this,(t=Object(S.a)(e)).call.apply(t,[this].concat(i)))).onChange=function(t){n.props.onSetDate(t),n.props.onSetVisibility(!0),n.props.onFetchData(n.props.date)},n}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"calendar-block",id:"calendar"},i.a.createElement("div",{className:"info-block"},i.a.createElement("img",{src:T.a,className:"info-block__img",alt:""}),i.a.createElement("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u0434\u0435\u043d\u044c.")),i.a.createElement(_.a,{onChange:this.onChange,value:this.props.date}))}}]),e}(a.Component),D=Object(O.a)(function(t){return{date:t.date}},function(t){return{onSetDate:function(e){t(function(t){return function(e){e({type:"SET_DATE",payload:t})}}(e))},onFetchData:function(e){t(k(e))},onSetVisibility:function(e){t(w(e))}}})(N),A=function(t){return function(e){e({type:"SET_CARDS_QUANTITY",payload:t})}},Q=function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"showMore",value:function(){return"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 ".concat(this.props.data.length-this.props.cardsQuantity," \u0441\u0435\u0440\u0438\u0430\u043b\u0430")}},{key:"showLess",value:function(){return"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"}},{key:"render",value:function(){var t=this;return i.a.createElement("button",{className:"setCardsQuantityBtn",onClick:function(){var e=t.props.cardsQuantity>3?3:t.props.data.length;t.props.onSetCardsQuantity(e)}},this.props.cardsQuantity>3?this.showLess():this.showMore())}}]),e}(a.Component),V=Object(O.a)(function(t){return{data:t.data,cardsQuantity:t.cardsQuantity}},function(t){return{onSetCardsQuantity:function(e){t(A(e))}}})(Q),z=function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return console.log(this.props.date.getDate()),i.a.createElement("div",{className:"list-date"},"".concat(this.props.date.getDate(),"\n            ").concat(this.props.monthNames[this.props.date.getMonth()],"\n            ").concat(this.props.date.getFullYear(),"\n            "))}}]),e}(a.Component),M=Object(O.a)(function(t){return{date:t.date,monthNames:t.monthNames}})(z),F=function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"componentWillMount",value:function(){this.props.onFetchData(this.props.date)}},{key:"isImage",value:function(t){return t.show.image?"".concat("medium"!==this.props.imageSize?t.show.image.original:t.show.image.medium):""}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement(M,null),i.a.createElement("div",{className:"card-container"},this.props.data.map(function(e,n){if(n<t.props.cardsQuantity)return i.a.createElement("div",{key:n,className:"card"},i.a.createElement("img",{src:"".concat(t.isImage(e)),onClick:function(){t.props.onSetImageSize(t.props.imageSize),t.props.onSetCardStyle(t.props.imageSize,t.props.data,e.id)},className:"card-img ".concat(e.imageSize),alt:""}),i.a.createElement("div",{className:"card-description"},i.a.createElement("div",null,i.a.createElement("div",{className:"card-name"},e.show.name),i.a.createElement("div",{className:"card-year"},e.airdate.substring(0,4))),i.a.createElement("div",{className:"card-season"},i.a.createElement("span",null,"\u0441\u0435\u0437\u043e\u043d: ",e.season),i.a.createElement("span",null,"\u044d\u043f\u0438\u0437\u043e\u0434: ","".concat(e.show._links.self.href.slice(-1))))))}),i.a.createElement(V,null)))}}]),e}(a.Component),B=Object(O.a)(function(t){return{data:t.data,date:t.date,cardsQuantity:t.cardsQuantity,imageSize:t.imageSize}},function(t){return{onFetchData:function(e){t(k(e))},onSetImageSize:function(e){t(function(t){return function(e){var n="original"===t?"medium":"original";console.log(n),e({type:"SET_IMAGE_SIZE",payload:n})}}(e))},onSetCardStyle:function(e,n,a){t(function(t,e,n){return function(a){var i="original"===t?"medium":"original";console.log(n),a({type:"SET_CARD_IMAGE_SIZE",payload:e.map(function(t){return t.id===n&&(t.imageSize=i),t})})}}(e,n,a))}}})(F),L=(n(32),function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("button",{className:"backBtn",onClick:function(){t.props.onSetVisibility(!1),t.props.onSetCardsQuantity(3)}})}}]),e}(a.Component)),Y=Object(O.a)(function(t){return{data:t.data}},function(t){return{onSetVisibility:function(e){t(w(e))},onSetCardsQuantity:function(e){t(A(e))}}})(L),R=function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return i.a.createElement("header",null,this.props.listVisibility?i.a.createElement(Y,null):null,i.a.createElement("h1",null,"Super film"))}}]),e}(a.Component),U=Object(O.a)(function(t){return{listVisibility:t.listVisibility}})(R),G=function(t){function e(){return Object(g.a)(this,e),Object(E.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(U,null),this.props.listVisibility?null:i.a.createElement(D,null),this.props.listVisibility?i.a.createElement(B,null):null)}}]),e}(a.Component),W=Object(c.b)(function(t){return{listVisibility:t.listVisibility}},function(t){return{}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(u.createStore)(b,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(l.a)));r.a.render(i.a.createElement(c.a,{store:Z},i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.70bab760.chunk.js.map