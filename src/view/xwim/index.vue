<template>
    <div class='message-newbox many_conetnt'>
 
        <div class="page-tab-container">

            <mt-spinner v-if='loading' class='inloading' :type="0" color="#46c01b"></mt-spinner>
            
            <div v-if='!loading && !!list' class="page-loadmore">
    		    <div class="page-loadmore-wrapper" ref="wrapper" >
    		    	<div class="msg-room-list" @touchstart="showutil" v-for="(item,i) in list">
                
        	    		<router-link :to="'/inside/xwmore/'+item.title+'/'+item.number"  >

                            <span v-if='item.differ' class='unread_msg'>{{item.differ}}</span>
        		    		<div class='msg-rl-warp flex-def'>
        		    			<div class='msg-room-img'>
        		    				<img src="../../assets/image/huaji1.jpg">
        		    			</div>
        						<article class='msg-room-article'>
        							<header>{{item.title }}</header>
        							<section v-if='item.roomnewmsg.length > 0'>{{item.roomnewmsg[0].username}} : {{item.roomnewmsg[0].message}}</section>
        						</article>
        						<div v-if='item.roomnewmsg.length > 0' class='msg-room-date'>
        							{{item.roomnewmsg[0].date |timestamp }}
        						</div>
        		    		</div>
        	    		</router-link>
    		        </div>
    		    </div>
    	    </div>
            <div v-if='!loading && list.length < 1' class='nolist'>
                还没有房间.快点来创建一个吧
            </div>
        </div>
    </div>
</template>

<script>

    import '../../assets/css/page/message/index.css';
    const storage = window.localStorage;

    export default  {
      	data() {
    	    return {
            
                MY_URL:this.$store.state.MY_URL,
                active: 'tab-container1',
                loading:true,
                list: [], //所有房间信息集合
                room_length : null, //房间未读信息条目
                socketIo : null ,
                allLoaded: false,
                bottomStatus: '',
                wrapperHeight: 0,
                username : storage.getItem("USER_NAME"),
                useremail : storage.getItem("USER_EMAIL")

    	    };
      	},
        methods:{
            showutil (e){
            },
            //动态添加calss
            checkedtab (cur){
                if(this.active == cur){
                    return 'table-cur';
                }else{
                    return '';
                }
            },

        },
        filters : {
            timestamp (value){
                return timestampFormat(value);
            }
        },
        watch:{
          //监听房间变化
          list : function(val, oldVal){
            //console.log("监听list变化")

              let in_room_msg = [];
              for(let key in val){
                in_room_msg.push({
                  room_number:val[key].number,
                  room_record_length : 0 //默认传0 当表不存在的就会创建
                })
              }

              
              //查询房间已读取的信息
              this.$ajax({
                method : "post",
                data : {useremail: this.useremail , in_room_msg},
                url : this.MY_URL+"/im/getroomlength"
              }).then(d =>{
                //console.log("获取到房间未读的信息",d.data)
                this.room_length = d.data;

              }).catch(err =>{});

              return val;   
          },
          /**
           * [room_length 初始化计算未读信息的总数]
           * @return {[type]}        [description]
           */
          room_length : function( val ,oldVal){
              let room_array = val.room_array;
              let room_list = this.list;
              //循环房间列表
              for(let elem in this.list){
                for( let i in  room_array){
                  if(room_array[i].room_number && room_array[i].room_number == this.list[elem].number){

                    this.list[elem].differ = this.list[elem].room_length - room_array[i].room_record_length  ;
                    break;
                  } 
                }
             
              }
          }
            
        },
        sockets:{
          connect() {
            console.log('socket connected')
          },
          /**
           * [all_infor 实时获取房间的聊天信息]
           * @param  {[object]} info [聊天信息数据]
           * @return {[type]}      [description]
           */
          all_infor(info) {
            let roomnewmsg = this.list[info.number].roomnewmsg || [];
            info.if_ready = 0;
            this.list[info.number].differ += 1
            if(!this.list[info.number].roomnewmsg[0]){
                this.list[info.number].roomnewmsg.push({
                  message:"",
                  date : 0,
                  useremail:""
                });
            }
            this.list[info.number].roomnewmsg[0]["message"] = info.message;
            this.list[info.number].roomnewmsg[0]["date"] = info.date;
            this.list[info.number].roomnewmsg[0]["useremail"] = info.useremail;
            this.list[info.number].roomnewmsg[0]["username"] = info.username;
          },
          /**
           * [newRoom 监听是否有新的房间创建,如果有就添加到列表]
           * @param  {[type]} room_data [房间的数据]
           * @return {[type]}           [description]
           */
          newRoom (room_data){
            this.list = this.list instanceof Array ? {} : this.list;
            this.$set(this.list,room_data.number ,room_data);

            var roomArray = {
                number:room_data.number,
                username :this.username,
                useremail : room_data.creator
            }
          }
        },
     	created() {

          /**
           * [获取所有的房间列表]
           */
          this.$ajax({
            method :"post",
            data : {},
            url :this.MY_URL+"/getroomim"
          }).then( d =>{
            //console.log("查询房间成功",d)
            //返回正确数据
            this.loading = false;
           

            if(d.data.code == 401){ 
              //console.log("所有房间信息",d)
                //房间数据添加到list上进行视图渲染
                for (let item in d.data.imlistarry){
                  d.data.imlistarry[item].differ  = d.data.imlistarry[item].differ || 0
                }
                this.list = d.data.imlistarry;
              
          	}
          });

        },
        mounted() {          

        }
    };


    const timestampFormat = ( timestamp ) => {

        const zeroize = ( num ) => {

            return (String(num).length == 1 ? '0' : '') + num;
        }
     
        const curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
        const timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
     
        const curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
        const tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
     
        const Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
        const H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
     
        if ( timestampDiff < 60 ) { // 一分钟以内
            return "刚刚";
        } else if( timestampDiff < 3600 ) { // 一小时前之内
            return Math.floor( timestampDiff / 60 ) + "分钟前";
        } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
            return '今天' + zeroize(H) + ':' + zeroize(i);
        } else {
            const newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
            if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
                return '昨天' + zeroize(H) + ':' + zeroize(i);
            } else if ( curDate.getFullYear() == Y ) {
                return  zeroize(m) + '月' + zeroize(d) + '日 ' ;
            } else {
                return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
            }
        }
    }
</script>

<style type="text/css" >
  .inloading{
   display: block;
    margin: 0px auto;

  }
  .inloading .mint-spinner-snake {
        margin: 20px auto;
  }
  .message-newbox .nolist{
    line-height: 50px;
    text-align: center;
  }
</style>