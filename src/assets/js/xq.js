;(function(global, factory){

	factory(global);

})(typeof window !== "undefined" ? window : this , function(window,noGlobal){

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnnProperty;

var 
	xQuery  = function(selector,context){
		return new xQuery.fn.init( selector, context );
	},

	rootxQuery,

	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
xQuery.fn = xQuery.prototype = {
	
	
}

xQuery.extend = xQuery.fn.extend  = function(){
	var option,src,copy,copyIsArray,clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length , //参数的长度
		deep = false //判断是否需要深拷贝
		
	//如果第一个参数是布尔值
	if(typeof target === 'boolean'){
		deep = target; //赋值deep
		target = arguments[1] || {}; //更改成参数的第二位
		i++; 
	}

	//第一个参数不是对象就变成对象
	if(typeof target !== "object" ){
		target = {}
	}

	//判断如果传一个参数的情况下
	if(length === i){
		target = this; //如果是xQuery.extend调用 那么this就是xQuery , 如果是 xQuery.fn.extend 那么就是 xQuery.fn
		--i;
	}
	
	for(; i < length ; i++){

		option = arguments[i]; //如果是xQuery.extent(obj1,obj2,obj3,obj4) , 那么得到的结果是 obj2,obj3,obj4

		if( option != null){
			//循环每一个对象
			for (key in option){
				//循环obj2...obj4 的key值, 匹配obj1里面的key值,如果不存在 那么就是null
				/**
				 * 列子: 
				 * obj1 = { a : 1 , b :2}
				 * obj2 = { b:3 : c:4}
				 * 那么src得出的结果就是 key = b的时候  src = 2; 
				 */
				src = target[key]; 
				copy = option[key];

				
				if(src == copy){
					//如果第一个值 等于后面的 值 那么就跳出单次循环
					continue;
				}
				//需要深拷贝 并 存在参数 并 参数是对象 或者是 数组
				if(deep && copy && ( xQuery.isPlainObject(copy) || (copyIsArray = xQuery.isArray(copy)) ) ){

					//如果初始参数后的参数 是 数组 也就是$.extend(obj1,obj2,obj3) . obj2 obj3 是数组
					if(copyIsArray){
						copyIsArray = false;
						//参数(obj1)匹配后面参数key值获得的name值,判断这个name值是不是数组,是就直接使用 否者就变成数组
						clone = src && xQuery.isArray(src) ? src : [];
					}else{
						//同理,只不过这段是匹配对象
						clone = src && xQuery.isPlainObject(src) ? src : {};

						//递归循环
						target[key] = xQuery.extend(deep , clone , copy)

					}

				}else if(copy !== undefined){ //存在参数
					//循环下来key值相同,直接把参数(obj2..obj4)的key值匹配到obj1里面 不管存在还是不存在 直接覆盖 .往后叠加
					
					target[key] = copy;
				}


			}
		}
		//console.log("结束一个循环",option)
	}
	//console.log(target)
	return target;
};
var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

xQuery.extend({
	htmlPrefilter:function(html){
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},
	isArray : Array.isArray,
	//判断是不是window对象
	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},
	//判断是不是object
	isPlainObject : function(obj){
		var key;
		//console.log("xQuery.type( obj )",xQuery.type( obj ),obj)
		//如果获取的name值 不是对象  || 值为window 直接退出函数 
		if ( xQuery.type( obj ) !== "object" || obj.nodeType || xQuery.isWindow( obj ) ) {
			return false;
		}
		//constructor属性指向构造函数,对象也有构造函数 判断这个对象是否存在构造函数,不是就直接返回false
		console.log(!hasOwn.call( obj, "constructor" ))
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},
	//判断是什么类型
	type: function( obj ) {
		
		//传入的name值 是空的话 直接返回个字符串出去
		if ( obj == null ) {
			return obj + "";
		}
		//console.log("class2type[ toString.call( obj ) ]",Object.prototype.toString.call(obj) )
		//如果name值是 对象 或者是函数 那就返回类型 object , 如果不是 那就该是什么就返回什么
		/**
		 * 不解 : class2type[ toString.call( obj ) ] 怎么样输出都是undefined
		 * 我理解正确的应该是 Object.prototype.toString.call(obj) 
		 */
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},
	/**
	 * [merge 两个数组合并成一个数组]
	 * @param  {[Array]} first  [用来合并的数组]
	 * @param  {[Array]} second [第二个数组合并到第一个]
	 * @return {[Array]}        [返回集合]
	 */
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,	
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}
		first.length = i;

		return first;
	},
	contains : function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	}
});

