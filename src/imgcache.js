/*

	IMAGE CACHE
	if imgcache option was set to true, activate image caching

*/
export default{
	storage_name : 'urimageeditor',
	create()=>{
		if( window.localStorage ){
			this.storage.create();
		}else{
			console.log('error: image cache was activated but browser storage is not supported');
			return;
		}
	},
	storage : {
		create()=>{
			if( !window.localStorage.getItem('urimageeditor') ){
				window.localStorage.setItem('urimageeditor',[]);
			}
		}
		get : window.localStorage.getItem(this.name),
		destroy :  window.localStorage.deleteItem(this.name),
		set(v)=>{
			window.localStorage.setItem(this.name,v);
		},
		find : (item)=>{
			let q = this.get.find(function(i){
	            return i.index == item
	        });

	        return ( typeof q != 'undefined' ? q : false );	        
		},
		findIndex : (item)=>{
			return this.get.findIndex(function(i){
	            return i.index == item
	        });
		}
	},
	update(el,v)=>{
		let item = this.storage.findIndex( el.getAttribute('data-index') );
		let data = this.storage.get;
        if( item ){
            data[item] = el.querySelector('input.image_src').value;
        }else{
            data.push({
                index : el.getAttribute('data-index'),
                dataurl : el.querySelector('input.image_src').value,
                filetype : el.querySelector('input.filetype').value,
                filename : el.querySelector('input.filename').value
            });
        }

        this.storage.set(JSON.stringify(data));

        return true;
	}
}