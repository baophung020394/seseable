<template>
    <div class="bannerContainer">
        <img class="bannerImage" src="https://eagles.nyc3.digitaloceanspaces.com/seseable/Mobile%20-%20Shirt.png" />
        <div class="bannerText">
            <h1 class="bannerTextTitle">
                <a href="#" class="bannerTextLink">Find Your Creative</a>    
            </h1>
        </div>
        <img class="bannerImage" src="https://eagles.nyc3.digitaloceanspaces.com/seseable/banner%20seseable%20-1640775080497.png
" />
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss">
.bannerContainer {
    min-height:500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(102, 103, 171);
    .bannerImage {
        max-width: 257px;
    }
    .bannerText {
        display: flex;
        align-items: center;
        margin: 0 40px;
        .bannerTextLink {
            display: inline-block;
            font-size:60px;
            text-transform: uppercase;
            color: #ffffff;
            font-weight: bold;
        }
    }
}
</style>