import httpInstance from "@/utils/http";

export function getCategoru(){
  return httpInstance({
    url:'home/category/head'
  })
}