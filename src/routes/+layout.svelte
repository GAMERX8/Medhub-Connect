<script>
    import "../app.css";
    import { user, isLoggedIn } from "../stores";
    import { app, auth } from "../firebase";
    import { onAuthStateChanged } from "firebase/auth";
  
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
  
  <div class="container">
    <aside>
      <div class="top">
        <div class="logo">
          <img src="./favicon.png" alt="">
          <h2>Medhub<span class="danger">Connect</span></h2>
      </div>
      <div class="close" id="close-btn">
        <span class="material-icons-sharp">close</span>
      </div>
  </div>
  <div class="sidebar">
    {#if $isLoggedIn}
    <a href="/"  class="active">
    <span class="material-icons-sharp">home</span>
    <h3>Home</h3>
  </a>
    <a href="/profile">
    <span class="material-icons-sharp">account_circle</span>
    <h3>Profile</h3>
  </a>
    <a href="/meeting">
    <span class="material-icons-sharp">groups</span>
    <h3>Meeting</h3>
  </a>
    <a href="/store">
    <span class="material-icons-sharp">cloud_upload</span>
    <h3>All Store</h3>
  </a>
    <a href="https://amorse-fem-kanban.netlify.app">
    <span class="material-icons-sharp">filter_frames</span>
    <h3>Collaborative Board</h3>
  </a>
  {:else}
  <a href="/login">
    <span class="material-icons-sharp">login</span>
    <h3>Login</h3>
  </a>
  {/if}
  <a href="/#" on:click={logout}> 
        <span class="material-icons-sharp">logout</span>
        <h3>Log Out</h3>
    </a>
  </div>
    </aside>
    <main>
      <slot />
    </main>
    {#if $isLoggedIn}
    <div class="right">
      <div class="top">
          <button id="menu-btn">
              <span class="material-icons-sharp">menu</span>
          </button>
          <div class="theme-toggler">
              <span class="material-icons-sharp active">light_mode</span>
              <span class="material-icons-sharp">dark_mode</span>
          </div>
          <div class="profile">
              <div class="info">
              </div>
              <div class="profile-photo">
                <img
        src={$user.photoURL}
        alt={$user.displayName}/>
              </div>
          </div>
      </div>
      <div class="recent-updates">
          <h2>Recent Messages</h2>
          <div class="updates">
              <div class="profile-photo">
                  <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="">
              </div>
              <div class="message">
                  <p><b>Mike Tyson</b> This morning I wake up alive again.</p>
                  <small class="text-muted">2 Minutes Ago</small>
              </div>
              <div class="profile-photo">
                  <img src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" alt="">
              </div>
              <div class="message">
                  <p><b>Rick Troye</b> Insert Message</p>
                  <small class="text-muted">2 Minutes Ago</small>
              </div>
              <div class="profile-photo">
                  <img src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="">
              </div>
              <div class="message">
                  <p><b>Michelle Robbins</b> Insert Message</p>
                  <small class="text-muted">2 Minutes Ago</small>
              </div>
          </div>
      </div>
      <div class="sales-analytics">
          <h2>Video Links</h2>
          <div class="item online">
              <div class="icon">
                  <span class="material-icons-sharp">play_circle_filled</span>
              </div>
              <div class="right">
                  <div class="info">
                      <h3>35 Mejores CANALES DE MEDICINA (en Español)</h3>
                      <small class="text-muted">1:15:09</small>
                  </div>
                  <a href="https://www.youtube.com/watch?v=5bSmQ7KgDEM" class="success">Entrar</a>
              </div>
          </div>
          <div class="item online">
              <div class="icon">
                  <span class="material-icons-sharp">play_circle_filled</span>
              </div>
              <div class="right">
                  <div class="info">
                      <h3>Morfofisiología Humana Parte 1</h3>
                      <small class="text-muted">17:46</small>
                  </div>
                  <a href="https://www.youtube.com/watch?v=xr4s8_-UxDc" class="success">Entrar</a>
              </div>
          </div>
      </div>
  </div>
  {/if}
  </div>