<template>
	<div>	
		<div class="container">
			<form-budget-component @new="addBudget"></form-budget-component>
			<br>
		</div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card table-responsive">
                    <table class="table table-striped">
		                  <thead>
		                    <tr>
		                      <th scope="col">Nro Orden</th>
		                      <th scope="col">Nro Factura</th>
		                      <th scope="col">Descripcion</th>
		                      <th scope="col">Fecha</th>
		                      <th scope="col">Cantidad Total</th>
		                      <th scope="col">Descuento 1</th>
		                      <th scope="col">Descuento 2</th>
		                    </tr>
		                  </thead>
                  		<tbody>

						<budget-component 
						v-for="budget in budgets"
						:key="budget.id"
						:budget="budget"
						></budget-component>

						</tbody>
                	</table>
                	</div>
            	</div>
        	</div>
    	</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				budgets: [{
					'id': 1,
					'norder': 52200823,
					'ninvoice': 444,
					'description': 'Apure VENTAS',
					'date': '22/05/2019',
					'total': 20000000,
					'desct1': 500000,
					'desct2': 200000
				},
				{
					'id': 1,
					'norder': 52200825,
					'ninvoice': 455,
					'description': 'OPSU',
					'date': '23/05/2019',
					'total': 20000000,
					'desct1': 540000,
					'desct2': 219900
				}]
			}
		},
		mounted() {

			console.log('Component Mounted');
		},
		methods: {
			addBudget(budget) {
				this.budgets.push(budget);
			}
		}
	}
</script>