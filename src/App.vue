<template>
  <div>
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Employee registration</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">View Users</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="background">
      <div class="container pt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.background {
  background: linear-gradient(
    115deg,
    rgba(0, 25, 82, 0.8),
    rgba(32, 4, 64, 0.7)
  );
  height: 100vh;
}
label, p,h1,h2,h3,h4,h5{
  color: white;
}
</style>
