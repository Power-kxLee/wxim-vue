<template>
	<footer class='layout_footer' >
		<mt-tabbar v-model="selected" >
		  <mt-tab-item id="xw_id">
		    <span slot='icon' class='iconfont icon-liaotianqipao'></span>
		    信微
		  </mt-tab-item>
		  <mt-tab-item id="address_bool">
		    <span slot='icon' class='iconfont icon-tongxunlu'></span>
		    通讯录
		  </mt-tab-item>
		  <mt-tab-item id="find">
		    <span slot='icon' class='iconfont icon-faxian'></span>
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="myde">
		    <span slot='icon' class='iconfont icon-tongxunlu1'></span>
		    我
		  </mt-tab-item>
		</mt-tabbar>
	</footer>
</template>
<script type="text/javascript">

	
	export default {
	  data() {
	    return {
	      selected: 'xw_id'
	    };
	  }
	};
</script>
<style type="text/css" >
	footer.layout_footer{
		height: 55px;
		color: #FCFCFC;
		position: fixed;
		bottom:0px;
		left: 0px;
		width: 100%;
	}
	footer.layout_footer a{
		color: #AAAAAA;
	}
	footer.layout_footer .mint-tab-item-icon > *{
		font-size: 22px
	}
	footer.layout_footer .mint-tab-item-label{
		font-size: 12px;
	}
	footer.layout_footer .mint-tabbar > .mint-tab-item.is-selected{
		color: #46C01B;
		background: none;
	}
</style>