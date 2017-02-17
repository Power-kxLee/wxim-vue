<template>
  <div class="page-field">
    <div class="page-part">
      <mt-field label="Nick name:" placeholder="asdas" :attr="{ maxlength: 10 , name:'nick_name' }" ></mt-field>
      <mt-field label="Contact name:" placeholder="" ></mt-field>
      <mt-field label="Business email:" placeholder="" type="email"></mt-field>
      <mt-field label="Facebook:" placeholder="" ></mt-field>
      <mt-field label="Other Social Tools:" placeholder="" ></mt-field>
      <mt-field label="Whatsapp:" placeholder="" ></mt-field>
      <mt-field label="Skype:" placeholder="" ></mt-field>
      <mt-field label="Business Phone:" placeholder="" type="number"></mt-field>
      <mt-field label="Fax Number:" placeholder="" type="number"></mt-field>
      <mt-field label="Cell Phone:" placeholder="" type="number"></mt-field>
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