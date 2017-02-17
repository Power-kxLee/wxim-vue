<template>
  <div class="page-field">
    <div class="page-part">
    	<mt-cell title="Member Level:" value="1"></mt-cell>
      <mt-field label="Nick name:" placeholder="asdas" :attr="{ maxlength: 10 , name:'nick_name' }" ></mt-field>
      <mt-field label="Paypal Account:" placeholder="" ></mt-field>
      <mt-field label="Industry:" placeholder="" ></mt-field>
      <mt-field label="Company name:" placeholder="" ></mt-field>
      <mt-field label="location:" placeholder="" ></mt-field>
      <mt-field label="Web Page:" placeholder="" ></mt-field>

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