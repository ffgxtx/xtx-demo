//封装购物车模块

import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () =>{
  //定义state
  const cartList = ref([])
  //定义action
  const addCart = (goods) =>{
    //添加购物车操作
    //已添加过 count+1
    //没有添加过 直接push
    //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到
    const item = cartList.value.find((item)=>goods.skuId === item.skuId)
    if(item){
      //找到了
      item.count++
    }else{
      cartList.value.push(goods)
    }
  }

  //删除购物车
  const delCart = (skuId) =>{
    //思路：
    //找到要删除项的下标值 -splice
    //or 使用数组的过滤方法 -filter
    const idx = cartList.value.findIndex((item) =>skuId === item.skuId)
    cartList.value.splice(idx,1)
  }

  //单选功能
  const singleCheck = (skuId,selected)=>{
    //通过skuId找到要修改的那一项 让后把它的selected修改为传来的selected
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  //计算属性
  //总的数量 所有项的count之和
  const allCount = computed(() => cartList.value.reduce((a,c) => a + c.count , 0))
  //总价 所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a,c) => a + c.count * c.price , 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck
  }
},{
  persist:true
})