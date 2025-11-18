 document.addEventListener('alpine:init', () => {
        Alpine.data('userData', () => ({
           users:[],
           isloading:false,
           showaddmodal:false,
           getUsers(){
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.users = res.data
                console.log(res);


            }).catch(error=>{
                console.log(error.message);
            }).finally(()=>{
                this.isloading = false
            })
        }
           
    }))
    })