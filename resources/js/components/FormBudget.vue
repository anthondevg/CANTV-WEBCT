<template>
   <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Agregar control Presupuestario</div>

                <div class="card-body">
                    
                    <form action="POST" v-on:submit.prevent="newBudget">
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
                                 name="total"
                                 v-model="total"
                                 class="form-control" placeholder="20.000.000BsS" type="text">
                            </div> 
                            <div class="col-12">
                                 <label for="ordern">Descuento de responsabilidad Social</label>
                                 <input 
                                 v-model="desct1"
                                 name="desct1"
                                 value="666" class="form-control" type="text">

                            </div> 

                            <div class="col-12">
                                 <label for="ordern">Descuento al monto total </label>
                                 <input 
                                 v-model="desct2"
                                 name="desct2"
                                 value="555" class="form-control" type="text">
                            </div> 
                        </div>
    
                        <input class="form-control mt-2 btn d-block btn-primary" value="Agregar presupuesto" type="submit">
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
                norder: '',
                ninvoice: '',
                description: '',
                date: '',
                total: '',
                desct1: '',
                desct2: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newBudget(){
                let budget = {
                    'id': 3,
                    'norder': this.norder,
                    'ninvoice': this.ninvoice,
                    'description': this.description,
                    'date': this.date,
                    'total': this.total,
                    'desct1': this.desct1,
                    'desct2': this.desct2
                }
                
                this.$emit('new',budget)
            }
        }
    }
</script>
