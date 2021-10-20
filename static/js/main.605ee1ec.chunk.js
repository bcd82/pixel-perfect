(this["webpackJsonpmap-markers"]=this["webpackJsonpmap-markers"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(6),s=n.n(o),c=n(2),i=n.n(c),l=n(16),u=n(5),d=n(11),p=n(12),h=n(14),j=n(13),m={saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var f={getMarkers:function(){return v.apply(this,arguments)},addMarker:function(e){return b.apply(this,arguments)}},k="marker",g=[{_id:"m-01",pos:{lat:32.0486561005543,lng:34.798752569068206},name:"Tel-Aviv"},{_id:"m-02",pos:{lat:40.74876952476417,lng:-73.98592039347554},name:"Manhatten"},{_id:"m-03",pos:{lat:32.18442913243363,lng:34.86967681253942},name:"R'aanana"}];function v(){return(v=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching markers"),t=m.loadFromStorage(k),n=(null===t||void 0===t?void 0:t.length)?t:g,(null===t||void 0===t?void 0:t.length)||m.saveToStorage(k,n),e.abrupt("return",Promise.resolve(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=m.loadFromStorage(k)).push(t),m.saveToStorage(k,n),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(8),x=n(0),M=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={center:{},isInfoWindowOn:!1,infoText:""},e.onMarkerClicked=function(t){e.setState({isInfoWindowOn:!0,infoText:t.name,center:t.position})},e.onInfoWindowClose=function(){e.setState({isInfoWindowOn:!1})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.markers,r=t.onAddMarker,a=t.center;return Object(x.jsxs)(O.Map,{google:this.props.google,zoom:12,initialCenter:n[0].pos,onClick:r,center:a,children:[n.length&&n.map((function(t,n){return Object(x.jsx)(O.Marker,{position:t.pos,name:t.name,onClick:e.onMarkerClicked},n)})),Object(x.jsx)(O.InfoWindow,{onClose:this.onInfoWindowClose,position:this.state.center,visible:this.state.isInfoWindowOn,children:Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:this.state.infoText})})})]})}}]),n}(r.Component),w=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyBGe5qrsySPJjOhvi5C5mlAvGe2ywF8ZQg"})(M),S=n(17);function y(e){var t=e.onAddMarker,n=e.clickedPos,a=e.onToggleModal,o=Object(r.useState)(""),s=Object(S.a)(o,2),c=s[0],i=s[1];return Object(x.jsx)("div",{className:"overlay fade-in",onClick:a,children:Object(x.jsxs)("section",{className:"form",onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("div",{className:"closer",onClick:a}),Object(x.jsx)("h4",{children:"Add a marker"}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(x.jsx)("input",{className:"input",type:"text",value:c,onChange:function(e){return i(e.target.value)},placeholder:"Name the marker",autoFocus:!0}),Object(x.jsx)("button",{children:"Add Marker"})]}),Object(x.jsxs)("p",{children:["lat: ",n.lat.toFixed(2)," |  lng: ",n.lng.toFixed(2)," "]}),Object(x.jsx)("p",{children:"  "})]})})}var C=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={markers:[],isModalShown:!1,clickedPos:{},center:{}},e.onAddMarker=function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return r={name:n,pos:e.state.clickedPos},t.prev=3,t.next=6,f.addMarker(r);case 6:e.setState({markers:[].concat(Object(l.a)(e.state.markers),[r])}),e.onToggleModal(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("error adding marker",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e.onToggleModal=function(t,n,r){if(e.state.isModalShown)return e.setState({isModalShown:!1});var a={lat:r.latLng.lat(),lng:r.latLng.lng()};e.setState({clickedPos:a,isModalShown:!0})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadMarkers();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadMarkers",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getMarkers();case 3:t=e.sent,this.setState({markers:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error getting markers: ",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.markers,r=t.clickedPos,a=t.isModalShown,o=t.center;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("section",{className:"map",children:Object(x.jsx)(w,{markers:n,onAddMarker:this.onToggleModal,center:o})}),"my markers :",Object(x.jsx)("div",{className:"marker-list",children:n.map((function(t){return Object(x.jsx)("item",{className:"place",onClick:function(){return e.setState({center:t.pos})},children:Object(x.jsx)("p",{children:t.name})})}))}),a&&Object(x.jsx)(y,{onAddMarker:this.onAddMarker,clickedPos:r,onToggleModal:this.onToggleModal})]})}}]),n}(r.Component);function A(){return Object(x.jsxs)("section",{className:"map-app",children:[Object(x.jsx)("header",{className:"app-header",children:Object(x.jsx)("p",{children:"MapMarkers"})}),Object(x.jsx)(C,{}),Object(x.jsx)("footer",{className:"app-footer"})]})}n(42);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.605ee1ec.chunk.js.map