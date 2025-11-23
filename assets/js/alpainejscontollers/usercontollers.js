 document.addEventListener('alpine:init', () => {
        Alpine.data('userData', () => ({
           users:[],
           pageusers : [],
           isloading:false,
           showaddmodal:false,
           pagecount : 1 ,
           itemcount : 4 ,
           cuurnpage : 1 ,
           getUsers(){
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.users = res.data
                this.pagination()
                console.log(res);


            }).catch(error=>{
                console.log(error.message);
            }).finally(()=>{
                this.isloading = false
            })
        },
        pagination(){
            this.pagecount = Math.ceil( this.users.length / this.itemcount)  
            let start = (this.cuurnpage * this.itemcount) - this.itemcount
            let end = this.cuurnpage * this.itemcount
            this.pageusers=this.users.slice(start,end)
        },
        nextpage(){
            this.cuurnpage++
            if(this.cuurnpage > this.pagecount){
                this.cuurnpage = this.pagecount
            }
            this.pagination()
        },
        prevpage(){
            this.cuurnpage--
            if(this.cuurnpage < 1){
                this.cuurnpage = 1
            }
            this.pagination()
        }
           
    }))
    })