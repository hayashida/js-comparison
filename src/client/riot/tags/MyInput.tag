<MyInput>
	<input if={ type == 'number' } type="number" name="" id="" value={ defaultvalue } />
	<input if={ type == 'string' } type="text" name="" id="" value={ defaultvalue } />

	<script>
		this.type = opts.type;
		this.defaultvalue = opts.defaultvalue;
	</script>
</MyInput>