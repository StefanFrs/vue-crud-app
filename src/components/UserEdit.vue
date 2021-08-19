<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
                 <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Last name</label>
                    <input type="text" class="form-control" v-model="user.Lname" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group mt-3 d-flex flex-column">
                    <label>Gender</label>
                    <select v-model="user.gender" id="dropdown" name="dropdown" class="form-control" required>
                        <option disable selected value>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="form-group mt-3 d-flex flex-column">
                    <label for="birthday">Birthday</label>
                    <input v-model="user.date" type="date" id="birthday" class="form-control" name="birthday">
                </div>
               <div class="form-group mt-3 d-flex flex-column align-items-start">
                    <label class="form-label text-center uno" id="input-image" for="customFile">
                        Image profile
                    </label>
                    <input type="file" class="input-form" id="customFile" multiple/>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update user</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                user: {
                }
            }
        },
        created() {
            let dbRef = db.collection('users').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    console.log("User successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>