# vue3-ssr-dynamic-component-bug
bug about ssr with dynamic component.

run `yarn build:ssr` and `node dist-ssr/_assets/server-main`

```html
[Vue warn]: resolveComponent can only be used in render() or setup().
vue server render:  <!--[--><header><img alt="Vue logo" src="/_assets/logo.3b714202.png"></header><main><MyTest></MyTest></main><footer> thanks vue3 </footer><!--]-->
```

As you can see, component `MyTest` is not rendered as expect.

But if I remove `TopHeader` in `App.vue`, the ssr result is correct.

see issue: https://github.com/vuejs/vue-next/issues/2863
