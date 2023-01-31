const employees_list={template:`

<table class="table table-stripped">
<thead>
    <tr>
        <th>
            Id
        </th>
        <th>
            Data zamówienia
        </th>
        <th>
            Status
        </th>
        <th>
            Adres
        </th>
        <th>
            Liczba egzemplarzy
        </th>
        <th>
            Id klienta
        </th>
        <th>
            ISBN
        </th>
        <th>
            Opcje
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="o in orders">
        <td>{{o.IdZ}}</td>
        <td>{{o.DataZ}}</td>
        <td>{{o.Status}}</td>
        <td>{{o.Adres}}</td>
        <td>{{o.LiczbaKs}}</td>
        <td>{{o.LoginK}}</td>
        <td>{{o.IdKs}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(e)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(o.IdZ)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        
        <div class="input-group mb-3">
            <span class="input-group-text">Data zamówienia</span>
            <input type="text" class="form-control" v-model="DataZ">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Status</span>
            <input type="text" class="form-control" v-model="Status">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Adres</span>
            <input type="text" class="form-control" v-model="Adres">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Liczba egzemplarzy</span>
            <input type="text" class="form-control" v-model="LiczbaKs">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Id klienta</span>
            <input type="text" class="form-control" v-model="LoginK">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">ISBN</span>
            <input type="text" class="form-control" v-model="IdKs">
        </div>

        <button type="button" @click="createClick()"
        v-if="IdZ==0" class="btn btn-primary">
        Dodaj
        </button>
        <button type="button" @click="updateClick()"
        v-if="IdZ!=0" class="btn btn-primary">
        Zatwierdź zmiany
        </button>
    
    </div>

</div>
</div>
</div>
`,

data(){
    return{
        orders:[],
        modalTitle:"",
        IdZ:0,
        DataZ:"",
        Status:"",
        Adres:"",
        LiczbaKs:"",
        LoginK:"",
        IdKs:""
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"zamowienie")
        .then((response)=>{
            this.orders=response.data;
        });
    },
    editClick(o){
        this.modalTitle="Edytuj zamówienie";
        this.IdZ=o.IdZ;
        this.DataZ=o.DataZ;
        this.Status=o.Status;
        this.Adres=o.Adres;
        this.LiczbaKs=o.LiczbaKs;
        this.LoginK=o.LoginK;
        this.IdKs=o.IdKs;
    },
    createClick(){
        axios.post(variables.API_URL+"zamowienie",{
            DataZ:this.DataZ,
            Status:this.Status,
            Adres:this.Adres,
            LiczbaKs:this.LiczbaKs,
            LoginK:this.LoginK,
            IdKs:this.IdKs    
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"zamowienie",{
            IdZ:this.IdZ,
            DataZ:this.DataZ,
            Status:this.Status,
            Adres:this.Adres,
            LiczbaKs:this.LiczbaKs,
            LoginK:this.LoginK,
            IdKs:this.IdKs
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Potwierdź usunięcie")){
            return;
        }
        axios.delete(variables.API_URL+"zamowienie/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    }
},
mounted:function(){
    this.refreshData();
}

}