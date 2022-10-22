import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/",
    component: import("@/components/Layout.vue"),
    redirect: "/a",
    children: [
      {
        path: "/a",
        name: "A",
        component: () => import("@/components/ComA.vue"),
      },
      {
        path: "/b",
        name: "B",
        component: () => import("@/components/b/ComB.vue"),
      },
      {
        path: "/f",
        name: "F",
        children: [
          {
            path: "g",
            name: "G",
            component: () => import("@/components/g/index.vue"),
          },
        ],
      },
      {
        path: "/four",
        name: "Four",
        component: () => import("@/components/four/index.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
