<template>
<div class="row">
    <div class="col-md-12">
        <table class="table table-striped table-dark">
            <thead slot="head">
                <tr>
                    <th>Picture </th>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Birth date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in Users" :key="user.key">
                    <td><img v-bind:src="user.image" class="imagine"/></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.Lname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.date }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Edit
                        </router-link>
                        <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    db
} from '../firebaseDb';

export default {
    data() {
        return {
            Users: []
        }
    },
    created() {
        db.collection('users').onSnapshot((snapshotChange) => {
            this.Users = [];
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key: doc.id,
                    name: doc.data().name,
                    Lname: doc.data().Lname,
                    email: doc.data().email,
                    gender: doc.data().gender,
                    date: doc.data().date,
                    image: doc.data().image

                })
            });
        })
    },
    methods: {
        deleteUser(id) {
            if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                        console.log("Document deleted!");
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        },
    },
}
</script>

<style>
.btn-primary {
    margin-right: 12px;
}

th {
    cursor: pointer;
}
.imagine{
   width: 50px;
   border-radius: 20px;
}

td,th{
    text-align:center;
}
.table td,tr{
     vertical-align: middle;
}
</style>
