(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),i=(n(13),n(7)),u=n(5),d=n(3),o=n(0);var j=function(t){var e=t.addResult,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1],i=function(t){t.preventDefault(),e(a),s("")};return Object(o.jsxs)("form",{onSubmit:i,children:[Object(o.jsx)("input",{value:a,type:"text",onChange:function(t){s(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&i(t)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(o.jsx)("button",{children:"\u0412\u0432\u0435\u0441\u0442\u0438"})]})};var b=function(t){var e=t.result;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"result__text",children:e.result})})};var l=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),l=s[0],O=s[1],h=Object(c.useState)([]),x=Object(d.a)(h,2),f=x[0],v=x[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Test"})}),Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"grid__box grid__box_white",children:Object(o.jsx)(j,{addResult:function(t){if(/^[A-Za-z\u0410-\u044f\u0430-\u044f]*$/.test(t)){var e={id:Math.random().toString(36).substr(2,9),result:t};O([].concat(Object(u.a)(l),[e]))}else if(/^[\d]*$/.test(t)){var c={id:Math.random().toString(36).substr(2,9),result:t};v([].concat(Object(u.a)(f),[c]))}else if(/^[A-Za-z\u0410-\u044f\u0430-\u044f0-9]*$/.test(t)){var a={id:Math.random().toString(36).substr(2,9),result:t};r([].concat(Object(u.a)(n),[a]));var s,d=[],o=Object(i.a)(n);try{for(o.s();!(s=o.n()).done;){var j=s.value;-1===d.indexOf(j)&&d.push(j)}}catch(m){o.e(m)}finally{o.f()}for(var b=0,h=d;b<h.length;b++){var x,g=h[b],_=0,p=Object(i.a)(n);try{for(p.s();!(x=p.n()).done;)(j=x.value)===g&&_++}catch(m){p.e(m)}finally{p.f()}n.push("".concat(g," : ").concat(_))}}}})}),Object(o.jsx)("div",{className:"grid__box grid__box_red",children:l.map((function(t){return Object(o.jsx)(b,{result:t},t.id)}))}),Object(o.jsx)("div",{className:"grid__box grid__box_blue",children:f.map((function(t){return Object(o.jsx)(b,{result:t},t.id)}))}),Object(o.jsx)("div",{className:"grid__box grid__box_black",children:n.map((function(t){return Object(o.jsx)(b,{result:t},t.id)}))})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.8650b08e.chunk.js.map