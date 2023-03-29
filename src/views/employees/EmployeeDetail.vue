<template>
    <h1>Employee Details </h1>
    <div v-if="employee">
       <center>
        <table>
            <tr>
                <td>Name :</td> &nbsp;
                <td>{{ employee.fname }}</td>&nbsp;
                <td>{{ employee.lname }}</td>&nbsp;
                <td>{{ employee.oname }}</td>&nbsp;
            </tr>
            <tr>
                <td>Details:</td>&nbsp;
                <td>{{ employee.phone_number }}</td> &nbsp;
                <td>{{ employee.email }}</td>&nbsp;
                <td>{{ employee.id_number }}</td>&nbsp;
            </tr>
        </table>
       </center>
    </div>
    <div v-else>
        Loading job details ....
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            employee: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/employees/'+ this.id)
        .then((res)=>res.json())
        .then(data => this.employee = data)
        .catch(err=>console.log(err.message))
    }
}
</script>

<style></style>