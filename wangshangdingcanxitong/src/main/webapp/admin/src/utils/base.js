const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshangdingcanxitong/",
            name: "wangshangdingcanxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangdingcanxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上订餐管理系统"
        } 
    }
}
export default base
