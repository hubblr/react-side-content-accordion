(this["webpackJsonpreact-side-content-accordion-example"]=this["webpackJsonpreact-side-content-accordion-example"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/cat-694730_640.efc4ec2d.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat-2934720_640.99ca1299.jpg"},function(e,t,a){e.exports=a.p+"static/media/kitty-2948404_640.461b4ded.jpg"},function(e,t,a){e.exports=a(17)},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(7);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),o=a(3),l=a.n(o),s=a(4),u=a.n(s),d=a(5),m=a.n(d),p=a(1),f=a.n(p),b=a(19);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var E=Object(n.createContext)({expandedSections:[],changeSectionStatus:function(){},sideContentMap:{},addSideContentForSection:function(){}}),j={};function g(e){var t=e.children,a=e.className,r=e.allowMultipleExpanded,i=e.allowAllCollapsed,o=Object(n.useState)([]),l=o[0],s=o[1],u=Object(n.useState)(j),d=u[0],m=u[1];j=v({},d);var p=Object(n.useCallback)((function(e,t){void 0===t&&(t=!1);var a=t?[]:l.slice();a.push(e),s(a)}),[l]),f=Object(n.useCallback)((function(e){s(l.filter((function(t){return t!==e})))}),[l]),b=Object(n.useCallback)((function(e){l.includes(e)?(i||l.length>1)&&f(e):p(e,!r)}),[p,i,r,l,f]),g=Object(n.useCallback)((function(e,t){d[t]!==e&&(j[t]=e,m(j))}),[d]);return c.a.createElement(E.Provider,{value:{expandedSections:l,changeSectionStatus:b,sideContentMap:d,addSideContentForSection:g}},c.a.createElement("div",{className:"accordion "+a},t))}g.propTypes={children:f.a.node.isRequired,className:f.a.string,allowMultipleExpanded:f.a.bool,allowAllCollapsed:f.a.bool},g.defaultProps={className:"",allowMultipleExpanded:!1,allowAllCollapsed:!1};var x=Object(n.createContext)({uuid:void 0,isExpanded:!1});function O(e){var t=e.children,a=e.className,r=e.initiallyExpanded,i=Object(n.useRef)(Object(b.a)()).current,o=Object(n.useRef)(!0),l=Object(n.useContext)(E),s=l.expandedSections,u=l.changeSectionStatus,d=s.includes(i)||o.current&&r;return Object(n.useEffect)((function(){r&&u(i),o.current=!1}),[]),c.a.createElement(x.Provider,{value:{isExpanded:d,uuid:i}},c.a.createElement("div",{className:"accordion-section "+a},t))}function h(e){var t=e.children,a=e.className,r=Object(n.useContext)(E).changeSectionStatus,i=Object(n.useContext)(x).uuid;return c.a.createElement("button",{className:"accordion-section-heading "+a,type:"button",onClick:function(){return r(i)}},t)}function S(e){var t,a,r,i=e.children,o=e.className,l=Object(n.useContext)(x).isExpanded,s=Object(n.useState)(l?null:"0px"),u=s[0],d=s[1],m=Object(n.useRef)(),p=m.current,f=Object(n.useRef)(null),v=(t=m,a=f,r=d,Object(n.useCallback)((function(){var e=t.current;e&&0!==e.clientHeight&&requestAnimationFrame((function(){var t=Object(b.a)();a.current=t,r(e.scrollHeight+"px"),requestAnimationFrame((function(){a.current===t&&r("0px")}))}))}),[t,r,a])),E=function(e,t,a){return Object(n.useCallback)((function(){var n=e.current;if(n&&0===n.clientHeight){var c=Object(b.a)();t.current=c,a(n.scrollHeight+"px"),n.addEventListener("transitionend",(function e(r){n.removeEventListener("transitionend",e),"transitionend"===r.type&&t.current===c&&a(null)}))}}),[e,a,t])}(m,f,d);return Object(n.useEffect)((function(){p&&(l?E():v())}),[v,p,E,l]),c.a.createElement("div",{style:{height:u},ref:m,className:"accordion-section-text-content "+o},i)}function C(e){var t=e.className,a=Object(n.useContext)(E),r=a.expandedSections,i=a.sideContentMap,o=[];return Object.entries(i).forEach((function(e){var t=e[0],a=e[1],n=r.includes(t)?c.a.createElement("div",{key:t,className:"accordion-side-content active"},a):c.a.createElement("div",{key:t,className:"accordion-side-content inactive"},a);o.push(n)})),c.a.createElement("div",{className:"accordion-side-content-container "+t},o)}function y(e){var t=e.children,a=Object(n.useContext)(E).addSideContentForSection,c=Object(n.useContext)(x).uuid;return Object(n.useEffect)((function(){a(t,c)}),[t]),null}O.propTypes={children:f.a.node.isRequired,className:f.a.string,initiallyExpanded:f.a.bool},O.defaultProps={className:"",initiallyExpanded:!1},h.propTypes={children:f.a.node.isRequired,className:f.a.string},h.defaultProps={className:""},S.propTypes={children:f.a.node.isRequired,className:f.a.string},S.defaultProps={className:""},C.propTypes={className:f.a.string},C.defaultProps={className:""},y.propTypes={children:f.a.node.isRequired};a(16);var N=()=>c.a.createElement(g,null,c.a.createElement("div",{className:"accordion-sections"},c.a.createElement(O,{initiallyExpanded:!0},c.a.createElement(h,null,"Section 1"),c.a.createElement(S,null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),c.a.createElement(y,null,c.a.createElement("img",{src:l.a,alt:"cat"}))),c.a.createElement(O,null,c.a.createElement(h,null,"Section 2"),c.a.createElement(S,null,"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),c.a.createElement(y,null,c.a.createElement("img",{src:u.a,alt:"cat"}))),c.a.createElement(O,null,c.a.createElement(h,null,"Section 3"),c.a.createElement(S,null,"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),c.a.createElement(y,null,c.a.createElement("img",{src:m.a,alt:"cat"})))),c.a.createElement(C,null));i.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.07f762e2.chunk.js.map