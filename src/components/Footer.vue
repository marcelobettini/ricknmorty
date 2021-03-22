<template>
  <div class="footer d-flex justify-content-center flex-column"
    variant="dark"
  >
    <div class="mb-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/128px-Rick_and_Morty.svg.png"
        alt="Rick and Morty logo"
      />
    </div>
    <div>
        <p class="text-white mb-2">Marcelo Bettini - 2021</p>
    </div>
    <div>
      <img
        class="sanchez-footer"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c9a4232133393.5670691c3aec5.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
    font-size: .9em;
}
.footer {
  position: fixed;
  bottom: 0;
  background-color: black;
  height: 100px;
  width: 100vw;
}
.sanchez-footer {
  border-radius: 10%;
  border: solid 1px white;
  padding: 2px;
  width: 140px;
}
</style>
