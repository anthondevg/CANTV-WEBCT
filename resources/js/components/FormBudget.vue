<template>
   <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Agregar control Presupuestario</div>

                <div class="card-body">
                    
                    <form action="POST" v-on:submit.prevent="newPresupuesto()">
                        <div class="row">
                            <div class="col-md-2">
                                <label for="ordern">Nro Orden</label>
                                <input
                                 v-model="norder"
                                 name="norder"
                                 class="form-control" 
                                 placeholder="52008233" 
                                 type="number"
                                >
                            </div>
                            <div class="col-md-2">
                                <label for="ordern">Nro Factura</label>
                                <input 
                                v-model="ninvoice"
                                name="ninvoice"
                                class="form-control" 
                                placeholder="477" 
                                min="0" 
                                minlength="0" 
                                maxlength="4" 
                                max="999" 
                                type="number" 
                                >
                            </div>

                             <div class="col">
                                <label for="">Descripcion</label>
                                <input 
                                name="description"
                                v-model="description"
                                class="form-control" 
                                placeholder="Apure Ventas, Opsu VET"type="text" 
                                >
                            </div>

                            <div class="col">
                                <label for="ordern">Fecha</label>
                                <input 
                                name="date"
                                v-model="date"
                                class="form-control" 
                                type="date">
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                 <label for="ordern">Cantidad Total</label>
                                 <input 
                                 name="total_amount"
                                 v-model="total_amount"
                                 class="form-control" placeholder="20.000.000BsS" type="number">
                            </div> 
                            <div class="col-12">
                                 <label for="ordern">Descuento de responsabilidad Social</label>
                                 <input disabled="" value="123" class="form-control" placeholder="444s" type="number">
                            </div> 

                            <div class="col-12">
                                 <label for="ordern">Descuento al monto total </label>
                                 <input disabled="" class="form-control" placeholder="222" type="number">
                            </div> 
                        </div>
    
                        <input class="form-control mt-2 btn d-block btn-primary" value="Agregar" type="submit" name="">
                    </form>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        data(){
            return {
                norder: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newPresupuesto(){
                const params = {
                    norder : this.norder
                };

                this.norder = '';

                axios.post('/presupuesto',params)
                     .then((res)=>{
                        const presupuesto = res.data;

                        this.$emit('new',norder);
                     })
            }
        }
    }
</script>
