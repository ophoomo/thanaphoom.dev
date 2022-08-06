<script lang="ts">
  import phoom from './assets/phoom.webp';
  let loading = 0;
  let loadingStatus = true;
  let loadingText = "";

  const progressLoading =setInterval(() => {
    loading += 30
    loadingText += '.';
    if (loadingText === '....') {
      loadingText = '';
    }
    if (loading >= 100) {
      timeout_remove_loading();
      clearInterval(progressLoading);
    }
  }, 600);

  const timeout_remove_loading = () => {
    const timeout_loading = setTimeout(() => {
      clearTimeout(timeout_loading);
      loadingStatus = false;
    }, 1000);
  }

</script>

<main>
  <div class="overlay"></div>
  {#if loadingStatus}
  <loading class={loading >= 100 && 'is-close'}>
      <h1 class="nes-text" style="z-index: 3; color: #FFF">Loading{loadingText}</h1>
      <progress class="nes-progress is-error" style="z-index: 3;" value={loading} max="100"></progress>
      <div class="bg"></div>
  </loading>
  {/if}
  <content>
    <section class="message-list" style="margin-left: 50px">
      <section class="message -left">
        <div class="nes-balloon from-left">
          <p>Hello everyone Let me introduce myself</p>
          <p>My name is Thanaphoom You can call me Phoom</p>
        </div>
      </section>
    </section>
    <div class="content-1">
      <img class="nes-avatar is-rounded is-extra" src={phoom} alt="NoImage">
      <div class="nes-container with-title  is-dark" style="width: 100%;text-align:center;">
        <div class="title">Social</div>
        <a target="_blank" href="https://www.facebook.com/PhoomZoZa/"><i class="nes-icon facebook is-smail"></i></a>
        <a target="_blank" href="https://www.instagram.com/ophoomo/"><i class="nes-icon instagram is-smail"></i></a>
        <a target="_blank" href="mailto:me@thanaphoom.dev"><i class="nes-icon gmail is-smail"></i></a>
        <a target="_blank" href="https://github.com/ophoomo"><i class="nes-icon github is-smail"></i></a>
      </div>
    </div>
  </content>
</main>

<style>
</style>
