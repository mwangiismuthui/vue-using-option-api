<template>
    <h1>All Employees</h1>

    <div>
    <center>
        <table>
            <tr v-for="employee in employees" :key="employee.id">

                <router-link :to="{ name: 'EmployeeDetail', params: { id: employee.id } }">
                    <td>{{ employee.fname }}</td>
                </router-link>&nbsp;
                <td>{{ employee.email }}</td>&nbsp;
                <td>{{ employee.phone_number }}</td>&nbsp;
            </tr>
         
        </table>
    </center>


    </div>
</template>

<script>
export default {
    data() {
        return {
            employees: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/employees')
            .then((res) => res.json())
            .then(data => this.employees = data)
            .catch(err => console.log(err.message))
    }

}
</script>

<style></style>