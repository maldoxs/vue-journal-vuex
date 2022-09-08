<template>
    <div class="entry-container mb-2 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-ligth mt-1">2021, jueves</span>
        </div>
        <div class="entry-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur explicabo id enim hic soluta distinctio nobis laboriosam</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45); //toma el color gris y lo acalara un 45%
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>
