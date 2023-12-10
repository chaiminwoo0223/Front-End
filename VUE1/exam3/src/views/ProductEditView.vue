<template>
  <div id="ProductEdit" class="box">
    <h1>제품 수정</h1>
    <div>
      <input type="text" v-model="product.title"/>
    </div>
    <div>
      <input type="number" v-model="product.price"/>
    </div>
    <div>
      <select v-model="product.category" class="choice">
        <option value=undefined>카테고리를 선택하세요</option>
        <option value="음료수">음료수</option>
        <option value="주류">주류</option>
        <option value="과자">과자</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="remove">삭제</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>
  
<script>
import { loadProduct, updateProduct, deleteProduct } from '../productService';
  
export default {
  name: "ProductEditView",
  data() {
    return {
      product: { }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.product = await loadProduct(id);
  },
  methods: {
    async save() {
      await updateProduct(this.product);
      this.goList();
    },
    async remove() { 
      if (confirm('삭제하시겠습니까?')) { 
          await deleteProduct(this.product.id); 
          this.goList();
      } 
    },
    goList() {
      this.$router.push("/");
    }
  }
}
</script>

<style>
h1 { text-align: left; } 
.box { padding: 30px; margin: 30px auto; width: 600px; }
.choice { padding: 6px; width: 200px; }
input { padding: 6px; width: 200px; }
div { text-align: left; margin-bottom: 15px; }
button { padding: 5px 20px; margin-right: 10px; }
</style>