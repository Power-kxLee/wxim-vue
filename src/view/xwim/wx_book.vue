
<template>
	<div class='many_conetnt'>
		
		<div class="page-indexlist">
		<div class="page-indexlist-wrapper">
		  <mt-index-list>

		    <mt-index-section v-for="item in alphabet" :index="item.initial" :key='item.initial'>
		      <mt-cell v-for="cell in item.cells" :title="cell" :key='cell'></mt-cell>
		    </mt-index-section>
		  </mt-index-list>
		</div>
		</div>
	</div>
</template>

<style>
  @component-namespace page {
    @component indexlist {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
      }
      @descendent wrapper {
        width: 100%;
        border-top: solid 1px #ddd;
      }
    }
  }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
  export default {
    data() {
      return {
        alphabet: []
      };
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>