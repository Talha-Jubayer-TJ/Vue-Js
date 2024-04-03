import {ref,reactive, toRefs} from 'vue'
export default function (){
    const val= ref("")
    const brewries = reactive({list : [] });
    const submitted = async () => {
        const response = await fetch(
            ` https://api.openbrewerydb.org/v1/breweries/?by_name=${val.value}`
        );
        const json= await response.json();
        brewries.list =json;
    };
    return {val, ...toRefs(brewries), submitted}
    }
