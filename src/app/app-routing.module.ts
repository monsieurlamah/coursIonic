import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'swipper',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'profile-menu',
    loadChildren: () => import('./pages/popup/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/popup/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./pages/components/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'blog-post/:id',
    loadChildren: () => import('./pages/blog-post/blog-post.module').then( m => m.BlogPostPageModule)
  },
  {
    path: 'book-achef',
    loadChildren: () => import('./pages/book-achef/book-achef.module').then( m => m.BookAchefPageModule)
  },
  {
    path: 'change-address',
    loadChildren: () => import('./pages/change-address/change-address.module').then( m => m.ChangeAddressPageModule)
  },
  {
    path: 'chef-details',
    loadChildren: () => import('./pages/chef-details/chef-details.module').then( m => m.ChefDetailsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'face-id',
    loadChildren: () => import('./pages/face-id/face-id.module').then( m => m.FaceIdPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'my-favourite',
    loadChildren: () => import('./pages/my-favourite/my-favourite.module').then( m => m.MyFavouritePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'opt-page',
    loadChildren: () => import('./pages/opt-page/opt-page.module').then( m => m.OptPagePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'search-chef',
    loadChildren: () => import('./pages/search-chef/search-chef.module').then( m => m.SearchChefPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'touch-id',
    loadChildren: () => import('./pages/touch-id/touch-id.module').then( m => m.TouchIdPageModule)
  },
  {
    path: 'verify-phone',
    loadChildren: () => import('./pages/verify-phone/verify-phone.module').then( m => m.VerifyPhonePageModule)
  },
  {
    path: 'your-order',
    loadChildren: () => import('./pages/your-order/your-order.module').then( m => m.YourOrderPageModule)
  },
  
  {
    path: 'swipper',
    loadChildren: () => import('./pages/swipper/swipper.module').then( m => m.SwipperPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
