(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{c1a74d90eb723acb8190:function(e,t,n){"use strict";n.r(t),n.d(t,"SliderManagePage",function(){return $});var a,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("e95a63b25fb92ed15721"),l=n("a28fc3c963a1d4d1a2e5"),u=n("3aced5b508e7389026da"),f=n("ab4cb61bcb2dc161defb"),d=n("da010f21fea25912dd9e"),s=n.n(d),p=n("4a683f0a5e64e66a8eb9"),b=n.n(p),y=n("c233babf320cd068509e"),h=n.n(y),m=n("29df10ef1bee6d38fd67"),g=n.n(m),v=n("e799c547a20a503b338f"),O=n.n(v),w=n("e68eb59aa96fc65ab714"),j=n.n(w),P=n("e96e82762cfd5fe3a589"),S=n.n(P),k=n("ef7e771a06c8805c0be7"),_=n("adc20f99e57c573c589c"),A=n("d95b0cf107403b178365"),E=n("85c24bcc95646286e9a2"),M=n("6424f72d993ebdad42a7"),q=n("a8449c895147ff26204c"),C=n("33729f47d88984a8379f"),R=n("d733903be61208652859"),D=n("5932430beb0c05240602");function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,n,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=T(R.a,{},void 0,"Slider Manage"),Y=T(h.a,{}),$=function(e){function t(){var e,n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return a=this,o=(e=B(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==N(o)&&"function"!==typeof o?F(a):o,J(F(n),"handleAdd",function(){n.props.clearOne(),n.props.push("/admin/slider-manage/add")}),J(F(n),"handleEdit",function(e){n.props.push("/admin/slider-manage/edit/".concat(e))}),J(F(n),"handleQueryChange",function(e){e.persist(),n.props.setQueryValue({key:e.target.name,value:e.target.value})}),J(F(n),"handleSearch",function(){n.props.loadAllRequest(n.props.query)}),J(F(n),"handlePagination",function(e){n.props.loadAllRequest(e)}),n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.loadAllRequest(this.props.query)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props,a=n.all,o=a.data,i=a.page,c=a.size,l=a.totaldata,u=(n.query,{page:i,size:c,totaldata:l}),f=o.map(function(n){var a=n.slider_name,o=n.slider_key,i=n.images,c=n.added_at,l=n._id;return[a,o,i.length,s()(c).format("MMM Do YY"),T(r.a.Fragment,{},void 0,T(g.a,{id:"tooltip-top",title:"Edit Task",placement:"top",classes:{tooltip:t.tooltip}},void 0,T(O.a,{"aria-label":"Edit",className:t.tableActionButton,onClick:function(){return e.handleEdit(l)}},void 0,T(j.a,{className:"".concat(t.tableActionButtonIcon," ").concat(t.edit)}))))]});return r.a.createElement(r.a.Fragment,null,Q,T(D.a,{},void 0,T(k.a,{tableHead:["Slider Name","Slider Key","Images","Added at","Actions"],tableData:f,pagination:u,handlePagination:this.handlePagination}),T(S.a,{color:"primary","aria-label":"Add",className:t.fab,round:"true",onClick:this.handleAdd,elevation:0},void 0,Y)))}}])&&z(n.prototype,a),o&&z(n,o),t}(),x=Object(l.b)({all:Object(C.a)(),query:Object(C.d)()}),H=Object(i.connect)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){J(e,t,n[t])})}return e}({},q,{push:u.push})),K=Object(A.a)({key:"sliderManagePage",reducer:E.a}),V=Object(_.a)({key:"sliderManagePage",saga:M.a}),G=b()(function(e){return{button:{margin:e.spacing.unit},fab:{position:"absolute",bottom:3*e.spacing.unit,right:4*e.spacing.unit}}});t.default=Object(f.compose)(c.withRouter,G,K,V,H)($)}}]);