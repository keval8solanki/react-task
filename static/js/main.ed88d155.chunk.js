(this["webpackJsonpreact-task"]=this["webpackJsonpreact-task"]||[]).push([[0],{41:function(t,e,n){t.exports=n.p+"static/media/spinner.63132f79.svg"},42:function(t,e,n){t.exports=n.p+"static/media/sort.fbe4a16e.svg"},43:function(t,e,n){t.exports=n(70)},48:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),o=(n(48),n(1)),l=n(2),i=n(13),b=n(11);function s(){var t=Object(o.a)(["\n\tborder-style: none;\n\tmargin: 0px 5px;\n\tpadding: 4px 10px;\n\tcolor: white;\n\tborder-radius: 6px;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:disabled {\n\t\topacity: 0.3;\n\t}\n"]);return s=function(){return t},t}function f(){var t=Object(o.a)(["\n\t","\n\tmargin-right: 5px;\n"]);return f=function(){return t},t}function d(){var t=Object(o.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]);return d=function(){return t},t}function m(){var t=Object(o.a)(["\n\tborder: 0;\n\tfont-size: 0.9em;\n\ttext-align: left;\n\tpadding: 6px 10px;\n\tborder-bottom: 1px solid black;\n\tcolor: white;\n\tcursor: pointer;\n"]);return m=function(){return t},t}function p(){var t=Object(o.a)(["\n\tmax-width: 1140px;\n\tmargin: 0 auto;\n"]);return p=function(){return t},t}function v(){var t=Object(o.a)(["\n\tborder: 0;\n\tfont-size: 0.9em;\n\n\ttext-align: left;\n\tpadding: 6px 10px;\n\n\tborder-bottom: 1px solid #00000021;\n"]);return v=function(){return t},t}function O(){var t=Object(o.a)(["\n\tcursor: pointer;\n\ttransition: all 0.5s;\n\t&:hover {\n\t\tbackground-color: #eef0f7;\n\t}\n"]);return O=function(){return t},t}function j(){var t=Object(o.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n"]);return j=function(){return t},t}var E=Object(l.a)(j()),g=l.b.tr(O()),h=l.b.td(v()),x=l.b.div(p()),y=l.b.th(m()),k=l.b.div(d()),C=l.b.p(f(),E),w=Object(l.a)(s()),S=n(71);function R(){var t=Object(o.a)(["\n\t",";\n\tbackground-color: #e91e63;\n"]);return R=function(){return t},t}function I(){var t=Object(o.a)(["\n\t",";\n\tbackground-color: #3f51b5;\n"]);return I=function(){return t},t}function _(){var t=Object(o.a)([""]);return _=function(){return t},t}function V(){var t=Object(o.a)(["\n\t",";\n\tbackground-color: #3f51b5;\n"]);return V=function(){return t},t}function A(){var t=Object(o.a)(["\n\tpadding: 5px 10px;\n\n\tborder-style: none;\n\tborder-bottom: 2px solid black;\n\ttransition: all 0.5s;\n\t&:focus {\n\t\tborder-bottom: 2px solid green;\n\t\toutline: none;\n\t}\n"]);return A=function(){return t},t}function T(){var t=Object(o.a)(["\n\twidth: fit-content;\n\tdisplay: flex;\n\tmargin: 20px 0px;\n"]);return T=function(){return t},t}var D=function(t){var e=t.params,n=Object(b.b)(),c=e.searchCriteria,u=e.setSearchCriteria,o=e.setSearchValue,l=Object(a.useState)(""),s=Object(i.a)(l,2),f=s[0],d=s[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),v=p[0],O=p[1],j=c&&c.map((function(t){return r.a.createElement(U,{key:Object(S.a)()},t.toUpperCase())}));return r.a.createElement(z,{onSubmit:function(t){t.preventDefault(),n(u(v)),n(o(f)),d("")}},r.a.createElement(N,{value:v,onChange:function(t){return O(t.target.value)}},j),r.a.createElement(L,{type:"text",value:f,placeholder:"Type Here...",onChange:function(t){return d(t.target.value)}}),r.a.createElement(F,{type:"submit"},"Search"),r.a.createElement(H,{onClick:function(){n(u("id")),n(o("")),d(""),O("id")}},"Clear"))},z=l.b.form(T()),L=l.b.input(A()),N=l.b.select(V(),w),U=l.b.option(_()),F=l.b.button(I(),w),H=l.b.button(R(),w);function M(){var t=Object(o.a)([""]);return M=function(){return t},t}function B(){var t=Object(o.a)([""]);return B=function(){return t},t}function J(){var t=Object(o.a)(["\n\tborder: 0;\n\twidth: 100%;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\t/* box-shadow: 2px 3px 20px 0px #00000017; */\n\tborder-collapse: collapse;\n\toverflow: scroll;\n"]);return J=function(){return t},t}function W(){var t=Object(o.a)(["\n\tbackground-color: #3f51b5;\n"]);return W=function(){return t},t}var G=function(t){var e=t.headings,n=t.children;return r.a.createElement($,null,r.a.createElement(K,null,r.a.createElement(P,null,e)),r.a.createElement(q,null,n))},P=l.b.tr(W()),$=l.b.table(J()),q=l.b.tbody(B()),K=l.b.thead(M()),Q="https://keval-upworks-api.herokuapp.com",X=n(19),Y=n.n(X),Z="SAVE",tt="SEARCH_CRITERIA",et="SEARCH_VALUE",nt="SORT_ORDER",at="SORT_CRITERIA",rt="PAGE",ct="LIMIT",ut="COUNT",ot=function(t){return{type:tt,payload:t}},lt=function(t){return{type:et,payload:t}},it=function(t){return{type:nt,payload:t}},bt=function(t){return{type:rt,payload:t}},st=n(17);function ft(){var t=Object(o.a)(["\n\tpadding-right: 10px;\n\tfont-weight: bold;\n"]);return ft=function(){return t},t}function dt(){var t=Object(o.a)([""]);return dt=function(){return t},t}function mt(){var t=Object(o.a)(["\n\t",";\n"]);return mt=function(){return t},t}function pt(){var t=Object(o.a)([""]);return pt=function(){return t},t}function vt(){var t=Object(o.a)([""]);return vt=function(){return t},t}function Ot(){var t=Object(o.a)(["\n\t",";\n"]);return Ot=function(){return t},t}function jt(){var t=Object(o.a)(["\n\tdisplay: flex;\n"]);return jt=function(){return t},t}function Et(){var t=Object(o.a)(["\n\t",";\n\tbackground-color: #3f51b5;\n\tborder-radius: 6px;\n"]);return Et=function(){return t},t}function gt(){var t=Object(o.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\tmargin: 20px 0px;\n"]);return gt=function(){return t},t}function ht(){var t=Object(o.a)(["\n\tborder-radius: 6px;\n\tpadding: 4px 10px;\n\t&:focus {\n\t\toutline: none;\n\t}\n\tborder: 1px solid #3f51b5;\n"]);return ht=function(){return t},t}var xt=function(){var t=Object(b.b)(),e=Object(b.c)((function(t){return t.tableReducer})),n=e.page,c=e.limit,u=e.tableData,o=e.dataCount,l=Math.ceil(o/c),s=Object(a.useState)(!0),f=Object(i.a)(s,2),d=f[0],m=f[1],p=Object(a.useState)(!1),v=Object(i.a)(p,2),O=v[0],j=v[1];Object(a.useEffect)((function(){n<2&&m(!0),n===l&&j(!0),c>o&&t(bt(1))}),[n,u,l,o,t,c]);var E=[];if(o)for(var g=0;g<l;g++)E.push(r.a.createElement(Rt,{key:Object(S.a)()},g+1));return r.a.createElement(kt,null,r.a.createElement(It,null,r.a.createElement(At,{htmlFor:"size-select"},"Size"),r.a.createElement(_t,{value:c,name:"size-select",onChange:function(e){var n;t((n=e.target.value,{type:ct,payload:n})),j(!1),m(!1)}},r.a.createElement(Vt,null,"5"),r.a.createElement(Vt,null,"10"),r.a.createElement(Vt,null,"25"),r.a.createElement(Vt,null,"50"),r.a.createElement(Vt,null,"100"))),r.a.createElement(wt,null,r.a.createElement(Ct,{disabled:d,onClick:function(){t(bt(n-1)),j(!1)}},"<"),r.a.createElement(St,{value:n,onChange:function(e){m(!1),j(!1),t(bt(e.target.value))}},E),r.a.createElement(Ct,{disabled:O,onClick:function(){m(!1),t(bt(n+1))}},">")))},yt=Object(l.a)(ht()),kt=l.b.div(gt()),Ct=l.b.button(Et(),w),wt=l.b.div(jt()),St=l.b.select(Ot(),yt),Rt=l.b.option(vt()),It=l.b.div(pt()),_t=l.b.select(mt(),yt),Vt=l.b.option(dt()),At=l.b.label(ft()),Tt=n(41),Dt=n.n(Tt);function zt(){var t=Object(o.a)(["\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return zt=function(){return t},t}var Lt=function(){return r.a.createElement(Nt,null,r.a.createElement("img",{src:Dt.a,alt:"spinner"}))},Nt=l.b.div(zt()),Ut=n(42),Ft=n.n(Ut);function Ht(){var t=Object(o.a)(["\n\t",";\n\tlist-style: none;\n"]);return Ht=function(){return t},t}function Mt(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]);return Mt=function(){return t},t}function Bt(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return Bt=function(){return t},t}function Jt(){var t=Object(o.a)([""]);return Jt=function(){return t},t}var Wt=function(){var t=Object(b.b)(),e=Object(b.c)((function(t){return t.tableReducer})),n=e.tableData,c=e.page,u=e.limit,o=e.searchCriteria,l=e.searchValue,i=e.sortCriteria,s=e.sortOrder,f=e.headings,d="".concat(Q,"/shipments?").concat(o.toLowerCase(),"_like=").concat(l,"&_page=").concat(c,"&_limit=").concat(u,"&_sort=").concat(i.toLowerCase(),"&_order=").concat(s);console.log(d),Object(a.useEffect)((function(){Y.a.get(d).then((function(e){var n=e.data,a=e.headers["x-total-count"];t({type:ut,payload:a}),t(function(t){return{type:Z,payload:t}}(n))})).catch((function(t){return console.log(t)}))}),[c,u,i,o,l,s,i,d,t]);var m=function(e){t(i===e?it("asc"===s?"desc":"asc"):{type:at,payload:e})},p=f&&f.map((function(t){return r.a.createElement(y,{onClick:function(){return m(t)},key:Object(S.a)()},r.a.createElement(k,null,r.a.createElement(C,null,t.toUpperCase()),r.a.createElement("img",{src:Ft.a,alt:"Sort Icon"})))})),v=n&&n.map((function(t){return r.a.createElement(g,{key:Object(S.a)()},r.a.createElement(h,null,t.id),r.a.createElement(h,null,t.name),r.a.createElement(h,null,r.a.createElement(st.b,{to:"cargo/".concat(t.id)},"View")),r.a.createElement(h,null,t.mode),r.a.createElement(h,null,t.type),r.a.createElement(h,null,t.destination),r.a.createElement(h,null,t.origin),r.a.createElement(h,null,r.a.createElement(qt,null,t.services.map((function(t){var e=t.type;return r.a.createElement("li",{key:Object(S.a)()},e)})))),r.a.createElement(h,null,t.total),r.a.createElement(h,null,t.status),r.a.createElement(h,null,t.userId))})),O={setSearchCriteria:ot,setSearchValue:lt,searchCriteria:f};return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(Gt,null,r.a.createElement(x,null,r.a.createElement(Pt,null,r.a.createElement("h1",null,"Shipments"),r.a.createElement(D,{params:O})),r.a.createElement(G,{headings:p},v),r.a.createElement($t,null,r.a.createElement(xt,null)))):r.a.createElement(Lt,null))},Gt=l.b.div(Jt()),Pt=l.b.div(Bt()),$t=l.b.div(Mt()),qt=l.b.ul(Ht(),E),Kt=n(4);function Qt(){var t=Object(o.a)(["\n\ttext-align: left;\n"]);return Qt=function(){return t},t}var Xt=function(t){var e=Object(a.useState)(),n=Object(i.a)(e,2),c=n[0],u=n[1],o=t.match.params.id;Object(a.useEffect)((function(){Y.a.get("".concat(Q,"/shipments/").concat(o)).then((function(t){var e=t.data;return u(e)})).catch((function(t){return console.log(t)}))}),[o]);var l=c&&c.cargo,b=c&&Object.keys(c.cargo[0]),s=c&&b.map((function(t){return r.a.createElement(y,{key:Object(S.a)()},t)})),f=c&&l.map((function(t){return r.a.createElement(g,{key:Object(S.a)()},r.a.createElement(h,null,t.type),r.a.createElement(h,null,t.description),r.a.createElement(h,null,t.volume))}));return r.a.createElement(r.a.Fragment,null,c?r.a.createElement("div",null,r.a.createElement(x,null,r.a.createElement(Yt,null,r.a.createElement(st.b,{to:"/"},o)," ",">"," Cargo"),r.a.createElement(G,{headings:s},f))):r.a.createElement(Lt,null))},Yt=l.b.h1(Qt());function Zt(){var t=Object(o.a)(["\n\ttext-align: center;\n"]);return Zt=function(){return t},t}var te=function(){return r.a.createElement(ee,null,r.a.createElement(st.a,null,r.a.createElement(Kt.c,null,r.a.createElement(Kt.a,{path:"/",exact:!0,component:Wt}),r.a.createElement(Kt.a,{path:"/cargo/:id",component:Xt}))))},ee=l.b.div(Zt());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(16),ae=n(5),re={page:1,limit:10,sortCriteria:"id",sortOrder:"asc",searchCriteria:"id",searchValue:"",tableData:null,dataCount:null,headings:null},ce=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case Z:var r=Object.keys(a[0]);return Object(ae.a)(Object(ae.a)({},t),{},{tableData:a,headings:r});case et:return Object(ae.a)(Object(ae.a)({},t),{},{searchValue:a});case tt:return Object(ae.a)(Object(ae.a)({},t),{},{searchCriteria:a});case at:return Object(ae.a)(Object(ae.a)({},t),{},{sortCriteria:a});case nt:return Object(ae.a)(Object(ae.a)({},t),{},{sortOrder:a});case rt:return Object(ae.a)(Object(ae.a)({},t),{},{page:Number(a)});case ct:return Object(ae.a)(Object(ae.a)({},t),{},{limit:Number(a)});case ut:return Object(ae.a)(Object(ae.a)({},t),{},{dataCount:Number(a)});default:return t}},ue=Object(ne.b)({tableReducer:ce}),oe=Object(ne.c)(ue);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,{store:oe},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);