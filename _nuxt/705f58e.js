(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{230:function(t,e,o){"use strict";(function(t){o(31),o(23);var n=o(250),r=o(252),c=o(299);e.a={components:{SceneOptions:c.a},data:function(){return{model:{},objects:[],activeMesh:{},isLoaded:!1,showWireframes:!0,autoRotate:!0}},computed:{editorCanvas:function(){return document.getElementById("editor-canvas")}},created:function(){this.$nuxt.$on("MESH_UPDATE",this.updateMesh)},destroyed:function(){this.$nuxt.$off("MESH_UPDATE",this.updateMesh)},mounted:function(){var t=this.autoRotate;this.scene=Object(r.a)({rootEl:this.$refs.container,autoRotate:t}),this.loadModel()},methods:{updateMesh:function(){var t;null!==(t=this.activeMesh)&&void 0!==t&&t.material&&(this.activeMesh.material.map.needsUpdate=!0)},setActiveMesh:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.mesh,r=e.forward,c=void 0===r||r,l=e.onModelLoad,h=void 0!==l&&l,d=new t.Texture(this.editorCanvas);(o||(o=Object(n.a)({arr:this.objects,current:this.activeMesh,pName:"name",forward:c})))&&(o.material=new t.MeshStandardMaterial({map:d}),this.activeMesh=o,this.updateMesh(),h||this.$nuxt.$emit("ACTIVE_MESH_CHANGED"))},createWireframe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.mesh,n=e.color,r=void 0===n?0:n,c=e.linewidth,l=void 0===c?4:c,h=new t.LineBasicMaterial({color:r,linewidth:l}),d=new t.EdgesGeometry(o.geometry),v=new t.LineSegments(d,h);v.name="_wireframe",v.renderOrder=1,o.add(v)},toggleWireframes:function(){var e=this;this.showWireframes=!this.showWireframes,this.model.traverse((function(o){o instanceof t.Mesh&&(o.getObjectByName("_wireframe").visible=e.showWireframes)}))},loadModel:function(){var e=this;this.isLoaded=!1,this.scene.loadModel("model/scene.gltf",(function(o){o.name="headphones",o.traverse((function(o){o instanceof t.Mesh&&(o.material.map=null,e.createWireframe({mesh:o}),e.objects.push(o))})),e.setActiveMesh({mesh:e.objects[2],onModelLoad:!0}),e.model=o,e.scene.add(o),setTimeout((function(){e.isLoaded=!0}),200)}))},toggleRotate:function(){this.autoRotate=!this.autoRotate,this.scene.autoRotate=this.autoRotate},startAllOver:function(){this.objects=[],this.scene.remove("headphones"),this.loadModel()}}}}).call(this,o(229))},240:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("218ac969",content,!0,{sourceMap:!1})},243:function(t,e,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("e1da0b02",content,!0,{sourceMap:!1})},250:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));o(251);var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.arr,o=void 0===e?[]:e,n=t.current,r=void 0===n?{}:n,c=t.forward,l=void 0===c||c,h=t.pName,d=void 0===h?"name":h,v=o.findIndex((function(i){return i[d]===r[d]})),f=o.length-1,m=function(){return l?v===f?0:v+1:0===v?f:v-1};return o[m()]}},252:function(t,e,o){"use strict";(function(t){var n=o(9),r=o(10),c=o(253),l=o(254),h=function(){function e(t){var o=t.rootEl,r=t.autoRotate;Object(n.a)(this,e),this.canvas=document.createElement("canvas"),this.root=o,this.width=o.clientWidth,this.height=o.clientHeight,this.background=15658734,this.autoRotate=r,this.init(),this.update(),this.bindEvents()}return Object(r.a)(e,[{key:"init",value:function(){this.initScene(),this.initLights(),this.initCamera(),this.initRenderer(),this.initControls(),this.root.appendChild(this.canvas)}},{key:"initScene",value:function(){this.scene=new t.Scene}},{key:"initLights",value:function(){var e=new t.AmbientLight(16777215,.9),o=new t.PointLight(13421772,.1,10),n=new t.DirectionalLight(16777215,.5);this.scene.add(e),this.scene.add(o),this.scene.add(n)}},{key:"initCamera",value:function(){var e=this.width/this.height;this.camera=new t.PerspectiveCamera(45,e,1,1e3),this.camera.position.z=15,this.camera.aspect=e,this.camera.updateProjectionMatrix()}},{key:"initRenderer",value:function(){this.renderer=new t.WebGLRenderer({antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(this.background,1),this.canvas=this.renderer.domElement}},{key:"initControls",value:function(){this.controls=new l.a(this.camera,this.canvas),this.controls.minPolarAngle=1*Math.PI/6,this.controls.maxPolarAngle=3*Math.PI/4,this.controls.smooth=!0,this.controls.smoothspeed=.95,this.controls.autoRotateSpeed=2,this.controls.maxDistance=20,this.controls.minDistance=12,this.controls.update()}},{key:"render",value:function(){this.camera.lookAt(this.scene.position),this.renderer.render(this.scene,this.camera)}},{key:"update",value:function(){var t=this;requestAnimationFrame((function(){return t.update()})),this.controls.autoRotate=this.autoRotate,this.controls.update(),this.render()}},{key:"loadModel",value:function(t,e){var o=this;this.loader=new c.a,this.loader.load(t,(function(t){"function"==typeof e&&e(t.scene),o.scene.add(t.scene)}))}},{key:"add",value:function(t){this.scene.add(t)}},{key:"remove",value:function(t){var object=this.scene.getObjectByName(t);object&&this.scene.remove(object)}},{key:"onResize",value:function(){this.width=this.root.clientWidth,this.height=this.root.clientHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}},{key:"bindEvents",value:function(){var t=this;window.addEventListener("resize",(function(){return t.onResize()}))}}]),e}();e.a=function(t){return new h(t)}}).call(this,o(229))},268:function(t,e,o){"use strict";o(240)},269:function(t,e,o){var n=o(26)(!1);n.push([t.i,".editor-container[data-v-387e2826]{height:100%;padding-bottom:0}.editor-container .row[data-v-387e2826]{height:50%;margin:0}",""]),t.exports=n},297:function(t,e,o){"use strict";o(243)},298:function(t,e,o){var n=o(26)(!1);n.push([t.i,".content-row[data-v-dcd50c90]{height:100%}.content-row>.col[data-v-dcd50c90]{height:100%;position:relative;padding-top:0}.content-row>.col>.v-card[data-v-dcd50c90]{height:100%;border-radius:5px!important;overflow:hidden}",""]),t.exports=n},299:function(t,e,o){"use strict";var n={props:["autoRotate","showWireframes"]},r=o(54),c=o(112),l=o.n(c),h=o(246),d=o(239),v=o(308),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"options"},[o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("toggleRotate")}}},n),[o("v-icon",[t._v("mdi-axis-z-rotate-counterclockwise")])],1)]}}])},[t._v(" "),o("span",[t._v("Turn "+t._s(t.autoRotate?"off":"on")+" auto-rotate")])]),t._v(" "),o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ml-2",attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("setActiveMesh",{forward:!1})}}},n),[o("v-icon",[t._v("mdi-ray-end-arrow")])],1)]}}])},[t._v(" "),o("span",[t._v("Previous headphone area")])]),t._v(" "),o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ml-1 mr-2",attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("setActiveMesh")}}},n),[o("v-icon",[t._v("mdi-ray-start-arrow")])],1)]}}])},[t._v(" "),o("span",[t._v("Next headphone area")])]),t._v(" "),o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("toggleWireframes")}}},n),[o("v-icon",[t._v(t._s(t.showWireframes?"mdi-eye-off":"mdi-eye"))])],1)]}}])},[t._v(" "),o("span",[t._v(t._s(t.showWireframes?" Hide":" Show")+" wireframes")])]),t._v(" "),o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ml-auto",attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("startAllOver")}}},n),[o("v-icon",[t._v("mdi-cached")])],1)]}}])},[t._v(" "),o("span",[t._v("Start all over")])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:h.a,VIcon:d.a,VTooltip:v.a})},306:function(t,e,o){"use strict";o.r(e);var n=o(230).a,r=o(54),c=o(112),l=o.n(c),h=o(302),d=o(238),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"container",staticClass:"scene coverdiv"},[o("SceneOptions",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],attrs:{autoRotate:t.autoRotate,showWireframes:t.showWireframes},on:{startAllOver:t.startAllOver,toggleRotate:t.toggleRotate,setActiveMesh:t.setActiveMesh,toggleWireframes:t.toggleWireframes}}),t._v(" "),o("v-overlay",{attrs:{value:!t.isLoaded,absolute:"",color:"grey lighten-2"}},[o("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)}),[],!1,null,null,null),v=component.exports;l()(component,{VOverlay:h.a,VProgressCircular:d.a});var f=o(246),m=o(239),w=o(308),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"options"},[o("v-tooltip",{attrs:{top:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ml-auto",attrs:{"x-small":"",fab:""},on:{click:function(e){return t.$emit("applyColor")}}},n),[o("v-icon",[t._v("mdi-rotate-right")])],1)]}}])},[t._v(" "),o("span",[t._v("Change color")])])],1)}),[],!1,null,null,null),C=_.exports;l()(_,{VBtn:f.a,VIcon:m.a,VTooltip:w.a});var y=["#553EEA","#1C1E1F","#D6A989","#8D93E8","#555195","#001916","#4D33EF","#AC2739","#F6F5F5","#5FAE7A","#73697B","#1B1B23","#D67339","#E08C07","#067D8C","#DAD29A","#82925B","#A3624D","#4F3334","#4C272E","#EB6940","#DD4C1F","#D77167","#A02326","#ECFA1C"],k={components:{EditorOptions:C},data:function(){return{backgroundColor:"#2A2A2A"}},created:function(){this.$nuxt.$on("ACTIVE_MESH_CHANGED",this.applyColor),window.addEventListener("resize",this.onResize)},destroyed:function(){this.$nuxt.$off("ACTIVE_MESH_CHANGED",this.applyColor),window.removeEventListener("resize",this.onResize)},mounted:function(){this.container=this.$refs["canvas-container"],this.ctx=this.$refs.canvas.getContext("2d"),this.onResize(),this.applyColor({restore:!0}),this.triggerUpdate()},methods:{triggerUpdate:function(){this.$nuxt.$emit("MESH_UPDATE")},applyColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.color,o=t.restore,n=void 0!==o&&o;if(this.ctx){if(this.ctx.clearRect(0,0,this.container.offsetWidth,this.container.offsetHeight),!n){var r=y[Math.floor(Math.random()*y.length)];this.backgroundColor=null!=e?e:r}this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.container.offsetWidth,this.container.offsetHeight),this.triggerUpdate()}},onResize:function(){var t=[this.container.offsetWidth,this.container.offsetHeight],e=t[0],o=t[1];this.ctx.canvas.width=e,this.ctx.canvas.height=o,this.applyColor({restore:!0})}}},E=k,x=(o(268),o(303)),M=o(304),A=o(307),R=o(309),S=o(305),$=Object(r.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"editor-container"},[o("v-row",{ref:"canvas-container"},[o("v-card",{staticClass:"coverdiv"},[o("canvas",{ref:"canvas",attrs:{id:"editor-canvas"}})])],1),t._v(" "),o("v-row",{staticClass:"mt-2"},[o("v-col",{staticClass:"px-0"},[o("v-color-picker",{staticClass:"mx-auto",attrs:{mode:"hexa","hide-mode-switch":""},on:{input:function(e){return t.applyColor({color:e})}},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}})],1),t._v(" "),o("EditorOptions",{on:{applyColor:t.applyColor}})],1)],1)}),[],!1,null,"387e2826",null),O=$.exports;l()($,{VCard:x.a,VCol:M.a,VColorPicker:A.a,VContainer:R.a,VRow:S.a});var W={components:{Scene:v,Editor:O}},D=(o(297),Object(r.a)(W,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[o("v-row",{staticClass:"content-row",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"7"}},[o("v-card",{attrs:{color:"grey lighten-3",outlined:"",tile:""}},[o("Scene")],1)],1),t._v(" "),o("v-col",{attrs:{cols:"5"}},[o("v-card",{attrs:{color:"grey lighten-3",outlined:"",tile:""}},[o("Editor")],1)],1)],1)],1)}),[],!1,null,"dcd50c90",null));e.default=D.exports;l()(D,{VCard:x.a,VCol:M.a,VContainer:R.a,VRow:S.a})}}]);