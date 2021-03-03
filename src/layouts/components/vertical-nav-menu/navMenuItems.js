/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    // {
    //   url: "/apps/email",
    //   name: "Email",
    //   slug: "email",
    //   icon: "MailIcon",
    //   i18n: "Email",
    // },

    // {
    //   url: null,
    //   name: 'Dashboard',
    //   tag: '2',
    //   tagColor: 'warning',
    //   icon: 'HomeIcon',
    //   i18n: 'Dashboard',
    //   submenu: [
    //     {
    //       url: '/dashboard/analytics',
    //       name: 'Analytics',
    //       slug: 'dashboard-analytics',
    //       i18n: 'Analytics'
    //     },
    //     {
    //       url: '/dashboard/ecommerce',
    //       name: 'eCommerce',
    //       slug: 'dashboard-ecommerce',
    //       i18n: 'eCommerce'
    //     }
    //   ]
    // },

    // {
    //   header: 'Apps',
    //   icon: 'PackageIcon',
    //   i18n: 'DASHBOARD',
    //   items: [
    //     {
    //       url: '/dashboard/analytics',
    //       name: 'Home',
    //       slug: 'Home',
    //       icon: 'HomeIcon',
    //       i18n: 'Home'
    //     },
    //     {
    //       url: null,
    //       name: 'eCommerce',
    //       icon: 'ShoppingCartIcon',
    //       i18n: 'Products',
    //       submenu: [
    //         {
    //           url: '/apps/eCommerce/shop',
    //           name: 'Shop',
    //           slug: 'ecommerce-shop',
    //           i18n: 'Shop'
    //         },
    //         {
    //           url: '/apps/eCommerce/item/',
    //           name: 'Item Details',
    //           slug: 'ecommerce-item-detail-view',
    //           i18n: 'ItemDetails'
    //         }
    //       ]
    //     },
    //     {
    //       url: '/apps/todo',
    //       name: 'Todo',
    //       slug: 'todo',
    //       icon: 'CheckSquareIcon',
    //       i18n: 'Order'
    //     },
    //     {
    //       url: '/apps/calendar/vue-simple-calendar',
    //       name: 'Booking',
    //       slug: 'calendar-simple-calendar',
    //       icon: 'CalendarIcon',
    //       tagColor: 'success',
    //       i18n: 'Booking'
    //     },
    //     {
    //       url: '/apps/email',
    //       name: 'Email',
    //       slug: 'email',
    //       icon: 'LogOutIcon',
    //       i18n: 'Logout'
    //     }
    //   ]
    // },

    {
        header: 'UI',
        icon: 'LayersIcon',
        i18n: 'Dashboard',
        items: [

            {
                url: null,
                name: 'Grid',
                icon: 'LayoutIcon',
                i18n: 'CFO',
                submenu: [{
                  url: '/forms/form-elements/select/cfodashboard',
                  name: 'Vuesax',
                  slug: 'grid-vuesax',
                  i18n: 'Dashboard'
              },
              {
                  url: '/forms/form-elements/select/artapprove',
                  name: 'artapprove',
                  i18n: 'Artwork Approve'
              },
              {
                url: '/forms/form-elements/select/fiapprove',
                name: 'financeapprove',
                i18n: 'Finance Approve'
            }
          ]
            },
            {
                url: null,
                name: 'Data List',
                tagColor: 'primary',
                icon: 'ListIcon',
                i18n: 'Sale',
                submenu: [{
                        url: '/ui-elements/card/basic',
                        name: 'Projects',
                        slug: 'basic-cards',
                        i18n: 'Projects'
                    },
                    {
                        url: '/extensions/access-control',
                        name: 'Access Control',
                        slug: 'extra-component-access-control',
                        i18n: 'Sale/marketing manager'
                    },
                    {
                        url: '/ui-elements/colors',
                        name: 'minute of meeting',
                        slug: 'colors',
                        icon: 'DropletIcon',
                        i18n: 'customer List'
                    },
                    {
                        url: '/apps/todo',
                        name: 'Todo',
                        slug: 'todo',
                        icon: 'CheckSquareIcon',
                        i18n: 'Customer Requirement'
                    },

                    {
                        url: '/ui-elements/card/statistics',
                        name: 'Statistics',
                        slug: 'statistics-cards',
                        i18n: 'Customer contract'
                    },

                    {
                        url: '/ui-elements/card/card-actions',
                        name: 'Card Actions',
                        slug: 'card-actions',
                        i18n: 'Quotation'
                    },
                    {
                        url: '/ui-elements/card/card-colors',
                        name: 'Card Colors',
                        slug: 'card-colors',
                        i18n: 'Invoice'
                    },

                    {
                        url: '/components/dialogs',
                        name: 'Dialogs',
                        slug: 'component-dialog',
                        i18n: 'Payment'

                    },
                    {
                        url: '/components/divider',
                        name: 'Divider',
                        slug: 'component-divider',
                        i18n: 'Receipt'
                    },
                ]
            },
            // {
            //   url: '/ui-elements/colors',
            //   name: 'Colors',
            //   slug: 'colors',
            //   icon: 'DropletIcon',
            //   i18n: 'Colors'
            // },
            {
                url: null,
                name: 'Card',
                icon: 'CreditCardIcon',
                i18n: 'Finance',
                submenu: [{
                        url: '/components/loading',
                        name: 'Loading',
                        slug: 'component-loading',
                        i18n: 'Project'
                    },
                    {
                        url: '/extensions/clipboard',
                        name: 'Clipboard',
                        icon: 'CopyIcon',
                        slug: 'extra-component-clipboard',
                        i18n: 'Quotation'
                    },
                    {
                        url: '/extensions/context-menu',
                        name: 'Context Menu',
                        icon: 'MoreHorizontalIcon',
                        slug: 'extra-component-context-menu',
                        i18n: 'Invoice'
                    },
                    {
                        url: '/forms/form-elements/select/payment',
                        name: 'Star Ratings',
                        icon: 'StarIcon',
                        slug: 'extra-component-star-ratings',
                        i18n: 'Payment'
                    },
                    {
                        url: '/extensions/autocomplete',
                        name: 'Autocomplete',
                        icon: 'Edit3Icon',
                        slug: 'extra-component-autocomplete',
                        i18n: 'Receipt'
                    },
                    {
                        url: '/extensions/tree',
                        name: 'Tree',
                        icon: 'GitPullRequestIcon',
                        slug: 'extra-component-tree',
                        i18n: 'Request payment'
                    }
                ]
            },
            {
                url: null,
                name: 'Components',
                icon: 'ArchiveIcon',
                i18n: 'Procurement',
                submenu: [{
                        url: '/components/popup',
                        name: 'Popup',
                        slug: 'component-popup',
                        i18n: 'Project'
                    },
                    {
                        url: '/forms/form-elements/select/brieform',
                        name: 'Brief form',
                        slug: 'component-drop-down',
                        i18n: 'Brief form'
                    },
                    {
                        url: '/components/tabs',
                        name: 'Tabs',
                        slug: 'component-tabs',
                        i18n: 'Supplier selection'
                    },
                    {
                        url: '/forms/form-elements/select/requestpaymentpro',
                        name: 'Alert',
                        slug: 'component-alert',
                        i18n: 'Request Payment'
                    },

                    {
                        url: '/components/avatar',
                        name: 'Avatar',
                        slug: 'component-avatar',
                        i18n: 'Supplier Contract'
                    },
                    {
                        url: '/components/breadcrumb',
                        name: 'Breadcrumb',
                        slug: 'component-breadcrumb',
                        i18n: 'Purchase Order'
                    },
                    {
                        url: '/components/button',
                        name: 'Button',
                        slug: 'component-button',
                        i18n: 'Product'
                    },
                    {
                        url: '/forms/form-elements/select/deliveryproduct',
                        name: 'Button Group',
                        slug: 'component-button-group',
                        i18n: 'Delivery Products'
                    }
                    // {
                    //   url: '/components/chip',
                    //   name: 'Chip',
                    //   slug: 'component-chip',
                    //   i18n: 'Chip'
                    // },
                    ,
                    {
                        url: '/components/collapse',
                        name: 'Collapse',
                        slug: 'component-collapse',
                        i18n: 'Product Requests'
                    },
                    // {
                    //   url: '/components/dialogs',
                    //   name: 'Dialogs',
                    //   slug: 'component-dialog',
                    //   i18n: 'Dialogs'
                    // },
                    // {
                    //   url: '/components/divider',
                    //   name: 'Divider',
                    //   slug: 'component-divider',
                    //   i18n: 'Divider'
                    // },

                    // {
                    //   url: '/components/list',
                    //   name: 'List',
                    //   slug: 'component-list',
                    //   i18n: 'List'
                    // },
                    // {
                    //   url: '/components/loading',
                    //   name: 'Loading',
                    //   slug: 'component-loading',
                    //   i18n: 'Loading'
                    // },
                    // {
                    //   url: '/components/navbar',
                    //   name: 'Navbar',
                    //   slug: 'component-navbar',
                    //   i18n: 'Navbar'
                    // },
                    // {
                    //   url: '/components/notifications',
                    //   name: 'Notifications',
                    //   slug: 'component-notifications',
                    //   i18n: 'Notifications'
                    // },
                    // {
                    //   url: '/components/pagination',
                    //   name: 'Pagination',
                    //   slug: 'component-pagination',
                    //   i18n: 'Pagination'
                    // },
                    // {
                    //   url: '/components/popup',
                    //   name: 'Popup',
                    //   slug: 'component-popup',
                    //   i18n: 'Popup'
                    // },
                    // {
                    //   url: '/components/progress',
                    //   name: 'Progress',
                    //   slug: 'component-progress',
                    //   i18n: 'Progress'
                    // },
                    // {
                    //   url: '/components/sidebar',
                    //   name: 'Sidebar',
                    //   slug: 'component-sidebar',
                    //   i18n: 'Sidebar'
                    // },
                    // {
                    //   url: '/components/slider',
                    //   name: 'Slider',
                    //   slug: 'component-slider',
                    //   i18n: 'Slider'
                    // },

                    // {
                    //   url: '/components/tooltip',
                    //   name: 'Tooltip',
                    //   slug: 'component-tooltip',
                    //   i18n: 'Tooltip'
                    // },
                    // {
                    //   url: '/components/upload',
                    //   name: 'Upload',
                    //   slug: 'component-upload',
                    //   i18n: 'Upload'
                    // }
                ]
            },
            {
                url: null,
                name: 'Extensions',
                icon: 'PlusCircleIcon',
                i18n: 'Design',
                submenu: [{
                        url: '/ui-elements/data-list/thumb-view',
                        name: 'Select',
                        icon: 'PocketIcon',
                        slug: 'extra-component-select',
                        i18n: 'Upload Artwork'
                    },


                ]

            },
            {
              url: null,
              name: 'Support',
              icon: 'ShoppingCartIcon',
              i18n: 'Supplier manager',
              submenu: [{
                url: '/apps/eCommerce/shop',
                slug: 'ecommerce-shop',
                i18n: 'Supplier list'
              },
              //  {
              //     url: '/forms/form-elements/select/createinvoice',
              //     name: 'createinvoice',
              //     slug: 'component-button-group',
              //     i18n: 'Create invoice'
              ]
          }
        ]
    },



]
