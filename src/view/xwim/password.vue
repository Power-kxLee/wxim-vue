<template>
  <div class="page-field">
    <div class="page-part">
      <mt-field label="Old Password:" placeholder="asdas" :attr="{ maxlength: 10 , name:'nick_name' }" type="number"></mt-field>
      <mt-field label="New Password:" placeholder="" type="number"></mt-field>
      <mt-field label="Confirm New Password:" placeholder="" type="number"></mt-field>

    </div>
	<div class='page-btn'>
		
		<mt-button size="large"  type="primary">Save</mt-button>
	</div>
  </div>
</template>

<script>
export default {
};
</script>
<style type="text/css">
	.page-part{
		margin-bottom: 20px;
	}
	.page-btn{
		padding: 0 10px;
	}
</style>