var rootxQuery ,
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	init = xQuery.fn.init = function(selector, context, root){
		//match 做节点存储,是数组
		var match , elem;
		// 处理: $(null), $(""),$(undefinde),$(false)
		if(!selector){
			return false;
		}
		

		var root = root || rootxQuery

		//处理字符串
		if(typeof selector === "string"){

			//处理 $("<div>2222</div>"); 如果第一个字符串是 < 和最后一个字符串是> 并长度是4个以上.那么直接通过match赋值 方便后面计算
			if(selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >3){
				match = [null,selector,null];
			}else{
				//直接对传入的字符串用正则验证 
				match = rquickExpr.exec(selector); //$("#dd") => ["#dd",undefined,"dd"]
			}
			console.log(match)
			//匹配match的html 或者 是id
			if(match && (match[1] || !context)){
				
				//处理 : $(html)
				if(match[1]){
					//判断context 是否存在xQuery的属性里面 如果是就直接获取出来
					context = context instanceof xQuery ? context[0] : context;

					xQuery.merge( this, xQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

				}

			}


		//判断是否节点元素 处理: $(document) $(document.getElementById("xxx")) 等
		}else if(selector.nodeType){

		}
	};


xQuery.parseHTML = function(data , context , keepScripts){
	//data不存在 或者 data不是字符串 直接返回null
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	//如果第二个参数是布尔值 那么第三个参数等于第二个参数 第二个参数设为false
	//xxx,false,true/false
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	//其实context主要都是document 就是为了防止没有传过来 那么就设置成document
	context = context || document;

	//rsingleTag 正则表达式 /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ 匹配一个独立的标签
	//比如说 没有任何属性或者节点的字符串 也就是这个字符串是 <html></html> <div></div>之类的会通过验证
	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];
	console.log("parsed",parsed)
	//如果是一个独立的标签 直接创建一个子的节点
	if ( parsed ) {
		//如果因为context没有传参 那么这里的context就是document,document创建一个节点
		//创建一个dom节点 返回了出去 
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	//
	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		xQuery( scripts ).remove();
	}

	return xQuery.merge( [], parsed.childNodes );
}
var rhtml = /<|&#?\w+;/;
var rtagName = ( /<([\w:-]+)/ );
// 关闭这些标签来支持XHTMl
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};


function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(), //创建一个空的文档 存储在内存当中,减少dom操作 提高性能
		nodes = [],
		i = 0,
		l = elems.length; //数组的长度

	//根据传的数组长度进行循环
	for ( ; i < l; i++ ) {
		elem = elems[ i ]; //取得数组内的每一个值

		//存在值 或者 这个值 等于 0
		if ( elem || elem === 0 ) {

			//如果是一个对象
			if ( xQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				xQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			//rhtml验证 这段字符串是否是html,如果不是 那么直接转文本节点
			} else if ( !rhtml.test( elem ) ) {
				//把文本节点添加到数组里面
				nodes.push( context.createTextNode( elem ) );

			// 将html字符串转换成dom节点
			} else {
				//tmp为null的时候 那么空文档fragment 就添加一个子节点 该节点为新创建的div元素 
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				//  首先匹配html字符串的前面 比如<div></div> 那么搜索匹配出 ["<div",div]
				// 	如果搜索匹配失败,那么就知道设置长度为2的空数组. (为什么是2?) 因为正则就算成功 也是捕捉一次 所以2
				// 	最后得到匹配出来的节点类型,也就是nodeName . 然后统统转成小写
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();

				//验证得到的节点是否存在 必须忽略的名单里面, 如果存在, 那么就直接获取相对应的字符串,
				//否则不存在的话 就等于设置好的默认值
				wrap = wrapMap[ tag ] || wrapMap._default;

				//经过上面验证了是不是特别的标签, 比如传过来的是 $("<tr></tr>") 那么就会匹配
				//wrapMap 最终合成 "<table><tbody><tr></tr></tbody></table>"  , 否则就直接处理传过来的
				//就可以了,最终通过html的方法 添加到临时节点里面
				tmp.innerHTML = wrap[ 1 ] + xQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// 层级,包了多少层父元素
				j = wrap[ 0 ];
				//如果层级是1层以上的 那么直接获取最后一个元素 
				while ( j-- ) {

					tmp = tmp.lastChild;
				}
				//合并文本数组和元素数组 [1,2] [2,1] = > [1,2,2,1];
				xQuery.merge( nodes, tmp.childNodes );
				//临时节点保存为 空文档的第一个节点
				tmp = fragment.firstChild;

				//把第一个元素的文本 设置为null
				tmp.textContent = "";
			}
		}
	}

	// 删除空文档的文本和所有节点
	fragment.textContent = "";
	i = 0;
	//如果有2个节点以上
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && xQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = xQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && xQuery.nodeName( context, tag ) ?
		xQuery.merge( [ context ], ret ) :
		ret;
}
xQuery.fn.init.prototype = xQuery.prototype;




window.xQuery = window.$ = xQuery;





return xQuery;
});
//console.log( $.extend({a:2},{b:4,d:{dd:344}}))
$("<div class='text'><p>hah<p></div><span></span>")
	//$("12312312")