const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/ToDo.vue')
            },
            {
                path: '/reminders',
                component: () =>
                    import ('pages/Reminders.vue')
            },
            {
                path: '/shopping',
                component: () =>
                    import ('pages/Shopping.vue')
            },
            {
                path: '/help',
                component: () =>
                    import ('pages/Help.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/ErrorNotFound.vue')
    }
]

export default routes
