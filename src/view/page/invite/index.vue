<template>
  <div class="invite">
	<div class='invite-cont'>
		<div class='invite-tis'>
			<p>Congratulations! Youre our customer and you can join our earning plan. </p>
		</div>
		<mt-field class='settextarea' readonly label="Invitation:" placeholder="自我介绍" value='http://m.tt-elmontyouthsoccer.com/referral_program/178035' type="textarea" rows="2"></mt-field>
		<mt-cell title="Invitation:" value="178035"></mt-cell>
		<mt-cell title="Total invite member:" value="0"></mt-cell>
		<mt-field class='setcode' label="Customize your Invite code:" placeholder="输入验证码">
       		<mt-button class='setcode-btn' size="small"  type='danger'>Set</mt-button>
      	</mt-field>
		<mt-cell title="Total invite rebate:" value="$0.00"></mt-cell>
		<mt-cell title="Total invite order numbers:" value="0"></mt-cell>
		<mt-cell title="Total invite order money:" value="0"></mt-cell>
		<div class='clickhere'>
			
        <mt-button  size="large"  type='primary'>Click here for more infomation.</mt-button>
		</div>

	</div>
  </div>
</template>

<script type="text/babel">
	import '../../../assets/css/page/invite.css'
  export default {
   
  };
</script>
