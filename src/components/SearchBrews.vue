<script >
    import useBrewList from '../composables/use-brew-list';
    export default{
       
    setup() {
         const {val, list, submitted} = useBrewList()
    return {val, list, submitted}
    }

}
</script>

<template>
    <div class="brews">
        <h2>Brew Search</h2>
        <section>
            <form @submit.prevent="submitted">
                <input type="text" v-model="val">
                <button>Submit</button>
            </form>
        </section>


        <div class="search-results" v-for="brewery in list" :key="brewery.id">
            <ul>
                <li>
                    <span class="title">Name:</span>
                    <span class="brew">{{ brewery.name }}</span>
                </li>
                <li>
                    <span class="title">Street:</span>
                    <span class="brew">{{ brewery.street }}</span>
                </li>
                <li>
                    <span class="title">City:</span>
                    <span class="brew">{{ brewery.city }}</span>
                </li>
                <li>
                    <span class="title">Zip:</span>
                    <span class="brew">{{ brewery.postal_code }}</span>
                </li>
                <br>
            </ul>
        </div>   
    </div>
</template>


<style scoped>
  .search-results{
    display: flex;
    flex-direction: column;
    width: 600px;
    text-align: center;
  }
  .brews{
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10 auto;
  }
  ul {
    list-style-type: none;
    width: 100%;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  .brew{
    font-weight: bold;
  }

  
</style>