<template>
  <div class="row mb-2">
    <div :class="'col-md-'+12/col">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Featured post</a>
          </h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#">Continue reading</a>
        </div>
        <img
          class="card-img-right flex-auto d-none d-md-block"
          src="https://via.placeholder.com/200x250"
          alt="Card image cap"
        />
      </div>
    </div>
    <div :class="'col-md-'+12/col">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">Featured post</a>
          </h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#">Continue reading</a>
        </div>
        <img
          class="card-img-right flex-auto d-none d-md-block"
          src="https://via.placeholder.com/200x250"
          alt="Card image cap"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    col: String,
  },
};
</script>