from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from .models import Product
from .forms import ProductForm

class ProductListView(ListView):
    model = Product
    template_name = 'FlorianApp/product_list.html'
    context_object_name = 'products'
    ordering = ['-created_at']
    paginate_by = 10

class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm
    template_name = 'FlorianApp/product_form.html'
    success_url = reverse_lazy('FlorianApp:product_list')

class ProductDetailView(DetailView):
    model = Product
    template_name = 'FlorianApp/product_detail.html'
    context_object_name = 'product'

class ProductUpdateView(UpdateView):
    model = Product
    form_class = ProductForm
    template_name = 'FlorianApp/product_form.html'
    context_object_name = 'product'
    
    def get_success_url(self):
        return reverse_lazy('FlorianApp:product_detail', kwargs={'pk': self.object.pk})

class ProductDeleteView(DeleteView):
    model = Product
    template_name = 'FlorianApp/product_confirm_delete.html'
    success_url = reverse_lazy('FlorianApp:product_list')
