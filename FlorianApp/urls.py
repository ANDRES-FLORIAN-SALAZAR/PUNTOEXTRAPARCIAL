from django.urls import path
from django.views.generic import RedirectView
from . import views

app_name = 'FlorianApp'

urlpatterns = [
    path('', RedirectView.as_view(pattern_name='FlorianApp:product_list'), name='home'),
    path('products/', views.ProductListView.as_view(), name='product_list'),
    path('products/create/', views.ProductCreateView.as_view(), name='product_create'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    path('products/<int:pk>/update/', views.ProductUpdateView.as_view(), name='product_update'),
    path('products/<int:pk>/delete/', views.ProductDeleteView.as_view(), name='product_delete'),
]
