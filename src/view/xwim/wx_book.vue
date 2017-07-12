<template>
  <div>
    <mt-index-list>
      <div class="pdb10">
        <mt-cell title="新的朋友">
          <img slot="icon" src="../../assets/image/newfriend.png">
        </mt-cell>
        <mt-cell title="群聊">
          <img slot="icon" src="../../assets/image/chat.png">
        </mt-cell>
        <mt-cell title="标签">
          <img slot="icon" src="../../assets/image/label.png">
        </mt-cell>
        <mt-cell title="公众号">
          <img slot="icon" src="../../assets/image/public_signal.png">
        </mt-cell>
      </div>
      <mt-index-section v-for="item in alphabet" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<style>
  .pdb10 {
    padding-bottom:10px;
  }
  .pdb10 img {
    width: 32px;
    height: 32px;
  }
</style>

<script>
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      }
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial)
        this.alphabet.push({
          initial,
          cells
        })
      })
    }
  }
</script>
