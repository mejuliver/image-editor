parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T0VR":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}require("./style.scss"),window.cnimage_editor=function(i){var a=window.localStorage,o=!("object"!=t(i)||!i.hasOwnProperty("el"))&&document.querySelector(i.el),r=!("object"!=t(i)||!i.hasOwnProperty("auto_browse"))&&i.auto_browse,l="object"!=t(i)||!i.hasOwnProperty("image_editor")||i.image_editor,s=!("object"!=t(i)||!i.hasOwnProperty("on_browse")||"function"!=typeof i.on_browse)&&i.on_browse,n=!("object"!=t(i)||!i.hasOwnProperty("on_display")||"function"!=typeof i.on_display)&&i.on_display,c=!("object"!=t(i)||!i.hasOwnProperty("on_edit")||"function"!=typeof i.on_edit)&&i.on_edit,d=!("object"!=t(i)||!i.hasOwnProperty("on_delete")||"function"!=typeof i.on_delete)&&i.on_delete,m=!("object"!=t(i)||!i.hasOwnProperty("on_save")||"function"!=typeof i.on_save)&&i.on_save,u=!("object"!=t(i)||!i.hasOwnProperty("on_reset")||"function"!=typeof i.on_reset)&&i.on_reset,p=!("object"!=t(i)||!i.hasOwnProperty("on_close")||"function"!=typeof i.on_close)&&i.on_close,g=this,h="object"==t(i)&&i.hasOwnProperty("width")?i.width:300,y="object"==t(i)&&i.hasOwnProperty("height")?i.height:300,v="object"==t(i)&&i.hasOwnProperty("cropbox_width")?i.cropbox_width:150,b="object"==t(i)&&i.hasOwnProperty("cropbox_height")?i.cropbox_height:150,f="object"!=t(i)||!i.hasOwnProperty("cropbox_resize")||i.cropbox_resize,x="object"==t(i)&&f&&i.cropbox_resize.hasOwnProperty("minwidth")?i.cropbox_resize.minwidth:50,w="object"==t(i)&&f&&i.cropbox_resize.hasOwnProperty("minheight")?i.cropbox_resize.minheight:50,S="object"==t(i)&&f&&i.cropbox_resize.hasOwnProperty("maxwidth")?i.cropbox_resize.maxwidth:800,q="object"==t(i)&&f&&i.cropbox_resize.hasOwnProperty("maxheight")?i.cropbox_resize.maxheight:800,_="object"==t(i)&&"object"==t(i.autocrop)&&i.autocrop,k=_&&"object"==t(i.autocrop)&&i.autocrop.hasOwnProperty("width")?i.autocrop.width:50,E=_&&"object"==t(i.autocrop)&&i.autocrop.hasOwnProperty("height")?i.autocrop.height:50,$=!("object"!=t(i)||!i.hasOwnProperty("imgcache"))&&i.imgcache;$&&"undefined"==a&&(console.log("Web Storage is not supported! image caching mechanism disabled"),$=!1),!$&&a&&a.setItem("imgeditorcachedb",[]);if(o){var z,L,O=document.querySelector("body").getAttribute("data-imgeditor"),A={};if(O)(A=JSON.parse(O)).push((e(z={$el:i.el,$editor:o,$image_editor:l,$auto_browse:r,$on_browse:s,$on_display:n,$on_edit:c,$on_delete:d,$on_save:m,$on_reset:u,$on_close:p,$editor_width:h,$editor_height:y,$cropbox_width:v,$cropbox_height:b,$cropboxsave_width:k,$cropboxsave_height:E,$cropbox_resize:f,$cropbox_resize_minwidth:x,$cropbox_resize_minheight:w,$cropbox_resize_maxwidth:S,$cropbox_resize_maxheight:q,$autocrop:_},"$cropboxsave_width",k),e(z,"$cropboxsave_height",E),e(z,"$imgcache",$),e(z,"rawoptions",i),z));else A=[(L={$el:i.el,$editor:o,$image_editor:l,$auto_browse:r,$on_browse:s,$on_display:n,$on_edit:c,$on_delete:d,$on_save:m,$on_reset:u,$on_close:p,$editor_width:h,$editor_height:y,$cropbox_width:v,$cropbox_height:b,$cropboxsave_width:k,$cropboxsave_height:E,$cropbox_resize:f,$cropbox_resize_minwidth:x,$cropbox_resize_minheight:w,$cropbox_resize_maxwidth:S,$cropbox_resize_maxheight:q,$autocrop:_},e(L,"$cropboxsave_width",k),e(L,"$cropboxsave_height",E),e(L,"$imgcache",$),e(L,"rawoptions",i),L)];return document.querySelector("body").setAttribute("data-imgeditor",JSON.stringify(A)),this.init=function(){null==document.querySelector("#image-editor-modal")&&l&&this.initModalEditor(),o.style.width=h+"px",o.style.height=y+"px",o.classList.add("image-editor");var e=document.querySelectorAll(".image-editor").length-1;if(o.setAttribute("data-index",e),null==o.querySelector("input.filetype")&&null==o.querySelector("input.filename")&&null==o.querySelector("input.image-src")&&(o.innerHTML='<input type="hidden" name="image['+e+'][filetype]" class="filetype"><input type="hidden" name="image['+e+'][filename]" class="filename"><input type="hidden" name="image['+e+'][contents]" class="image_src"><input class="file-browse" type="file" accept="image/x-png,image/jpeg,image/png" style="display:none;"><div class="image-editor-tools"><a class="image-editor-browse flex-center radius-5"><i class="fas fa-plus"></i></a><a class="image-editor-edit flex-center radius-5"><i class="fas fa-magic"></i></a><a class="image-editor-delete flex-center radius-5"><i class="far fa-trash-alt"></i></a></div><div class="image-editor-preview"></div>'),o.querySelector(".image-editor-browse").style.display="flex",""!=o.querySelector("input.filetype")&&""!=o.querySelector("input.filename").value&&""!=o.querySelector("input.image_src").value?(o.querySelector(".image-editor-edit").style.display="flex",o.querySelector(".image-editor-delete").style.display="flex",document.querySelectorAll(".image-editor").forEach(function(e){e.classList.remove("active")}),o.classList.add("active"),this.displayImage(!1,o.querySelector("input.image_src").value)):(o.querySelector(".image-editor-edit").style.display="none",o.querySelector(".image-editor-delete").style.display="none"),o.querySelector(".image-editor-browse").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".image-editor.active");null!=t&&t.classList.remove("active"),this.closest(".image-editor").classList.add("active"),o.querySelector("input.file-browse").click()}),o.querySelector(".image-editor-edit").addEventListener("click",function(e){if(e.preventDefault(),null!=document.querySelector("#image-editor-modal")&&l){var t=document.querySelector(".image-editor.active");null!=t&&t.classList.remove("active"),this.closest(".image-editor").classList.add("active"),document.querySelector("#image-editor-modal").style.display="block",document.querySelector("#image-editor-modal").classList.add("active"),l?g.displayImageModal(document.querySelector(".image-editor.active input.image_src").value,!0):alert("Editor not found!")}else alert("Editor not found!");c&&c(document.querySelector(".image-editor.active"))}),o.querySelector(".image-editor-delete").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".image-editor.active");if(null!=t&&t.classList.remove("active"),this.closest(".image-editor").classList.add("active"),null!=this.closest(".image-editor").querySelector("canvas")&&this.closest(".image-editor").querySelector("canvas").remove(),null!=this.closest(".image-editor").querySelector("img")&&this.closest(".image-editor").querySelector("img").remove(),this.style.display="none",this.closest(".image-editor").querySelector(".image-editor-edit").style.display="none",this.closest(".image-editor").querySelector("input.file-browse").value="",this.closest(".image-editor").querySelector("input.image_src").value="",this.closest(".image-editor").querySelector("input.filename").value="",this.closest(".image-editor").querySelector("input.filetype").value="",$){var i=a.getItem("imgeditorcachedb");if(i){var r=(i=JSON.parse(i)).findIndex(function(e){return e.index==o.getAttribute("data-index")});-1!=r&&i.splice(r,1),a.setItem("imgeditorcachedb",JSON.stringify(i))}}d&&d(document.querySelector(".image-editor.active"))}),o.querySelector("input.file-browse").addEventListener("change",function(){if(s&&s(this.value),""!=this.value){var e=this.value.lastIndexOf(".")+1,t=this.value.substr(e,this.value.length).toLowerCase();"jpg"==t||"jpeg"==t||"png"==t?g.ValidateSize(this)&&g.displayImage(this):alert("Only jpg/jpeg and png files are allowed!")}}),$&&a.getItem("imgeditorcachedb")){var t=JSON.parse(a.getItem("imgeditorcachedb")),i=t.findIndex(function(e){return e.index==o.getAttribute("data-index")});document.querySelectorAll(".image-editor").forEach(function(e){e.classList.remove("active")}),o.classList.add("active"),-1!=i&&(g.displayImage(!1,t[i].dataurl),o.querySelector("input.filetype").value=t[i].filetype,o.querySelector("input.filename").value=t[i].filename,o.querySelector("input.image_src").value=t[i].dataurl)}r&&o.querySelector(".image-editor-browse").click()},this.cropCanvas=function(){null!=document.querySelector("#image-editor-modal #crop-box")&&Caman("#modal-canvas",function(){var e=document.querySelector("#image-editor-modal #crop-box").offsetWidth,t=document.querySelector("#image-editor-modal #crop-box").offsetHeight,i=document.querySelector("#image-editor-modal #crop-box").offsetTop,a=document.querySelector("#image-editor-modal #crop-box").offsetLeft;this.crop(e,t,a,i),this.render(function(){document.querySelector("#image-editor-modal canvas").setAttribute("id","modal-canvas"),document.querySelector("#image-editor-modal #crop-box").remove()})})},this.initModalEditor=function(){var e=document.createElement("div");e.setAttribute("id","image-editor-modal"),e.innerHTML='<div id="image-editor-body"><div id="image-editor-toolbox"> <ul class="p00 m00 list-style-none"> <li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-save" class="display-block toolbox m5"> <i class="fas fa-check mr5"></i>Save </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-close" class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-times mr5"></i>Cancel </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-reset" class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-sync mr5"></i>Reset </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Adjust </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00"> <li class="filter-slider"> <label class="full-width display-block">Brightness <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="brightness"> </li><li class="filter-slider"> <label class="full-width display-block">Contrast <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="contrast"> </li><li class="filter-slider"> <label class="full-width display-block">Saturation <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="saturation"> </li><li class="filter-slider"> <label class="full-width display-block">Vibrance <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="vibrance"> </li><li class="filter-slider"> <label class="full-width display-block">Exposure <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="exposure"> </li><li class="filter-slider"> <label class="full-width display-block">Clip <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="clip"> </li><li class="filter-slider"> <label class="full-width display-block">Hue <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="hue"> </li><li class="filter-slider"> <label class="full-width display-block">Sepia <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sepia"> </li><li class="filter-slider"> <label class="full-width display-block">Noise <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="noise"> </li><li class="filter-slider"> <label class="full-width display-block">Sharpen <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sharpen"> </li><li class="filter-slider"> <label class="full-width display-block">StackBlur <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="stackBlur"> </li></ul> </div></li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Presets </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00" id="image-editor-presets"> <li> <a data-preset="vintage">Vintage</a></li><li> <a data-preset="lomo">Lomo</a></li><li> <a data-preset="clarity">Clarity</a></li><li> <a data-preset="sinCity">Sin City</a></li><li> <a data-preset="sunrise">Sunrise</a></li><li> <a data-preset="crossProcess">Cross Process</a></li><li> <a data-preset="orangePeel">Orange Peel</a></li><li> <a data-preset="love">Love</a></li><li> <a data-preset="grungy">Grungy</a></li><li> <a data-preset="jarques">Jarques</a></li><li> <a data-preset="pinhole">Pinhole</a></li><li> <a data-preset="oldBoot">Old Boot</a></li><li> <a data-preset="glowingSun">Glowing Sun</a></li><li> <a data-preset="hazyDays">Hazy Days</a></li><li> <a data-preset="herMajesty">Her Majesty</a></li><li> <a data-preset="nostalgia">Nostalgia</a></li><li> <a data-preset="hemingway">Hemingway</a></li><li> <a data-preset="concentrate">concentrate</a></li></ul> </div></li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5"> <i class="fas fa-expand-arrows-alt mr5"></i>Resize </a> <div class="toolbox-sub bg-white box-shadow"><div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Width:</label><input type="number" class="mb00" id="resize-width" name="resize_width"></div><div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Height:</label><input type="number" class="mb00" id="resize-height" name="resize_height"></div><div class="col-xs-12 col-sm-12 mt8 pl3 pr3"><a class="btn btn-block btn-sm btn-filled mb8" id="resize-save">Resize</a></div></div></li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-crop" class="display-block toolbox m5"> <i class="fas fa-crop-alt mr5"></i>Crop </a> </li><li class="list-style-none align-left display-table toolbox-li" style="display:none"> <a id="image-editor-crop-now" class="bg-success display-block toolbox m5"> <i class="fas fa-check mr5"></i>Crop </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-rotate" class="display-block toolbox m5"> <i class="fas fa-undo mr5"></i>Rotate </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00" id="image-editor-rotate"> <li> <a data-rotate="cw">Clock wise</a></li><li> <a data-rotate="ccw">Counter clock wise</a></li></ul></div></li></ul></div><div id="image-editor-canvas"><div id="canvas-holder" width=""></div></div></div>',document.querySelector("body").appendChild(e),document.querySelector("#image-editor-modal #image-editor-modal-close").addEventListener("click",function(e){e.preventDefault(),document.querySelector("#image-editor-modal").style.display="none",document.querySelector("#image-editor-modal").classList.remove("active"),document.querySelector("#image-editor-modal canvas").style.display="none",document.querySelector("body").style.overflowY="auto",g.reset(),p&&p(document.querySelector(".image-editor.active"))}),document.querySelector("#image-editor-modal #image-editor-modal-save").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector("#image-editor-modal #canvas-holder canvas");t.width,g.getActiveEditorOptions().$cropboxsave_width,t.height,g.getActiveEditorOptions().$cropboxsave_height;Caman("#modal-canvas",function(){this.render(function(){var e=document.querySelector("#image-editor-modal canvas").offsetWidth,t=document.querySelector("#image-editor-modal canvas").offsetHeight;document.querySelector("#image-editor-modal").style.display="none",document.querySelector("#image-editor-modal").classList.remove("active"),null!=document.querySelector(".image-editor.active canvas")&&document.querySelector(".image-editor.active canvas").remove(),null!=document.querySelector(".image-editor.active img")&&document.querySelector(".image-editor.active img").remove();var i=document.createElement("canvas");document.querySelector(".image-editor.active .image-editor-preview").appendChild(i),null!=document.querySelector(".image-editor.active img")&&document.querySelector(".image-editor.active .image-editor-preview").appendChild(i);var r=document.querySelector(".image-editor.active canvas").getContext("2d");if(r.canvas.width=e,r.canvas.height=t,r.drawImage(document.querySelector("#image-editor-modal canvas"),0,0),document.querySelector(".image-editor.active input.image_src").value=document.querySelector(".image-editor.active canvas").toDataURL(),$)if(s=a.getItem("imgeditorcachedb")){var l=(s=JSON.parse(s)).findIndex(function(e){return e.index==o.getAttribute("data-index")});-1!=l?s[l].dataurl=document.querySelector(".image-editor.active input.image_src").value:s.push({index:document.querySelector(".image-editor.active").getAttribute("data-index"),dataurl:document.querySelector(".image-editor.active input.image_src").value,filetype:document.querySelector(".image-editor.active input.filetype").value,filename:document.querySelector(".image-editor.active input.filename").value}),a.setItem("imgeditorcachedb",JSON.stringify(s))}else{var s;(s=[]).push({index:document.querySelector(".image-editor.active").getAttribute("data-index"),dataurl:document.querySelector(".image-editor.active input.image_src").value,filetype:document.querySelector(".image-editor.active input.filetype").value,filename:document.querySelector(".image-editor.active input.filename").value}),a.setItem("imgeditorcachedb",JSON.stringify(s))}})}),document.querySelector("body").style.overflowY="auto",m&&m(document.querySelector(".image-editor.active"))}),document.querySelector("#image-editor-modal #image-editor-crop").addEventListener("click",function(e){var t=document.createElement("div");t.setAttribute("id","crop-box"),t.style.width=v+"px",t.style.height=b+"px",t.innerHTML='<div class="resizer" style="position:absolute;top:-2px;left:-2px;border-top: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;top:-2px;right:-2px;border-top: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;left:-2px;border-bottom: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;right:-2px;border-bottom: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div>',document.querySelector("#image-editor-modal #image-editor-canvas #canvas-holder").appendChild(t),g.dragCropBox(),g.resizeCropBox(),this.closest("li").style.display="none",document.querySelector("#image-editor-modal #image-editor-crop-now").closest("li").style.display="block"}),document.querySelector("#image-editor-modal #image-editor-crop-now").addEventListener("click",function(e){g.cropCanvas(),this.closest("li").style.display="none",document.querySelector("#image-editor-modal #image-editor-crop").closest("li").style.display="block"}),document.querySelectorAll(".filter-slider").forEach(function(e){e.querySelector(".filter-range").textContent=e.querySelector(".filter-range-input").value,e.querySelector(".filter-range-input").addEventListener("input",function(){this.closest(".filter-slider").querySelector(".filter-range").textContent=this.value,g.applyFilter(this.getAttribute("data-filter"),this.value)})}),document.querySelectorAll("#image-editor-modal #image-editor-presets li a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),g.applyPreset(e.getAttribute("data-preset"))}),document.querySelectorAll(".toolbox-sub").forEach(function(e){e.style.display="none"})}),document.querySelectorAll("#image-editor-modal #image-editor-rotate li a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),g.applyRotate(e.getAttribute("data-rotate"))}),document.querySelectorAll(".toolbox-sub").forEach(function(e){e.style.display="none"})}),document.querySelector("#image-editor-modal #image-editor-modal-reset").addEventListener("click",function(e){e.preventDefault(),g.reset(),u&&u(document.querySelector(".image-editor.active"))}),document.querySelector("#image-editor-modal #resize-save").addEventListener("click",function(e){e.preventDefault();var t=this.closest(".toolbox-sub").querySelector("#resize-width").value,i=this.closest(".toolbox-sub").querySelector("#resize-height").value;g.applyResize(t,i)})},this.dragCropBox=function(){var e,t,i,a,o=document.querySelector("#image-editor-modal #crop-box"),r=document.querySelector("#image-editor-modal #image-editor-canvas #canvas-holder"),l=!1,s=0,n=0;function c(e){"touchstart"===e.type?(i=e.touches[0].clientX-s,a=e.touches[0].clientY-n):(i=e.clientX-s,a=e.clientY-n),e.target===o&&(l=!0)}function d(o){i=e,a=t,l=!1}function m(r){var c,d,m;l&&(r.preventDefault(),"touchmove"===r.type?(e=r.touches[0].clientX-i,t=r.touches[0].clientY-a):(e=r.clientX-i,t=r.clientY-a),s=e,n=t,c=e,d=t,(m=o).style.top=d+"px",m.style.left=c+"px")}r.addEventListener("touchstart",c,!1),r.addEventListener("touchend",d,!1),r.addEventListener("touchmove",m,!1),r.addEventListener("mousedown",c,!1),r.addEventListener("mouseup",d,!1),r.addEventListener("mousemove",m,!1)},this.checkIfMobile=function(){return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))},this.ValidateSize=function(e){if(!(e.files[0].size/1024/1024>2))return!0;alert("File size exceeds 2 MB")},this.getActiveEditorOptions=function(){var e=JSON.parse(document.querySelector("body").getAttribute("data-imgeditor"));return e[e.findIndex(function(e){return e.$el=="#"+document.querySelector(".image-editor.active").getAttribute("id")})]},this.resizeCropBox=function(){var e,t,i,a,o=document.querySelectorAll("#image-editor-modal #image-editor-canvas #crop-box .resizer"),r=document.querySelector("#image-editor-modal #image-editor-canvas #crop-box");function l(o){g.getActiveEditorOptions().$cropbox_resize&&(g.checkIfMobile()?(e=o.touches[0].clientX,t=o.touches[0].clientY):(e=o.clientX,t=o.clientY),i=parseInt(document.defaultView.getComputedStyle(r).width,10),a=parseInt(document.defaultView.getComputedStyle(r).height,10),g.checkIfMobile()?(document.documentElement.addEventListener("touchmove",s,!1),document.documentElement.addEventListener("touchend",n,!1)):(document.documentElement.addEventListener("mousemove",s,!1),document.documentElement.addEventListener("mouseup",n,!1)),document.documentElement.addEventListener("touchmove",s,!1),document.documentElement.addEventListener("touchend",n,!1))}function s(o){g.checkIfMobile()?(i+o.touches[0].clientX-e<g.getActiveEditorOptions().$cropbox_resize_maxwidth&&i+o.touches[0].clientX-e>g.getActiveEditorOptions().$cropbox_resize_minwidth&&(r.style.width=i+o.touches[0].clientX-e+"px"),a+o.touches[0].clientY-t<g.getActiveEditorOptions().$cropbox_resize_maxheight&&a+o.touches[0].clientY-t>g.getActiveEditorOptions().$cropbox_resize_minheight&&(r.style.height=a+o.touches[0].clientY-t+"px")):(i+o.clientX-e<g.getActiveEditorOptions().$cropbox_resize_maxwidth&&i+o.clientX-e>g.getActiveEditorOptions().$cropbox_resize_minwidth&&(r.style.width=i+o.clientX-e+"px"),a+o.clientY-t<g.getActiveEditorOptions().$cropbox_resize_maxheight&&a+o.clientY-t>g.getActiveEditorOptions().$cropbox_resize_minheight&&(r.style.height=a+o.clientY-t+"px"))}function n(e){g.checkIfMobile()?(document.documentElement.removeEventListener("touchmove",s,!1),document.documentElement.removeEventListener("touchend",n,!1)):(document.documentElement.removeEventListener("mousemove",s,!1),document.documentElement.removeEventListener("mouseup",n,!1))}o.forEach(function(e){g.checkIfMobile()?e.addEventListener("touchstart",l,!1):e.addEventListener("mousedown",l,!1)})},this.displayImage=function(e,t){if(!(t="undefined"!=t&&t)&&"undefined"==e.files&&"undefined"==!e.files[0])return!1;null!=document.querySelector(".image-editor.active canvas")&&document.querySelector(".image-editor.active canvas").remove(),null!=document.querySelector(".image-editor.active img")&&document.querySelector(".image-editor.active img").remove();var i=document.createElement("canvas");i.style.display="none",document.querySelector(".image-editor.active .image-editor-preview").appendChild(i);var a=document.querySelector(".image-editor.active canvas").getContext("2d"),r=new Image;r.crossOrigin="anonymous",r.onload=function(){if(a.canvas.width=this.width,a.canvas.height=this.height,a.drawImage(r,0,0),o.setAttribute("data-imgw",r.width),o.setAttribute("data-imgh",r.height),!t){var s=(this.width-g.getActiveEditorOptions().$cropboxsave_width)/2,c=(this.height-g.getActiveEditorOptions().$cropboxsave_height)/2;Caman(".image-editor.active canvas",function(){_?this.crop(g.getActiveEditorOptions().$cropboxsave_width,g.getActiveEditorOptions().$cropboxsave_height,s,c):this.crop(r.width,r.height,0,0),this.render(function(){document.querySelector(".image-editor.active input.image_src").value=document.querySelector(".image-editor.active canvas").toDataURL(),document.querySelector(".image-editor.active input.filename").value=e.files[0].name,document.querySelector(".image-editor.active input.filetype").value=document.querySelector(".image-editor.active input.filename").value.split(".")[1]}),n&&n(document.querySelector(".image-editor.active"))})}null!=document.querySelector("#image-editor-modal")&&l?document.querySelector(".image-editor.active .image-editor-edit").style.display="flex":document.querySelector(".image-editor.active .image-editor-edit").style.display="none",document.querySelector(".image-editor.active .image-editor-delete").style.display="flex",i.style.display="block"},r.src=t||URL.createObjectURL(e.files[0])},this.displayImageModal=function(e,t){null!=document.querySelector("#image-editor-modal #image-editor-canvas canvas")&&document.querySelector("#image-editor-modal #image-editor-canvas canvas").remove();var i=document.createElement("canvas");i.setAttribute("id","modal-canvas"),document.querySelector("#image-editor-modal #image-editor-canvas #canvas-holder").appendChild(i),g.cloneImg(e,t);var a=document.querySelector("#image-editor-modal #image-editor-canvas canvas").getContext("2d"),o=new Image;o.crossOrigin="anonymous",t?(o.onload=g.drawImageScaled.bind(null,o,a),o.src=document.querySelector(".image-editor.active input.image_src").value):e.files&&e.files[0]&&(o.onload=g.drawImageScaled.bind(null,o,a),o.src=URL.createObjectURL(e.files[0]))},this.cloneImg=function(e,t){if(null!=document.querySelector("#clone-img")&&document.querySelector("#clone-img").remove(),t){var i=document.createElement("div");i.setAttribute("id","clone-img"),i.innerHTML='<img src="'+e+'">',document.querySelector("#image-editor-modal").classList.contains("active")&&(document.querySelector("body").style.overflowY="hidden"),document.querySelector("body").appendChild(i)}else{var a=new FileReader;a.onload=function(e){var t=document.createElement("div");t.setAttribute("id","clone-img"),t.innerHTML='<img src="'+e.target.result+'">',document.querySelector("#image-editor-modal").classList.contains("active")&&(document.querySelector("body").style.overflowY="hidden"),document.querySelector("body").appendChild(t)},a.readAsDataURL(e.files[0])}},this.drawImageScaled=function(e,t){t.canvas.width=document.querySelector("#clone-img img").offsetWidth,t.canvas.height=document.querySelector("#clone-img img").offsetHeight;var i=t.canvas,a=i.width/e.width,o=i.height/e.height,r=Math.min(a,o),l=(i.width-e.width*r)/2,s=(i.height-e.height*r)/2;t.clearRect(0,0,i.width,i.height),t.drawImage(e,0,0,e.width,e.height,l,s,e.width*r,e.height*r),document.querySelector("#image-editor-modal canvas").style.display="block"},this.reset=function(){null!=document.querySelector("#clone-img")&&document.querySelector("#clone-img").remove(),null!=document.querySelector("#image-editor-modal #crop-box")&&document.querySelector("#image-editor-modal #crop-box").remove(),document.querySelectorAll(".filter-range-input").forEach(function(e){e.value=0}),document.querySelector("#image-editor-modal #image-editor-crop-now").closest("li").style.display="none",document.querySelector("#image-editor-modal #image-editor-crop").closest("li").style.display="block",g.displayImageModal(document.querySelector(".image-editor.active input.file-browse"),!1)},this.applyResize=function(e,t){Caman("#image-editor-modal canvas",function(){this.resize({width:e,height:t}),this.render()})},this.applyFilter=function(e,t){var i=e.replace("filter-","");Caman("#image-editor-modal canvas",function(){switch(this.revert(!1),i){case"brightness":this.brightness(t).render();break;case"contrast":this.contrast(t).render();break;case"contrast":this.saturation(t).render();break;case"vibrance":this.contrast(t).render();break;case"exposure":this.exposure(t).render();break;case"clip":case"clip":this.clip(t).render();break;case"hue":this.hue(t).render();break;case"sepia":this.sepia(t).render();break;case"noise":this.noise(t).render();break;case"sharpen":this.vintage(t).render();break;case"stackBlur":this.stackBlur(t).render()}})},this.applyPreset=function(e){Caman("#image-editor-modal canvas",function(){switch(this.revert(!1),e){case"vintage":this.vintage().render();break;case"lomo":this.lomo().render();break;case"clarity":this.clarity().render();break;case"sinCity":this.sinCity().render();break;case"sunrise":this.sunrise().render();break;case"crossProcess":this.crossProcess().render();break;case"orangePeel":this.orangePeel().render();break;case"love":this.love().render();break;case"grungy":this.grungy().render();break;case"jarques":this.jarques().render();break;case"pinhole":this.pinhole().render();break;case"oldBoot":this.oldBoot().render();break;case"glowingSun":this.glowingSun().render();break;case"hazyDays":this.hazyDays().render();break;case"herMajesty":this.herMajesty().render();break;case"nostalgia":this.nostalgia().render();break;case"hemingway":case"hemingway":this.hemingway().render()}document.querySelectorAll(".toolbox-sub").forEach(function(e){e.style.display="none"})})},this.applyRotate=function(e){Caman("#image-editor-modal canvas",function(){switch(e){case"cw":this.rotate(90).render();break;case"ccw":this.rotate(-90).render()}document.querySelectorAll(".toolbox-sub").forEach(function(e){e.style.display="none"}),g.redisplayImageModal(this.toBase64())})},this.redisplayImageModal=function(e){null!=document.querySelector("#image-editor-modal #image-editor-canvas canvas")&&document.querySelector("#image-editor-modal #image-editor-canvas canvas").remove();var t=document.createElement("canvas");t.setAttribute("id","modal-canvas"),document.querySelector("#image-editor-modal #image-editor-canvas #canvas-holder").appendChild(t),g.cloneImg(e,!0);var i=document.querySelector("#image-editor-modal #image-editor-canvas canvas").getContext("2d"),a=new Image;a.crossOrigin="anonymous",a.onload=g.drawImageScaled.bind(null,a,i),a.src=e},this.isHidden=function(e){var t=window.getComputedStyle(e);return"none"===t.display||"hidden"===t.visibility},this.init(i)}console.log("Bind an element e.g. new cnimage_editor( {  el : <element> } )")};
},{"./style.scss":"T0VR"}]},{},["H99C"], null)
//# sourceMappingURL=src.2c5a2542.js.map