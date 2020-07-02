import editor_display from './editor_display.js';
import imgcache from './imgcache.js';

export default{
    create()=>{
        if( !document.querySelector('#image-editor-modal') ){
            this.init();
        }
    },
    ui : `<div id="image-editor-body">
            <div id="image-editor-toolbox">
                <ul class="p00 m00 list-style-none">
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a id="image-editor-modal-save" class="display-block toolbox m5"> <i class="fas fa-check mr5"></i>Save </a>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a id="image-editor-modal-close" class="display-block toolbox m5 toolbox-dp-trigger"><i class="fas fa-times mr5"></i>Cancel</a>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a id="image-editor-modal-reset" class="display-block toolbox m5 toolbox-dp-trigger"><i class="fas fa-sync mr5"></i>Reset</a>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Adjust </a>
                        <div class="toolbox-sub bg-white box-shadow">
                            <ul class="p00 m00">
                                <li class="filter-slider">
                                    <label class="full-width display-block">Brightness <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="brightness" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Contrast <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="contrast" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Saturation <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="saturation" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Vibrance <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="vibrance" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Exposure <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="exposure" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Clip <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="clip" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Hue <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="hue" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Sepia <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sepia" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Noise <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="noise" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">Sharpen <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sharpen" />
                                </li>
                                <li class="filter-slider">
                                    <label class="full-width display-block">StackBlur <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="stackBlur" />
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Presets </a>
                        <div class="toolbox-sub bg-white box-shadow">
                            <ul class="p00 m00" id="image-editor-presets">
                                <li><a data-preset="vintage">Vintage</a></li>
                                <li><a data-preset="lomo">Lomo</a></li>
                                <li><a data-preset="clarity">Clarity</a></li>
                                <li><a data-preset="sinCity">Sin City</a></li>
                                <li><a data-preset="sunrise">Sunrise</a></li>
                                <li><a data-preset="crossProcess">Cross Process</a></li>
                                <li><a data-preset="orangePeel">Orange Peel</a></li>
                                <li><a data-preset="love">Love</a></li>
                                <li><a data-preset="grungy">Grungy</a></li>
                                <li><a data-preset="jarques">Jarques</a></li>
                                <li><a data-preset="pinhole">Pinhole</a></li>
                                <li><a data-preset="oldBoot">Old Boot</a></li>
                                <li><a data-preset="glowingSun">Glowing Sun</a></li>
                                <li><a data-preset="hazyDays">Hazy Days</a></li>
                                <li><a data-preset="herMajesty">Her Majesty</a></li>
                                <li><a data-preset="nostalgia">Nostalgia</a></li>
                                <li><a data-preset="hemingway">Hemingway</a></li>
                                <li><a data-preset="concentrate">concentrate</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a class="display-block toolbox m5"> <i class="fas fa-expand-arrows-alt mr5"></i>Resize </a>
                        <div class="toolbox-sub bg-white box-shadow">
                            <div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Width:</label><input type="number" class="mb00" id="resize-width" name="resize_width" /></div>
                            <div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Height:</label><input type="number" class="mb00" id="resize-height" name="resize_height" /></div>
                            <div class="col-xs-12 col-sm-12 mt8 pl3 pr3"><a class="btn btn-block btn-sm btn-filled mb8" id="resize-save">Resize</a></div>
                        </div>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a id="image-editor-crop" class="display-block toolbox m5"> <i class="fas fa-crop-alt mr5"></i>Crop </a>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li" style="display: none;">
                        <a id="image-editor-crop-now" class="bg-success display-block toolbox m5"> <i class="fas fa-check mr5"></i>Crop </a>
                    </li>
                    <li class="list-style-none align-left display-table toolbox-li">
                        <a id="image-editor-rotate" class="display-block toolbox m5"> <i class="fas fa-undo mr5"></i>Rotate </a>
                        <div class="toolbox-sub bg-white box-shadow">
                            <ul class="p00 m00" id="image-editor-rotate">
                                <li><a data-rotate="cw">Clock wise</a></li>
                                <li><a data-rotate="ccw">Counter clock wise</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="image-editor-canvas"><div id="canvas-holder" width=""></div></div>
        </div>;`,
    init(ops)=>{

        let el = document.createElement('div');

        let filters = '<div class="text-center"></div>';

        el.setAttribute('id','image-editor-modal');

        el.innerHTML = this.ui;

        document.querySelector('body').appendChild(el);

        this.events(ops);

    },
    events(ops)=>{
        let _this = this;

        // bind a close modal editor event
        document.querySelector('#image-editor-modal #image-editor-modal-close').addEventListener('click',function(e){

            e.preventDefault();

            document.querySelector('#image-editor-modal').style.display = 'none';
            document.querySelector('#image-editor-modal').classList.remove('active');

            document.querySelector('#image-editor-modal canvas').style.display = 'none';

            document.querySelector('body').style.overflowY = 'auto';

            _this.reset();

            if( ops.hasOwnPropertyu('on_close') && typeof ops.on_close == 'function' ){

                ops.on_close(document.querySelector('.image-editor.active'));

            }

        });

        // -- end close modal editor

        // when click save button

        document.querySelector('#image-editor-modal #image-editor-modal-save').addEventListener('click',function(e){

            e.preventDefault();

            let ref = document.querySelector('#image-editor-modal #canvas-holder canvas');
            let x = ( ref.width- global.getActiveEditorOptions().cropboxsave_width ) / 2;
            let y = ( ref.height - global.getActiveEditorOptions().cropboxsave_height ) / 2;

            Caman('#modal-canvas',function () {

                // width, height, x, y

                this.render(function(){

                    

                    var c_w = document.querySelector('#image-editor-modal canvas').offsetWidth;

                    var c_h = document.querySelector('#image-editor-modal canvas').offsetHeight;



                    document.querySelector('#image-editor-modal').style.display = 'none';
                    document.querySelector('#image-editor-modal').classList.remove('active');

                    if( document.querySelector('.image-editor.active canvas') != null ){
                        document.querySelector('.image-editor.active canvas').remove();
                    }

                    if( document.querySelector('.image-editor.active img') != null ){
                        document.querySelector('.image-editor.active img').remove();
                    }

                    let el = document.createElement('canvas');

                    document.querySelector('.image-editor.active .image-editor-preview').appendChild(el);

                    if( document.querySelector('.image-editor.active img') != null ){
                        document.querySelector('.image-editor.active .image-editor-preview').appendChild(el);
                    }

                    let destinationCanvas = document.querySelector('.image-editor.active canvas');
                    let destCtx = destinationCanvas.getContext('2d');

                    destCtx.canvas.width = c_w;
                    destCtx.canvas.height = c_h;
                    destCtx.drawImage(document.querySelector('#image-editor-modal canvas'), 0, 0);

                    // get the data base url
                    document.querySelector('.image-editor.active input.image_src').value = document.querySelector('.image-editor.active canvas').toDataURL();

                    if( ops.imgcache ){
                        imgcache.update();
                    }

                    // to be continue

                    if( ops.hasOwnProperty('on_save') && typeof ops.on_save == 'function' ){
                        ops.on_save(document.querySelector('.image-editor.active'));
                    }

                });

            });
            
            // set body to overflow auto
            document.querySelector('body').style.overflowY = 'auto';

        });

        // -- end click save button

        // on crop

        document.querySelector('#image-editor-modal #image-editor-crop').addEventListener('click',function(e){


            let el = document.createElement('div');

            el.setAttribute('id','crop-box');



            el.style.width = cropbox_width+'px';

            el.style.height = cropbox_height+'px';



            el.innerHTML = '<div class="resizer" style="position:absolute;top:-2px;left:-2px;border-top: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;top:-2px;right:-2px;border-top: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;left:-2px;border-bottom: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;right:-2px;border-bottom: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div>';

            document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder').appendChild(el);



            global.dragCropBox();

            global.resizeCropBox();



            this.closest('li').style.display = 'none';

            document.querySelector('#image-editor-modal #image-editor-crop-now').closest('li').style.display = 'block';

            

        });

        // -- end on crop



        document.querySelector('#image-editor-modal #image-editor-crop-now').addEventListener('click',function(e){

            global.cropCanvas();



            this.closest('li').style.display = 'none';

            document.querySelector('#image-editor-modal #image-editor-crop').closest('li').style.display = 'block';

        });

        // Update the current slider value (each time you drag the slider handle)

        document.querySelectorAll('.filter-slider').forEach(function(el){

            el.querySelector('.filter-range').textContent = el.querySelector('.filter-range-input').value;



            el.querySelector('.filter-range-input').addEventListener('input',function(){

                this.closest('.filter-slider').querySelector('.filter-range').textContent = this.value;

                global.applyFilter(this.getAttribute('data-filter'),this.value);

            });

        });

        // -- end update slider values



        // apply preset

        document.querySelectorAll('#image-editor-modal #image-editor-presets li a').forEach(function(el){

            el.addEventListener('click',function(e){

                e.preventDefault();

                global.applyPreset( el.getAttribute('data-preset'));

            });

            document.querySelectorAll('.toolbox-sub').forEach(function(el){
                el.style.display = 'none';
            });

        });

        // -- end apply preset



        // when rotate

        document.querySelectorAll('#image-editor-modal #image-editor-rotate li a').forEach(function(el){

            el.addEventListener('click',function(e){

                e.preventDefault();

                global.applyRotate( el.getAttribute('data-rotate'));

            });

            document.querySelectorAll('.toolbox-sub').forEach(function(el){
                el.style.display = 'none';
            });

            

        });

        // -- end rotate

        // reset

        document.querySelector('#image-editor-modal #image-editor-modal-reset').addEventListener('click',function(e){

            e.preventDefault();



            global.reset();

            if( on_reset ){

                on_reset(document.querySelector('.image-editor.active'));

            }

        });

        // -- end reset



        // resize

        document.querySelector('#image-editor-modal #resize-save').addEventListener('click',function(e){

            e.preventDefault();



            let w = this.closest('.toolbox-sub').querySelector('#resize-width').value;

            let h = this.closest('.toolbox-sub').querySelector('#resize-height').value;

            

            global.applyResize(w,h);

        });

        // -- end resize
    },
    reset()=>{

        if( document.querySelector('#clone-img') != null ){
            document.querySelector('#clone-img').remove();
        }

        if( document.querySelector('#image-editor-modal #crop-box') != null ){
            document.querySelector('#image-editor-modal #crop-box').remove();
        }

        document.querySelectorAll('.filter-range-input').forEach(function(el){
            el.value = 0;
        });


        document.querySelector('#image-editor-modal #image-editor-crop-now').closest('li').style.display = 'none';
        document.querySelector('#image-editor-modal #image-editor-crop').closest('li').style.display = 'block';
        editor_display.displayImageModal(document.querySelector('.image-editor.active input.file-browse'),false);

    }
}