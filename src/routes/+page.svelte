<script>
    import "../app.css"
    import { auth } from "../firebase";
    import { isLoggedIn, user } from "../stores";
    import { onAuthStateChanged } from "firebase/auth";
    import { goto } from '$app/navigation';
    let hoy = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let fechaFormateada = hoy.toLocaleDateString('es-ES', options);

    onAuthStateChanged(auth, (authUser) => {
      $user = authUser;
      $isLoggedIn = !!authUser;
    });

  function ciclo1() {   
    if (isLoggedIn) {  
      goto("/ciclo1")
      console.log('Navigate to Ciclo 1');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo2() {   
      if (isLoggedIn) {  
        goto("/ciclo2")     
        console.log('Navigate to Ciclo 2');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo3() {   
      if (isLoggedIn) {  
        goto("/ciclo3")     
        console.log('Navigate to Ciclo 3');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo4() {   
      if (isLoggedIn) {  
        goto("/ciclo4")     
        console.log('Navigate to Ciclo 4');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo5() {   
      if (isLoggedIn) {  
        goto("/ciclo5")     
        console.log('Navigate to Ciclo 5');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo6() {
    if (isLoggedIn) {
      goto("/ciclo6")
      console.log('Navigate to Ciclo 6');
    } else {
      console.log('User not logged in');
    }
  }
  function ciclo7() {   
      if (isLoggedIn) {  
        goto("/ciclo7")     
        console.log('Navigate to Ciclo 7');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo8() {   
      if (isLoggedIn) {  
        goto("/ciclo8")     
        console.log('Navigate to Ciclo 8');   
      } else { 
      console.log('User not logged in');   
    }
  }
  function ciclo9() {   
      if (isLoggedIn) {  
        goto("/ciclo9")     
        console.log('Navigate to Ciclo 9');   
      } else { 
      console.log('User not logged in');   
    }
  }

</script>
  <h1>Home</h1>
  <div class="date">
      <small class="text-muted">Hoy es {fechaFormateada}</small>
  </div>
  {#if $isLoggedIn}
  <div class="insights">
      <button class="income" on:click={ciclo1}>
        <span class="material-icons-sharp">library_books</span>
          <div class="middle">
              <div class="left">
                <h3>--------</h3>
                <h1>Ciclo 1</h1>
              </div>
          </div>
          <small class="text-muted">Has click aqui para ir a tus archivos de 1°Ciclo</small>
        </button>
        
      <!----------------------------End of sales---------->
      <button class="income" on:click={ciclo2}>
        <span class="material-icons-sharp">library_books</span>
        <div class="middle">
            <div class="left">
              <h3>--------</h3>
              <h1>Ciclo 2</h1>
            </div>
        </div>
        <small class="text-muted">Has click aqui para ir a tus archivos de 2°Ciclo</small>
        </button>
      <!----------------------------End of income---------->
      <button class="income" on:click={ciclo3}>
        <span class="material-icons-sharp">library_books</span>
        <div class="middle">
            <div class="left">
              <h3>--------</h3>
              <h1>Ciclo 3</h1>
            </div>
        </div>
        <small class="text-muted">Has click aqui para ir a tus archivos de 3°Ciclo</small>
        </button>
      <!----------------------------End of expenses---------->
  </div>
  <!----------------------------End of insights---------->
  <div class="insights">
    <button class="income" on:click={ciclo4}>
        <span class="material-icons-sharp">library_books</span>
        <div class="middle">
            <div class="left">
              <h3>--------</h3>
              <h1>Ciclo 4</h1>
            </div>
        </div>
        <small class="text-muted">Has click aqui para ir a tus archivos de 4°Ciclo</small>
        </button>
    <!----------------------------End of sales---------->
    <button class="income" on:click={ciclo5}>
        <span class="material-icons-sharp">library_books</span>
        <div class="middle">
            <div class="left">
              <h3>--------</h3>
              <h1>Ciclo 5</h1>
            </div>
        </div>
        <small class="text-muted">Has click aqui para ir a tus archivos de 5°Ciclo</small>
        </button>
    <!----------------------------End of income---------->
    <button class="income" on:click={ciclo6}>
        <span class="material-icons-sharp">library_books</span>
        <div class="middle">
            <div class="left">
              <h3>--------</h3>
              <h1>Ciclo 6</h1>
            </div>
        </div>
        <small class="text-muted">Has click aqui para ir a tus archivos de 6°Ciclo</small>
    </button>
    <!----------------------------End of expenses---------->
    
</div>
<div class="insights">
  <button class="income" on:click={ciclo7}>
      <span class="material-icons-sharp">library_books</span>
      <div class="middle">
          <div class="left">
            <h3>--------</h3>
            <h1>Ciclo 7</h1>
          </div>
      </div>
      <small class="text-muted">Has click aqui para ir a tus archivos de 7°Ciclo</small>
      </button>
  <!----------------------------End of sales---------->
  <button class="income" on:click={ciclo8}>
      <span class="material-icons-sharp">library_books</span>
      <div class="middle">
          <div class="left">
            <h3>--------</h3>
            <h1>Ciclo 8</h1>
          </div>
      </div>
      <small class="text-muted">Has click aqui para ir a tus archivos de 8°Ciclo</small>
      </button>
  <!----------------------------End of income---------->
  <button class="income" on:click={ciclo9}>
      <span class="material-icons-sharp">library_books</span>
      <div class="middle">
          <div class="left">
            <h3>--------</h3>
            <h1>Ciclo 9</h1>
          </div>
      </div>
      <small class="text-muted">Has click aqui para ir a tus archivos de 9°Ciclo</small>
      </button>
  <!----------------------------End of expenses---------->
</div>
{:else}
<p>Debes iniciar sesión para acceder a la plataforma completa. logueate <a href="/login">aqui</a></p>
{/if}