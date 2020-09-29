import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/SettingsComponents/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("@/components/TaskComponents/Tasks.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task/:id",
    name: "task",
    component: () => import("@/components/TaskComponents/TasksEdit.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/counterparties",
    name: "counterparties",
    component: () =>
      import(
        "@/components/CounterpartyComponents/CreateCounterparty/Counterparties.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/counterparty/:id",
    name: "CounterpartiesEdit",
    component: () =>
      import(
        "@/components/CounterpartyComponents/EditCounterparty/CounterpartiesEdit.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/groups",
    name: "groups",
    component: () => import("@/components/GroupComponents/Groups.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/group/:id",
    name: "group",
    component: () => import("@/components/GroupComponents/GroupsEdit.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/documents/:id",
    name: "documents",
    component: () => import("@/components/GroupComponents/GroupsDocuments.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/archives",
    name: "archives",
    component: () =>
      import("@/components/GroupComponents/ArchiveGroups/GroupsArchive"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/archive/:id",
    name: "archive",
    component: () =>
      import("@/components/GroupComponents/ArchiveGroups/GroupArchiveItem"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/components/UsersComponents/User"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profiles",
    name: "courses",
    component: () => import("@/components/CourseComponents/Course"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id",
    name: "course",
    component: () => import("@/components/CourseComponents/CourseEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/examen/:examenID",
    name: "examen",
    component: () => import("@/components/CourseComponents/CourseExamen/ExamenEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/listeners/:examenID",
    name: "listeners",
    component: () => import("@/components/CourseComponents/CourseExamen/ExamenListListener"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID",
    name: "subcategory",
    props: true,
    component: () => import("@/components/CourseComponents/CourseCategory/CreateSubcategory"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID",
    name: "module",
    props: true,
    component: () => import("@/components/CourseComponents/CourseModule/CreateModule"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID/lections/:moduleID",
    name: "createLection",
    props: true,
    component: () => import("@/components/CourseComponents/CourseModule/ModuleCreateLectionAndTest"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID/lections/:moduleID/lection/:lectID",
    name: "previewLection",
    props: true,
    component: () => import("@/components/CourseComponents/CourseModule/LectionPreview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID/lections/:moduleID/lectionEdit/:lectEditID",
    name: "lectionEdit",
    props: true,
    component: () => import("@/components/CourseComponents/CourseModule/LectionEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID/lections/:moduleID/testing/:lectTestID",
    name: "createTest",
    props: true,
    component: () => import("@/components/CourseComponents/CourseTest/CreateTest"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/module/:subcategoryID/lections/:moduleID/testing/:lectTestID/test/:testID",
    name: "testEdit",
    props: true,
    component: () => import("@/components/CourseComponents/CourseTest/TestingEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("@/components/UsersComponents/UserEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/deals",
    name: "deals",
    component: () => import("@/components/DealComponents/Deal"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/files",
    name: "files",
    component: () => import("@/components/FilesComponents/Files"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/deal/:id",
    name: "deal",
    component: () => import("@/components/DealComponents/DealEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/components/SettingsComponents/Settings"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/components/SettingsComponents/Messages"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/alerts",
    name: "alerts",
    component: () => import("@/components/SettingsComponents/Alerts"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/events",
    name: "events",
    component: () => import("@/components/SettingsComponents/Events"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/event/:id",
    name: "event",
    component: () => import("@/components/SettingsComponents/EventsEdit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/components/RegisterComponents/Signin.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/components/RegisterComponents/Signup.vue"),
  },
  {
    path: "*",
    component: () =>
      import("@/components/SettingsComponents/NotFoundComponent"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("userToken") == null) {
      next({
        path: "/signin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
