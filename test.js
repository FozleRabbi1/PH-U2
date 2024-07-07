const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "ELEMENT",
    },
    {
        name: "User Managment",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "ELEMENT",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "ELEMENT",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "ELEMENT",
            },
        ],
    },
];

const adminSideBar = adminPaths.reduce((acc, item) => {
    if (item.element && item.path) {
        acc.push({
            key: item.name,
            label: item.path
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => (
                {
                    key: child.name,
                    label: child.path
                }
            ))
        })
    }

    return acc
}, [])



// const adminSideBar = adminPaths.reduce((acc, item) => {
//     if (item.element && item.path) {
//         acc.push({
//             key: item.name,
//             label: item.path
//         });
//     }
//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: child.path
//             }))
//         });
//     }
//     return acc;
// }, []);

console.log(adminSideBar);


console.log(JSON.stringify(adminSideBar));


// const adminRoutes = adminPaths.reduce((acc, item) => {
//     if (item.element && item.path) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])
// console.log(adminRoutes);