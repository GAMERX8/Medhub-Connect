<script> 
    import { auth } from '../../firebase';
    import { isLoggedIn, user } from "../../stores";
    import { signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
  
    const logout = async () => {
      try {
        await signOut(auth);
        $user = {};
        $isLoggedIn = false;
      } catch (error) {
        console.error(error);
      }
    };
  
    onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
  </script>
  
  <style>
    @import '../../app.css';
  </style>
  
  <div class="student-profile">
    <h1 class="">Student Profile</h1>
    {#if $isLoggedIn}
      <img
        src={$user.photoURL}
        alt={$user.displayName}
        class="w-40 h-40 rounded-full m-auto"
      />
      <h3>Bienvenido, {$user.displayName}</h3>
      <p>Correo: {$user.email}</p>
      <p>¿Desear Salir? Haz click aquí abajo!</p>
        <a
          href="/#"
          on:click={logout}
          class="profile-btn"
        > Sign Out
        </a>
    {/if}
  </div>