# Github app
A web application using Vue.js and Github public API to accomplish [an exam](https://github.com/pakhuong/frontend-reactjs-exam)

**Source code**

In your terminal, enter:
```bash
$ git clone https://github.com/ngankhanh98/github-app.git
$ cd github-app
$ npm i
$ npm run serve
```
A web app should be launched at http://localhost:8080, as same as https://github-app.ngankhanh98.vercel.app/

## Note for myself
Because this is a training material, some helpful resources will be included and must be read comprehendsively.
- [ ] [The 5 Problem-Solving Skills of Great Software Developers](https://dev.to/lpasqualis/the-5-problem-solving-skills-of-great-software-developers-4e6?utm_campaign=Grokking%20Newsletter&utm_medium=email&utm_source=Revue%20newsletter&fbclid=IwAR0Wt3hw23-ql40EmLAnuDuRtdrxf_W0dn82DLoVLPxxwrnZqWhH7wzV7SA)
- [ ] [State Management with Composition API](https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/)
- [ ] [Ant Design for Vue](https://2x.antdv.com/docs/vue/introduce/)
- [ ] [JavaScript](https://javascript.info/)
- [ ] [Watch for Vuex State changes!](https://dev.to/viniciuskneves/watch-for-vuex-state-changes-2mgj)


// Lời dặn
components/search_bar.vue -> SearchBar -> keyup.on emit sự kiện lên cha thôi, cha sử lý state<br>
search_bar và search_button -> slot / renderless<br>
https://learn-vuejs.github.io/vue-patterns/patterns/#component-declaration<br>
VueFront<br>
stateful vs stateless components<br>

// components không đụng chạm state, chỉ emit sự kiện lên views <br>
// nếu viết sự kiện trong component thì không tận dụng được component, nếu chỉ emit sự kiện ra cho views cha, view cha tự biết các xử lý, tùy chỗ component có mặt trong views<br>

// TODO: tách store, optimised<br>
// có khi mình viết component cho người khác dùng<br>
// renderless<br>
// stateless, renderless giống giống abstract<br>

// TODO: NestJS 
// TODO: ERD drawio: overview, 3 first 